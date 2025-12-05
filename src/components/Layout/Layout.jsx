import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
        <header> <Navbar /> </header>

        <main className="flex-1">
            <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default Layout