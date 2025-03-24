import { Outlet } from "react-router-dom"
import Footer from "../../widgets/Footer";

const AuthLayout=()=>{
  return (<>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>)
}
export default AuthLayout;