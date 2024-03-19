import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import ParentContext from './Context/ParentContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-sqwbd4wiciu8yg0s.us.auth0.com"
    clientId="9c3UjDYKtLIW5lyQzoT4ChYmU0uBwmrE"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <ParentContext>
        <App />
      </ParentContext>
    </BrowserRouter>
  </Auth0Provider>,
);