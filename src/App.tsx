import './App.css'
import {Route, Routes} from "react-router-dom";
import Default from "./layouts/Default/Default.tsx";
import Home from "./pages/Home/Home.tsx";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
