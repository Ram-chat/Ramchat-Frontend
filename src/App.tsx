import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
