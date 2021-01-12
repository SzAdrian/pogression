import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirestoreProvider } from "@react-firebase/firestore";
import firebase from "firebase";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import "./index.css";
import AppContextProvider from "./components/AppContext";

const darkTheme = createMuiTheme({
  palette: {
    primary: { main: "#fa4454" },
    info: { main: "#364966" },
    type: "dark",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <FirestoreProvider {...firebaseConfig} firebase={firebase}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ThemeProvider>
    </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
