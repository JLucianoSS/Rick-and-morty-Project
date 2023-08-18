import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Establece el punto de entrada. Basicamente conecta App.js con  index.html
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

/*La etiqueta provider:
  Nos provee la "conexion" entre el store(redux) con index.js/app.js(nuestra aplicación
  de react)
  <Provider> <App/> </Provider> => conexion entre React y redux(store de redux)
*/
