import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <Typography variant="body2">
          SHIPPING FREE ON PREPAID ORDER ALL OVER INDIA
        </Typography>
      </div>
      <Navbar />
    </div>
  );
};
