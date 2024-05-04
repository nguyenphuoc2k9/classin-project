import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const LoginPage = () => {
  const theme = useTheme();
  const user = useSelector((state)=>state.user)
  console.log(import.meta.env.VITE_BASE_URL)
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    
    <Box>
      {user ?<Navigate to="/home"/>: ""}
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
