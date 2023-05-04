import React from "react";
import { BrowserRouter } from "react-router-dom";

export const BrowserRouterDecorator = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
