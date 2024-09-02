import { Button, ConfigProvider, theme } from "antd";
import React, { useState } from "react";
import "./App.css";
import Language from "./Components/Language";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { token } = theme.useToken();

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: isDarkMode ? "#ffffff" : "#000000",
        },
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div
        className="app"
        style={{ backgroundColor: isDarkMode ? "#333" : "#ffffff" }}
      >
        <Language />
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 10,
            right: 10,
          }}
        >
          <Button onClick={toggleTheme}>
            {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
