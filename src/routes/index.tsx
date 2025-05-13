import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TestAPI from "../pages/Test/api";
import Register from "../pages/Register";
import Login from "../pages/Login";
import User from "../pages/User";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: 'test-api',
		element: <TestAPI />,
	},
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'user',
    element: <User />,
  }
]);

export default router;