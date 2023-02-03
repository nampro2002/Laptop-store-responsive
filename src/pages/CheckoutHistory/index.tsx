import * as React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TableHead,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllCheckedOut } from "../../redux/checkedoutSlice";
import { RootState } from "../../redux/store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css"
import { GetUserInfo } from "../../redux/userSlice";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function CustomPaginationActionsTable() {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = userInfo.id;
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(GetUserInfo(userInfo));
    dispatch(getAllCheckedOut(userId));
  }, [dispatch]);
  const rows = useAppSelector(
    (state: RootState) => state.checkedOut.checkedoutList
  );
  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );
  let productCheckedList = rows.map((row) => {    
    const descNew = row.description.map((desc) => {      
      const product = productList.find((prod: any) => prod.id === desc.prodId);      
      if (product) {
        return {
          prodId: desc.prodId,
          quantity: desc.quantity,
          name: product.name,
          price: product.price,
        };
      } else {
        return {
          prodId: "",
          quantity: 0,
          name: "",
          price: 0,
        };
      }
    });    
    return {
      ...row,
      description: descNew,
    };
  });
  

  const theme = createTheme({
    components: {
      // Name of the component
      MuiAccordion: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            "&:before": {
              display: "none",
            },
          },
        },
      },
    },
  });

  return (
    <Box minHeight="400px">
      <Box width="85%" margin="0 auto" className="container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Phone number</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productCheckedList.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">
                    <ThemeProvider theme={theme}>
                      <Accordion sx={{ boxShadow: "none", margin: "0 auto" }}>
                        <AccordionSummary
                          sx={{
                            width: "60%",
                            margin: "0 auto",
                            "&:before": {
                              display: "none",
                            },
                          }}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography fontSize="14px">
                            Chi tiết đơn hàng
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{ width: "300px", margin: "0 auto" }}
                        >
                          {row.description.map((desc) => (
                            <>
                              <Typography fontSize="14px" align="right">
                                {desc.name} x {desc.quantity} ={">"}{" "}
                                {desc.quantity * desc.price}
                              </Typography>
                            </>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    </ThemeProvider>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
