import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import LoginPage from "./pages/auth/login";
import HomePage from "./pages/home/home"
import PlanPage from "./pages/plan/plan"
import IncomeExpendPage from './pages/income-expend/income-expend';
import ExpendPostPage from './pages/income-expend/expend-post';
import IncomePostPage from './pages/income-expend/income-post';
import CollectionDataPage from './pages/income-expend/collection-data';
import CollectionDataHistory from './pages/income-expend/collection-money-history';
import QuestData from './pages/quest/quest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/plan" element={<PlanPage/>} />
        <Route path="/income-expend/seperate" element={<IncomeExpendPage/>}/>
        <Route path="/income-expend/collection" element={<CollectionDataPage/>}/>
        <Route path="/expend/post" element={<ExpendPostPage/>}/>
        <Route path="/income/post" element={<IncomePostPage/>}/>
        <Route path="/collection" element={<CollectionDataHistory />} />
        <Route path="/quest" element={<QuestData/>} />
      </Routes>
    </Router>
  )
}

export default App;
