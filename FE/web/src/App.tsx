import './App.css';
import Header from './containers/Header/Header.tsx';
import UserPage from './pages/UserPage/UserPage.tsx';
import Footer from './containers/Footer/Footer.tsx';
// import UsernameSetting from './components/User/UsernameSetting.tsx'
// import AuthPage from './pages/AuthPage/AuthPage.tsx'

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="page">
        {/* 1. 비로그인 상태 (로그인-회원가입 페이지) */}
        {/* <AuthPage/> */}
        {/* 2. 비정상 로그인 상태 (닉네임 설정 페이지) */}
        {/* <UsernameSetting/>   */}
        {/* 3. 정상 로그인 상태 */}
        <UserPage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;