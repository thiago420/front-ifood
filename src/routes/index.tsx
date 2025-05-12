import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TestAPI from "../pages/Test/api";
import Register from "../pages/Register";

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
  }
]);

export default router;