import { Outlet } from "react-router-dom"
import Footer from "../../widgets/Footer"
import Header from "../../widgets/Header"

const DefaultLayout=()=>{
  return (<>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>)
}
export default DefaultLayout;