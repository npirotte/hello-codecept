import 'regenerator-runtime/runtime';
import { render } from "react-dom";
import * as React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";
import { App } from "./App";
import { RelayEnvironmentProvider } from 'relay-hooks';
import { environment } from "./config/environment";

(() => {
  const domNode = document.getElementById("app");

  render((
    <RelayEnvironmentProvider environment={environment}>
    <ThemeProvider>
      <CSSReset />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
    </RelayEnvironmentProvider>
  ), domNode);
})();
