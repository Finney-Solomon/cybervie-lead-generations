import { Header } from "./components/Header";
import { HomePage } from "./page/HomePage";
import "./App.css";
import { SnackBarNotification } from "./components/SnackBarNotification";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <SnackBarNotification />
    </div>
  );
}

export default App;
