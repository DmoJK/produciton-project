import { Suspense } from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme" 
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { classNames } from "shared/lib/classNames/classNames"

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная страница</Link>
      <br />
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
