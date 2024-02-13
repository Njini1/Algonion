// import classes from './App.module.scss';
import Header from './containers/Header/Header.tsx';
import Footer from './containers/Footer/Footer.tsx';
import Mainpage from './pages/MainPage/MainPage.tsx'

function App() {
  return (
    <div>
      <Header />
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;