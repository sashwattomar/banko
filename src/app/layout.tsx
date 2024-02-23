import { Footer, Header } from "@/components";
import { Container } from "@mui/material";
import React, { PropsWithChildren } from "react";
import "../styles/global.scss";
import "./layout.scss";

const Layout: React.FC = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shoe eCommerce" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <title>Banko</title>
      </head>
      <body>
        <Header />
        <Container maxWidth="lg" className="container">
          <div className="content">{children}</div>
        </Container>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
