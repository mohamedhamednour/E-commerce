import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { Provider } from "react-redux";
import { Store } from "./components/reducer";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

// import {Store} from './store/reducer_toolkit'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
