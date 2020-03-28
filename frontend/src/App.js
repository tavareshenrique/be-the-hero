import React from 'react';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';

import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import AlertTemplate from 'react-alert-template-basic';

import Header from '~/components/Header';
import GlobalStyle from './styles/global';

import Routes from './routes';

const options = {
  position: positions.TOP_CENTER,
  timeout: 15000,
  offset: '30px',
  transition: transitions.SCALE,
};

function App() {
  return (
    <div className="App">
      <AlertProvider template={AlertTemplate} {...options}>
        <ToastContainer />
        <Header />
        <Routes />
        <GlobalStyle />
      </AlertProvider>
    </div>
  );
}

export default App;
