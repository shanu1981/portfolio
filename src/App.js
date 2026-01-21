import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-[#0f1624] text-white" : "bg-[#EDF2F8] text-[#0f1624]"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
    </div>
  );
}

export default App;
