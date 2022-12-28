import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";

// component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// toast
import { Toaster } from "react-hot-toast";

// UI
import { ChakraProvider } from "@chakra-ui/react";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <ChakraProvider>
          <Navbar />
          <App />
          <Footer />
        </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
