import "./App.css";
import { Button } from "@costcolabs/forge-components";
import ShopMenuCallToAction from "./components/ShopMenuCallToAction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="phone-chrome.png" className="App-logo" alt="" />
        <ShopMenuCallToAction></ShopMenuCallToAction>
        <Button variant="primary-outline" onClick={() => console.log("Click")}>
          Forge Is Working
        </Button>
      </header>
    </div>
  );
}

export default App;
