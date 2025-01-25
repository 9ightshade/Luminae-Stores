import Routes from './routes';
import { AuthProvider } from './hooks/useAuth';

import Home from './pages/Home';
import AppRoutes from './appRoutes';
function App() {

  return (
    <AppRoutes />
  )
}

export default App
