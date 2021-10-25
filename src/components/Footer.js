import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "right",
        padding: 3,
        backgroundColor: "#BDBDBD",
      }}
    >
      <Link href="https://twitter.com/?lang=it">TWITTER | </Link>
      <Link href="https://www.facebook.com/">FACEBOOK</Link>
    </Box>
  );
}
