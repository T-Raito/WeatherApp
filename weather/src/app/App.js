import { Weather } from "../screens/Weather";
import { SearchedPlace } from "../screens/SearchedPlace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/searchedPlace" element={<SearchedPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
