import HomePage from './components/pages/home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SupportPage from './components/pages/support/SupportPage';
import LearnPage from './components/pages/learn/LearnPage';
import TeamPage from './components/pages/team/TeamPage';
import PrivacyPage from './components/pages/privacy/PrivacyPage';
import TermsPage from './components/pages/terms/TermsPage';
import GDPRPage from './components/pages/gdpr/GDPRPage';
import SignInPage from './components/pages/signIn/SignInPage';
import SignUpPage from './components/pages/signUp/SignUpPage';
import ForgetPasswordPage from './components/pages/forgetPassword/ForgetPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/supportpage" element={<SupportPage />}></Route>
        <Route exact path="/learnpage" element={<LearnPage />}></Route>
        <Route exact path="/teampage" element={<TeamPage />}></Route>
        <Route exact path="/privacypage" element={<PrivacyPage />}></Route>
        <Route exact path="/termspage" element={<TermsPage />}></Route>
        <Route exact path="/gdprpage" element={<GDPRPage />}></Route>
        <Route exact path="/signinpage" element={<SignInPage />}></Route>
        <Route exact path="/signuppage" element={<SignUpPage />}></Route>
        <Route exact path="/forgetpasswordpage" element={<ForgetPasswordPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
