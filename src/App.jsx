import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Countries from './components/Countries/Countries';
import Error from './components/Error/Error';
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
        {
          path: "/region/:name_region",
          loader: async ({params}) => {
            return fetch(`https://restcountries.com/v3.1/region/${params.name_region}`);
          },
          element: <Countries></Countries>
        }
      ]
    },
    {path: "/*", element: <Error></Error>}
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
