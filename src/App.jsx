import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import UserResults from './components/user/UserResults';
import User from './components/user/User';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {index: true, element: <Home />},
        {path: "/about", element: <About />},
        {path: "/user", element: <User />}
      ],
    },
  ]);

  return (
    <div className="bg-slate-800 min-h-screen min-w-max">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
