import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export function AppFooter() {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: "auto", textAlign: "center" }}>
      <Typography variant="body2" color="text.secondary">
        An unofficial guide. Not affiliated with or endorsed by Toastmasters International. See the{" "}
        <Link href="https://www.toastmasters.org/education/pathways" target="_blank" rel="noopener">
          official Pathways site
        </Link>{" "}
        for authoritative information.
      </Typography>
    </Box>
  );
}
