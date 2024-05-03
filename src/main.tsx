import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Here the bang symbol (!) is used to tell the ts compiler that it's sure that the 'root' element exists.
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
