import ReactDOM, { createRoot } from 'react-dom/client';
import Products from './views/Product/Products';
import Resources from './views/Resources/Resources';
import Features from './views/Features/Features';
import './index.css';
 
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Products />,
         },
         {
            path: "/resources",
            element: <Resources />,

         },
         {
            path: "/features",
            element: <Features />,
         }
    ]
)

root.render(<RouterProvider router={router}/>)

