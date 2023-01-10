import React from 'react';
import Dashboard from './pages/dashboard';
import GlobalStyle from './styles/GlobalStyle';


const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Dashboard />
    </div>
  ); 
};

export default App;