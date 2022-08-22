import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <div className="App">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MainContent darkMode={darkMode} />
            <Footer />
        </div>
    );
}

export default App;
