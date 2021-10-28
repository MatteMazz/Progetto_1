import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "right",
        padding: 3,
        backgroundColor: "#BDBDBD",
      }}
    >
      <Link href="https://twitter.com/?lang=it" target="_blank">
        TWITTER |{" "}
      </Link>
      <Link href="https://www.facebook.com/" target="_blank">
        FACEBOOK
      </Link>
    </Box>
  );
};
