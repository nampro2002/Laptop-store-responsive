import { Box } from "@mui/material";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import "./style.css";
interface CategoryComponentProps {
  category: string;
}

function CategoryComponent({ category }: CategoryComponentProps) {
  const [clientXonMouseDown, setClientXonMouseDown] = useState(null);
  const imgUrl = `imgs/logo/${category}.jpg`;
  // const [inputSearch, setInputSearch] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmitSearch = (e: any, searchParams: string) => {   

    // if (inputSearch === "") {
    //   return;
    // }
    e.stopPropagation();
    if (clientXonMouseDown !== e.clientX) {
      // prevent link click if the element was dragged
      e.preventDefault();
      return;
    }
    const input = searchParams;
    // setInputSearch("");
    return navigate({
      pathname: "search",
      search: createSearchParams({
        category: input as string,
      }).toString(),
    });
  };
  const handleOnMouseDown = (e: any) => {
    setClientXonMouseDown(e.clientX);
    e.preventDefault(); // stops weird link dragging effect
  };
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box
          onMouseDown={(e) => handleOnMouseDown(e)}
          onClick={(e) => handleSubmitSearch(e, category)}
          position="relative"
          sx={{
            "&:hover .cate-modal": {
              bgcolor: "#00000040",
            },
          }}
        >
          <img
            className="cate-car-img"
            src={imgUrl}
            width="600px"
            max-height="400px"
            style={{ padding: "10px", borderRadius: "20px" }}
          />
          <Box
            className="cate-modal"
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CategoryComponent;
