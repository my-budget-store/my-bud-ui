import { User } from "oidc-client-ts";

export const oidcConfig = {
  authority: "https://localhost:7121",
  client_id: "mybud",
  redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "openid profile products.api",
  post_logout_redirect_uri: "http://localhost:3000",
  onSigninCallback: (_user: User | void): void => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};
