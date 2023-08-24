import Header from "./Components/Header";
import Body from "./Components/Body";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>{
    setTheme((curr) =>  (
      curr === "light" ? "dark" : "light" 
    ))
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className="container" id={theme}>
        <Header />
        <Body />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
