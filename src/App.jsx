import { Button, ConfigProvider, theme } from "antd";
import React, { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons/Buttons";

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
          fontSize: "18px",
        },
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div
        className="app"
        style={{ backgroundColor: isDarkMode ? "#333" : "#ffffff" }}
      >
        {/* <Language /> */}
        <Buttons />
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
