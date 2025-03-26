import { Outlet } from "react-router-dom"
import Footer from "../../widgets/Footer";

const AuthLayout=()=>{
  return (<>
    <div className="app-container">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  </>)
}
export default AuthLayout;