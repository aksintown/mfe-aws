import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
// To avid css class collison
const generateClassName = createGenerateClassName({
  productionPrefix = 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        {/* <Header /> */}
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>

  );
};
