import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main_section">
        <MainContent />
      </section>
    </div>
  );
}

export default App;
