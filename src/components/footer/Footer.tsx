import React from "react";
import "./footer.scss";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import EastSharpIcon from "@mui/icons-material/EastSharp";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top_section">
        <Typography>QUICK LINKS</Typography>
        <ul className="quick_links">
          {quickLinks.map(({ link, label }) => (
            <li key={label}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
        <Typography>Subscribe to our emails</Typography>

        <div className="input_box">
          <TextField
            label="Email"
            variant="standard"
            size="small"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <EastSharpIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <Divider />
      <div className="bottom_section container">
        <Typography variant="caption">© 2024, All rights reserved</Typography>
      </div>
    </div>
  );
};

const quickLinks = [
  { label: "Shipping policy", link: "/" },
  { label: "Refund policy", link: "/" },
  { label: "Privacy policy", link: "/" },
  { label: "Terms of service", link: "/" },
];
