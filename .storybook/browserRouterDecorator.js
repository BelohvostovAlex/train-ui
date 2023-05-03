import React from "react";
import { BrowserRouter } from "react-router-dom";

export const BrowserRouterecorator = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
