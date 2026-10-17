import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppHeader />
      <Container component="main" maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Find your path
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Explore every Toastmasters Pathways path, see the projects in each level, and know exactly
          what to do next.
        </Typography>
      </Container>
      <AppFooter />
    </Box>
  );
}

export default App;
