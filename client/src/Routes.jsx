import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import AuthForm from "./pages/AuthForm";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return "logged in!" + username;
  }

  return <AuthForm />;
}
