import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Layout
import RootLayout from './components/layout/RootLayout';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderHistory from './pages/OrderHistory';
import NotFound from './pages/NotFound';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        children: [
          {
            index: true,
            element: <Products />
          },
          {
            path: ':productId',
            element: <ProductDetail />
          }
        ]
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        )
      },
      {
        path: 'orders',
        element: (
          <ProtectedRoute>
            <OrderHistory />
          </ProtectedRoute>
        )
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]);

// Root Component
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;