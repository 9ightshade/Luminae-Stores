import Routes from './routes';
import { AuthProvider } from './hooks/useAuth';
import { RegisterForm } from './components/auth/RegisterForm';
import { LoginForm } from './components/auth/LoginForm';
function App() {

  return (
    //   <AuthProvider>
    //   <Routes />
    // </AuthProvider>
    <LoginForm />
  )
}

export default App
