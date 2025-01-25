import Nav from "../components/nav";
import SignIn from "../components/signIn";
import { AuthProvider } from "../context/userAuth";
import bgimage from "../assets/png/background_img.png";

function Login() {
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
      }}>
      <AuthProvider>
        <Nav />
        <SignIn />
      </AuthProvider>
    </div>
  );
}

export default Login;
