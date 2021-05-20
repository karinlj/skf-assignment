import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main_section">
        {/* <Sidebar /> */}
        <MainContent />
      </section>
    </div>
  );
}

export default App;
