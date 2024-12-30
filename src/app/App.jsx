import React from "react"
import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./router"
import { Block5 } from "../pages/home/ui/block5/Block5"

export function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  )
}
