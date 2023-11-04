import "./App.css";
import { Articles } from "./Components/Articles";
import { Header } from "./Components/Header";
import { InfoHeader } from "./Components/InfoHeader";

function App() {
  return (
    <div className="bg-secondary pb-4">
      <Header />
      <div className="w-75  mx-auto">
        <InfoHeader />
      </div>
      <Articles />
    </div>
  );
}

export default App;
