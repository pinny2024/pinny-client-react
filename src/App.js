import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import LoginPage from "./pages/login";
import HomePage from "./pages/home"
import IncomeExpendPage from './pages/income-expend';
import IncomeExpendPostPage from './pages/income-expend-post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/income-expend/seperate" element={<IncomeExpendPage/>}/>
        <Route path="/income-expend/post" element={<IncomeExpendPostPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
