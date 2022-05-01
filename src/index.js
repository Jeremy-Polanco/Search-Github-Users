import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GitHubProvider, GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-o50l00gl.us.auth0.com
// ejRPOBAFJRuC8VWHDnZzVjq2tOpRS2kW

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-o50l00gl.us.auth0.com"
      clientId="ejRPOBAFJRuC8VWHDnZzVjq2tOpRS2kW"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GitHubProvider>
        <App />
      </GitHubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
