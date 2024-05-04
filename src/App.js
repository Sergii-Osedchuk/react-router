import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/Home';
import ProductsPage from './components/Products';

const routesDefinition = createRoutesFromElements(
  <Route>
    <Route path= '' element= {<HomePage />}/>
    <Route path= '/products' element= {<ProductsPage />}/>
  </Route>
);

// const router = createBrowserRouter([
//   {path: '', element: <HomePage />},
//   {path: '/products', element: <ProductsPage />}
// ]);

const router = createBrowserRouter(routesDefinition)

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
