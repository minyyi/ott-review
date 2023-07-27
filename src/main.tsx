import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyPage from "./pages/MyPage.js";
import ReviewRegister from "./pages/ReviewRegister.js";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Review from './pages/Review.tsx';
import Setting from "./pages/Setting.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/my", 
    element: <MyPage name={'name'}/>,
  },
  {
    path: "/setting", 
    element: <Setting />,
  },

  {
    path: "/review",
    element: <Review title={'title'} text={'text'} />,
  },

  {
    path:"/reviewre", 
    element: <ReviewRegister  />,
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
