import { useState, useEffect } from "react";
import lightIcon from "../../assets/sun-light-mode.png";
import darkIcon from "../../assets/sun-dark-mode.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

    // Cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);


  return (
    <nav className={`w-full ${darkMode ? "bg-[#0f1624] text-white" : "bg-[#EDF2F8] text-[#0f1624]"}`}>
      <div className="flex items-center justify-between px-2 md:px-6 lg:px-6 py-2">
        <div className="text-[35px] lg:text-[35px] font-extrabold tracking-wide">
          SH<span className="text-[#dc143c] font-extrabold text-[35px] lg:text-[35px]">ANU</span>
        </div>
        <ul className="hidden lg:flex items-center gap-2 uppercase text-base font-semibold font-poppins">
          <li className="px-4 py-2 text-[#dc143c] transition-all duration-200 rounded-xl hover:bg-[#dc143c] hover:text-white cursor-pointer">
            Home
          </li>
          {["About", "Work", "Skills", "Contact"].map((item) => (
            <li key={item} className="px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#dc143c] hover:text-white cursor-pointer">
              {item}
            </li>
          ))}

          {/* THEME TOGGLE */}
          <li className="ml-2 cursor-pointer flex items-center" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (<img src={darkIcon} alt="Dark mode" className="w-10 h-10" />) : (<img src={lightIcon} alt="Light mode" className="w-10 h-10" />)}
          </li>
        </ul>

        {/* MOBILE */}
        <div className="flex items-center gap-3 lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-2 border-[#9ec3ff] rounded-lg">
            <span className="block w-5 h-[2px] bg-current mb-1"></span>
            <span className="block w-5 h-[2px] bg-current mb-1"></span>
            <span className="block w-5 h-[2px] bg-current"></span>
          </button>

          <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
            {darkMode ? (<img src={darkIcon} alt="Dark mode" className="w-10 h-10" />) : (<img src={lightIcon} alt="Light mode" className="w-10 h-10" />)}
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed top-0 right-0 h-screen w-[75%] max-w-sm bg-[#EDF2F8] dark:bg-[#0f1624] z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>
        {/* MENU ITEMS */}
        <div className="px-6 space-y-6 font-poppins font-semibold uppercase text-lg">
          <div className="text-[#dc143c]">Home</div>
          <div>About</div>
          <div>Work</div>
          <div>Skills</div>
          <div>Contact</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
