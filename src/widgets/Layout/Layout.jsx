
import { Outlet } from "react-router-dom"
import { Header } from "../../widgets"
import { Footer } from "../../widgets"

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
