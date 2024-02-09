// import classes from './App.module.scss';
import Header from './containers/Header/Header.tsx';
import Footer from './containers/Footer/Footer.tsx';
import Mainpage from './pages/MainPage/MainPage.tsx'
// import UserNicknameSetting from './components/User/UserNicknameSetting.tsx'

function App() {
  return (
    <div>
      <Header />
      {/* if ( 로그인이 되었다면 ) {
          if ( 닉네임이 있다면 ) {
            
          } else {
            
          }
          return 
        } */}

      {/* 1. 비로그인 상태 (로그인-회원가입 페이지) */}
      <Mainpage />
      {/* 2. 비정상 로그인 상태 (닉네임 설정 페이지) */}
      {/* <UserNicknameSetting/> */}
      <Footer />
    </div>
  );
}

export default App;