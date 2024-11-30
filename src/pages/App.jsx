import React from "react";
import { Provider } from "react-redux";
import { AppRoutes, store } from "../config";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
