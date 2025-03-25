import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import AuthLayout from "../layouts/AuthLayout"
import HomePage from "../../pages/HomePage"
import PostPage from "../../pages/PostPage"
import LoginPage from "../../pages/LoginPage"
import SignupPage from "../../pages/SignupPage"
import FormSubmitBlocker from "./FormSubmitBlocker"

const router=createBrowserRouter([
  {
    path:"/",
    element :<DefaultLayout />,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"post",
        element:<PostPage />
      },
    ]
  },
  {
    path:"/login",
    element :<AuthLayout />,
    children:[
      {
        index:true,
        element:<LoginPage />
      },
    ]
  },
  {
    path:"/signup",
    element :<AuthLayout />,
    children:[
      {
        index:true,
        element:<SignupPage />
      },
    ]
  },
])

/*
function AppProvider({children}){
  return(
  <FormSubmitBlocker>
    {children}
    <RouterProvider  router={router} />
  </FormSubmitBlocker>
)
}
//*/
//*
//HOC::map
const AppProvider=({children})=>(
  <FormSubmitBlocker>
    {children}
    <RouterProvider  router={router} />
  </FormSubmitBlocker>
)
//*/

export default AppProvider;
  