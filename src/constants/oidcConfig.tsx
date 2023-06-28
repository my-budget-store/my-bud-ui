import { User } from "oidc-client-ts";
import { IdentityConstants as IdentityConstants } from "./apiConstants";

export const oidcConfig = {
  authority: IdentityConstants.identityServerApi,
  client_id: IdentityConstants.clientId,
  redirect_uri: IdentityConstants.redirectUri,
  response_type: IdentityConstants.code,
  scope: IdentityConstants.scopes,
  post_logout_redirect_uri: IdentityConstants.postLogoutRedirectUri,
  onSigninCallback: (_user: User | void): void => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};
