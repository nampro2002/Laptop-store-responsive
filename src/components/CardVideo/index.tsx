import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { ICategory } from "../../types/types";

interface CardVideoProps {
  category: ICategory;
}

export default function CardVideo({ category }: CardVideoProps) {
  const videoScr = `/imgs/others/${category.name}.mp4`;
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
    >
      <Card
        component="li"
        sx={{
          flexGrow: 1,
          height: "300px",
          width: {
            xl: "350px",
            lg: "350px",
            md: "250px",
            sm: "150px",
          },
        }}
      >
        <CardCover>
          <video autoPlay loop muted poster="">
            <source src={videoScr} type="video/mp4" />
          </video>
        </CardCover>
      </Card>
    </Box>
  );
}
