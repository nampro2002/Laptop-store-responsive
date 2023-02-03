import { Button, Checkbox, Modal, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductComponent from "../../components/ProductComponent";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { IProduct } from "../../types/types";
function SearchPage() {
  const [filters, setFilters] = useState({
    sortFilter: 0,
  });
  const [searchParam] = useSearchParams();
  const paramInput = searchParam.get("input");
  const paramCategory = searchParam.get("category");
  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );
  let searchOut: IProduct[] = [];
  if (paramInput) {
    searchOut = productList.filter((prod) =>
      prod.name.toLowerCase().includes(paramInput.toLowerCase())
    );
  }
  if (paramCategory) {
    searchOut = productList.filter((prod) =>
      prod.category.toLowerCase().includes(paramCategory.toLowerCase())
    );
  }

  let listOut = searchOut;
  if (filters.sortFilter !== 0) {
    switch (filters.sortFilter) {
      case 10:       
        listOut = searchOut.slice().sort((prod1, prod2) => {
          return prod1.price - prod2.price;
        });
        break;

      case 20:       
        listOut = searchOut.slice().sort((prod1, prod2) => {
          return prod2.price - prod1.price;
        });
        break;

      // case 30:
      //   listOut = productList.sort((prod1, prod2)=>{
      //     return prod1.price - prod2.price
      //   })
      //   break;

      // case 40:
      //   listOut = productList.sort((prod1, prod2)=>{
      //     return prod1.price - prod2.price
      //   })
      //   break;

      default:
        break;
    }
  }
  const handleSort = (event: SelectChangeEvent<any>) => {
    setFilters({
      sortFilter:
        filters.sortFilter === Number.parseInt(event.target.value)
          ? 0
          : Number.parseInt(event.target.value),
    });
    // setFilters({
    //   ...filters,
    //   sortFilter: Number.parseInt(event.target.value),
    // });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    width: "300px",
  };
  return (
    <Box>
      {paramInput && (
        <Typography
          variant="h3"
          fontWeight="900"
          color="white"
          align="center"
          // mt="4%"
          mb="4%"
        >
          {`Kết quả tìm kiếm cho "${paramInput}"`}
        </Typography>
      )}
      {paramCategory && (
        <Typography
          variant="h3"
          fontWeight="900"
          color="white"
          align="center"
          // mt="4%"
          mb="4%"
        >
          {`Laptop "${paramCategory}"`}
        </Typography>
      )}

      <Box width="95%" margin="0 auto" position="relative">
        <Box>
          <Box>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                border: "2px solid #fff",
                paddingY: "7px",
                paddingX: "20px",
                // borderRadius: "7px",
                "&:hover": {
                  border: "2px solid #000",
                },
                fontWeight: "bold",
                marginBottom: "20px",
                display: {
                  xl: "none",
                  lg: "none",
                  md: "none",
                  sm: "block",
                  xs: "block",
                },
              }}
              onClick={handleOpen}
            >
              Filter
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box width="90%" sx={style}>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    border: "2px solid #eaeaea",
                  }}
                  //   component="nav"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Sort by
                    </ListSubheader>
                  }
                >
                  <ListItem>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      fullWidth
                      sx={{
                        borderRadius: "0",
                        fontSize: "13px",
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #484850",
                          borderRadius: "0",
                        },
                      }}
                      defaultValue={0}
                      onChange={(e) => {
                        handleSort(e);
                        handleClose();
                      }}
                      value={filters.sortFilter}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Thấp -{">"} Cao</MenuItem>
                      <MenuItem value={20}>Cao -{">"} Thấp </MenuItem>
                    </Select>
                  </ListItem>
                </List>
              </Box>
            </Modal>
          </Box>
        </Box>
        <Grid container md={12}>
          <Grid
            lg={2}
            md={2}
            sx={{
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <Box width="90%">
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  border: "2px solid #eaeaea",
                }}
                //   component="nav"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Sort by
                  </ListSubheader>
                }
              >
                <ListItem>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    fullWidth
                    sx={{
                      borderRadius: "0",
                      fontSize: "13px",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #484850",
                        borderRadius: "0",
                      },
                    }}
                    defaultValue={0}
                    onChange={(e) => {
                      handleSort(e);
                      handleClose();
                    }}
                    value={filters.sortFilter}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Thấp -{">"} Cao</MenuItem>
                    <MenuItem value={20}>Cao -{">"} Thấp </MenuItem>
                  </Select>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item lg={10} md={10} sm={12}>
            <Grid container justifyContent="flex-start">
              {listOut.map((product) => (
                <Grid item lg={3} md={4} sm={6} key={product.id}>
                  <ProductComponent product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SearchPage;
