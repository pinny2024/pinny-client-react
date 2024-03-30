import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import LoginPage from "./pages/login";
import HomePage from "./pages/home"
import IncomeExpendPage from './pages/income-expend';
import ExpendPostPage from './pages/expend-post';
import IncomePostPage from './pages/income-post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/income-expend/seperate" element={<IncomeExpendPage/>}/>
        <Route path="/expend/post" element={<ExpendPostPage/>}/>
        <Route path="/income/post" element={<IncomePostPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
