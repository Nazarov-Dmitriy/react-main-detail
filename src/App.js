import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      {/* <Main></Main>
      <Details></Details> */}
      <Routes>
        <Route path="/" exact element={<Main />}/>
        <Route path="/:id/details" element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
