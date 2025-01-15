import Routes from './routes';
import { AuthProvider } from './hooks/useAuth';
import { RegisterForm } from './components/auth/RegisterForm';
import { LoginForm } from './components/auth/LoginForm';
import { ForgotForm } from './components/auth/ForgotForm';
function App() {

  return (
    //   <AuthProvider>
    //   <Routes />
    // </AuthProvider>
    <ForgotForm />
  )
}

export default App
