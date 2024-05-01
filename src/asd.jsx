import React, { createContext, useContext } from 'react';

// Create a Context
const ThemeContext = createContext('light');

const GrandParent = () => {
  const theme = 'light';

  return (
    // Provide the context
    <ThemeContext.Provider value={theme}>
      <Parent />
    </ThemeContext.Provider>
  );
};

const Parent = () => {
  return <Child />; // No prop drilling needed
};

const Child = () => {
  // Consume the context
  const theme = useContext(ThemeContext);

  return <div>The current theme is {theme}</div>;
};

export default GrandParent;
