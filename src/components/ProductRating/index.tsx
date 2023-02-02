import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { updateProductRating } from "../../redux/productSlice";
import { IProduct } from "../../types/types";

interface ProductRatingProps {
  product: IProduct | undefined;
}

function ProductRating({ product }: ProductRatingProps) {
  const [rating, setRating] = useState<number | null>(null);
  const defaultRate = product?.rate;
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState("");
  const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue);
  };
  let finalRate;
  const productId = product?.id;

  const handleRating = () => {
    if (rating && defaultRate && productId) {
      finalRate = (defaultRate + rating) / 2;
      dispatch(updateProductRating({ productId, rate: finalRate }));
    }
    setComment("");
  };
  return (
    <Box mt="20px">
      <Box
        width="80%"
        margin="0 auto"
        bgcolor="#fff"
        padding="20px"
        boxSizing="border-box"
      >
        <Stack spacing="15px">
          <Typography variant="h6" fontWeight="400" fontSize="19px">
            Nhận xét về sản phẩm
          </Typography>
          <TextField
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            multiline
            rows={4}
            placeholder="Nhận xét"
            sx={{
              "& fieldset": { borderRadius: "0" },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #000",
                borderRadius: "0",
              },
            }}
          />
          <Typography variant="h6" fontWeight="400" fontSize="19px">
            Đánh giá trên thang điểm 5 sao
          </Typography>
          <Rating
            size="large"
            value={rating}
            precision={0.5}
            onChange={handleChange}
            // highlightSelectedOnly
          />
          <Stack direction="row" justifyContent="flex-end">
            <Button
              onClick={handleRating}
              variant="outlined"
              sx={{
                width: "50%",
                border: "1px solid #000",
                paddingY: "10px",
                borderRadius: "0",
                color: "#000",
                bgcolor: "#fff",
                "&:hover": {
                  bgcolor: "#fff",
                },
              }}
            >
              Gửi đánh giá
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default ProductRating;
