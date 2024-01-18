import "./App.css";
import Router from "./routers/Router";
import Navbar from "./components/Navbar";
import PizzaProvider from "./context/PizzaContext";

function App() {
  return (
    <>
      <PizzaProvider>
        <Navbar />
        <Router />
      </PizzaProvider>
    </>
  );
}

export default App;
