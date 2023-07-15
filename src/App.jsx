import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./shared/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
