import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ICartProduct } from "../../types/types";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
interface CartComponentAcordionProps {
  cartProduct: ICartProduct;
}

function CartComponentAcordion({ cartProduct }: CartComponentAcordionProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{ boxShadow: "none" }}
    >
      <AccordionSummary
        sx={{
          padding: "0",
          width: "40%",
          flexDirection: "row-reverse",
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        }}
        id="panel1-header"
        aria-controls="panel1-content"
        expandIcon={<ChevronRightIcon fontSize="small" />}
      >
        <Typography variant="body1">Thêm thông tin</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          - CPU: AMD Ryzen 5-5500U (2.1GHz upto 4.0GHz, 8MB)
        </Typography>
        <Typography variant="body2">
          - RAM: 8GB khe rời DDR4 3200Mhz (2 khe, Nâng cấp tối đa 32GB)
        </Typography>
        <Typography variant="body2">
          - Ổ cứng: 256GB PCIe NVMe SSD cắm sẵn (nâng cấp tối đa 1TB SSD)
        </Typography>
        <Typography variant="body2">
          - VGA: NVIDIA® GeForce® GTX 1650 4GB GDDR6
        </Typography>
        <Typography variant="body2">
          - Màn hình: 15.6 inch FHD(1920 x 1080) Acer ComfyView IPS LED LCD,
          60Hz
        </Typography>
        <Typography variant="body2">- Pin: 3 Cell, 48Wh</Typography>
        <Typography variant="body2">- Cân nặng: 2.1kg</Typography>
        <Typography variant="body2">- HĐH: Windows 11 Home</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default CartComponentAcordion;
