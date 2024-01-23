import React from 'react'
import './index.css'
import 'normalize.css'
import { RouterProvider } from 'react-router-dom'
import * as ReactDOM from "react-dom/client";
import router from "@/router/index";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
