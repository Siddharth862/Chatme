import React, { useDarkMode } from 'react';
import DarkModeProvider from 'react-dark-mode';

const App = () => {
  const darkMode = useDarkMode();

  return (
    <DarkModeProvider>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        This is the content of your app.
      </div>
    </DarkModeProvider>
  );
};

export default App;