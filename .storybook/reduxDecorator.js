import React from "react";
import { Provider } from "react-redux";

import { store } from "../src/store";

export const reduxDecorator = (Story) => {
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
