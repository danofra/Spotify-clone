import SidebarComponent from "./component/SidbarComponent";
import PlayersComponent from "./component/PlayersComponent";
import NavbarlinksComponent from "./component/NavbarlinksComponent";
import MainComponent from "./component/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PreferitiComponent from "./component/PreferitiComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <SidebarComponent />
        </header>
        <main className="container-fluid mb-5">
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <NavbarlinksComponent />
            <Routes>
              <Route path="/" element={<MainComponent />} />
              <Route path="/preferiti" element={<PreferitiComponent />} />
            </Routes>
          </div>
        </main>
        <footer>
          <PlayersComponent />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
