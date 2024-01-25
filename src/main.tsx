import React from 'react'
import './index.css'
import 'normalize.css'
import { RouterProvider } from 'react-router-dom'
import * as ReactDOM from "react-dom/client";
import router from "@/router/index";
import store from "@/store";
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)
