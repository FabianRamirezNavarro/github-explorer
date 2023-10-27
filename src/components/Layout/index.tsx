import React, { PropsWithChildren } from "react";


import { Container } from "./styles";
import { LayoutProps } from "./types";

export function Layout({
  children,

}: PropsWithChildren<LayoutProps>) {
  return (
    <Container>
      {children}
    </Container>
  );
}
