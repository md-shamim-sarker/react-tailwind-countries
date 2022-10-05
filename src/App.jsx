import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Layout from './layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {path: "/", element: <Home></Home>},
        {path: "/home", element: <Home></Home>},
        {path: "/about", element: <About></About>},
        {path: "/services", element: <Services></Services>},
        {path: "/contact", element: <Contact></Contact>},
      ]
    },

  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
