import React from "react";
import { Wrapper } from "screens";
import { AuthProvider } from "contexts";
import { ThemeProvider } from "contexts/ThemeProvider";

const App = () => {

  return (
    <AuthProvider>
      <ThemeProvider>
        <Wrapper />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
