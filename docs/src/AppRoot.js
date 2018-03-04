import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import AppRoutes from './AppRoutes';
import AppShell from './AppShell';

export const AppRoot = props => {
  return (
    <BrowserRouter>
      <AppShell>
        {AppRoutes}
      </AppShell>
    </BrowserRouter>
  )
}

export default AppRoot;
