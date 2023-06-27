import axios from "axios";
import { v4 as guid } from "uuid";
import { useAuth } from "react-oidc-context";

export default function App() {
  const auth = useAuth();

  axios.interceptors.request.use(
    (config) => {
      config.headers["X-CorrelationId"] = guid();
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  switch (auth.activeNavigator) {
    case "signinSilent":
      return null;
    case "signoutRedirect":
      return null;
  }

  if (auth.isLoading) {
    return null;
  }
  return <></>;
}
