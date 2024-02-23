"use client";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import Link from "next/link";
import "./navbar.scss";
import { useState } from "react";

const redirection = [
  { label: "Home", link: "/home" },
  { label: "Slip Ons & Loafers", link: "/collections/slip" },
  { label: "Lace Ups & Monk Straps", link: "/collections/lace" },
  { label: "Our Bestsellers", link: "/collections/bestsellers" },
  { label: "Mules", link: "/collections/mules" },
  { label: "Boots", link: "/collections/boots" },
  { label: "Contact Us", link: "./contactus" },
];

const Navbar = () => {
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);
  return (
    <Box className="navbar_background">
      <Container maxWidth="lg" className="container">
        <Box
          className="navbar"
          sx={{
            p: {
              xs: "1.25rem 0",
              md: "1.25rem 3rem",
            },
            gap: {
              xs: "0",
              md: "1rem",
            },
          }}
        >
          <IconButton
            sx={{
              display: {
                xs: "inline-flex",
                md: "none",
              },
            }}
            onClick={() => setShowSideDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <h1>BANKO</h1>
          <List
            className="navbar_links"
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {redirection.map(({ label, link }) => (
              <li key={label}>
                <Link href={link}>{label}</Link>
              </li>
            ))}
          </List>
          <Box className="navbar_icons">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <LocalMallOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
      <Drawer
        open={showSideDrawer}
        onClose={() => setShowSideDrawer(false)}
        PaperProps={{ className: "side_drawer" }}
      >
        <List>
          {redirection.map(({ label, link }) => (
            <ListItem key={label}>
              <Link href={link}>{label}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
