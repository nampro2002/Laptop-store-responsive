import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

function FinalCheckOut() {
  return (
    <Box>
      <Box width="90%" margin="0 auto">
        <Stack direction='row' bgcolor='#fff' spacing='20%'>
          <Box width="500px" height="500px">
            <img
              src="/imgs/others/checkout.png"
              alt=""
              width="100%"
              height="100%"
            />
          </Box>
          <Stack direction='column' alignItems='center' justifyContent='center'>
            <Typography variant="h5"> Chuyển tiền chưa mà đòi hàng</Typography>
            <Typography variant="h5">Liên Hệ Facebook để nhận stk</Typography>
            <a href="https://www.facebook.com/profile.php?id=100011364880454">Nam Can</a>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default FinalCheckOut;
