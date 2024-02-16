import SidebarComponent from "./component/SidbarComponent";
import PlayersComponent from "./component/PlayersComponent";
import NavbarlinksComponent from "./component/NavbarlinksComponent";
import MainComponent from "./component/MainComponent";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <SidebarComponent />
      </header>
      <main className="container-fluid">
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          <NavbarlinksComponent />
          <MainComponent />
        </div>
      </main>
      <footer>
        <PlayersComponent />
      </footer>
    </>
  );
}

export default App;
