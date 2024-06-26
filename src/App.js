import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import Splash  from './componets/comm/splash';
import LoginPage from "./pages/auth/login";
import TermUsePage from './pages/auth/term-use';
import EmailPage from './pages/auth/email';
import NickNamePage from './pages/auth/nickname';
import PassWordPage from './pages/auth/password';
import ProfilePage from './pages/auth/profile';
import HomePage from "./pages/home/home"
import PlanPage from "./pages/plan/plan"
import IncomeExpendPage from './pages/income-expend/income-expend';
import ExpendPostPage from './pages/income-expend/expend-post';
import IncomePostPage from './pages/income-expend/income-post';
import CollectionDataPage from './pages/income-expend/collection-data';
import CollectionDataHistory from './pages/income-expend/collection-money-history';
import QuestData from './pages/quest/quest';
import PlanCategoryPage from './pages/plan/plan-category';
import PlanDetailPage from './pages/plan/plan-detail';
import PlanListPage from './pages/plan/plan-list';
import PlanChangeDetail from './pages/plan/plan-change-detail';
import EditPlanInputPage from './pages/plan/edit-plan-input';
import QuestSelectPage from './pages/quest/quest-select';
import QuestInputPage from './pages/quest/quest-input';
import QuestPricePage from './pages/quest/quest-price';
import QuestUpdateSelectPage from './pages/quest/update/quest-select';
import QuestUpdatePage from './pages/quest/quest-update';
import QuestUpdatePricePage from './pages/quest/update/quest-price'
import MyPagePage from './pages/mypage/mypage';
import MyInformationPage from './pages/mypage/myinformation';
import NicknameEditPage from './pages/mypage/nickname-edit';
import MyBadgePage from './pages/mypage/mybadge';
import LogoutPage from './pages/mypage/logout';
import MypagePage from './pages/mypage/mypage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/term-use" element={<TermUsePage />} />
        <Route path="/term-use/email" element={<EmailPage />} />
        <Route path="/term-use/password" element={<PassWordPage />} />
        <Route path="/term-use/nickname" element={<NickNamePage />} />
        <Route path="/term-use/profile" element={<ProfilePage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/plan" element={<PlanPage/>} />
        <Route path="/income-expend/seperate" element={<IncomeExpendPage/>}/>
        <Route path="/income-expend/collection" element={<CollectionDataPage/>}/>
        <Route path="/expend/post" element={<ExpendPostPage/>}/>
        <Route path="/income/post" element={<IncomePostPage/>}/>
        <Route path="/collection" element={<CollectionDataHistory />} />
        <Route path="/quest" element={<QuestData/>} />
        <Route path="/plan/plan-categroy" element={<PlanCategoryPage/>}/>
        <Route path="/plan/plan-detail" element={<PlanDetailPage/>}/>
        <Route path="/plan/plan-list" element={<PlanListPage/>}/>
        <Route path="/plan/plan-change-detail" element={<PlanChangeDetail/>}/>
        <Route path="/plan/edit-plan-input/:id" element={<EditPlanInputPage />} />
        <Route path="/quest/select" element={<QuestSelectPage/>}/>
        <Route path='/quest/input/content' element={<QuestInputPage/>}/>
        <Route path='/quest/input/price' element={<QuestPricePage/>}/>
        <Route path='/quest/update/select' element={<QuestUpdateSelectPage/>}/>
        <Route path='/quest/update/content' element={<QuestUpdatePage/>}/>
        <Route path='/quest/update/price' element={<QuestUpdatePricePage/>}/>
        <Route path='/mypage' element={<MyPagePage/>}/>
        <Route path='/mypage/myinformation' element={<MyInformationPage/>}/>
        <Route path='/mypage/myinformation/nickname-edit' element={<NicknameEditPage />}/>
        <Route path='/mypage/mybadge' element={<MyBadgePage/>}/>
        <Route path='/logout' element={<LogoutPage/>}/>
        <Route path='/mypage' element={<MypagePage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
