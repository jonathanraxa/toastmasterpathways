import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

export function AppHeader() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <RecordVoiceOverIcon sx={{ mr: 1.5 }} />
        <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
          Pathways Guide
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
