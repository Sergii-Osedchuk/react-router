import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';

// const routesDefinition = createRoutesFromElements(
//   // <Routes>
//   //   <Route path='/' element={<RootLayout />} >
//   //     <Route path= '' element= {<HomePage />}/>
//   //     <Route path= '/products' element= {<ProductsPage />}/>
//   //   </Route>
//   // </Routes>
// );

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '', element: <HomePage />},
      {path: '/products', element: <ProductsPage />},
      {path: 'products/:productId', element: <ProductDetail />}
    ]
  },
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
