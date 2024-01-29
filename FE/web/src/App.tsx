import './App.css';
import Header from './containers/Header/Header.tsx';
import UserPage from './pages/UserPage/UserPage.tsx';
import Footer from './containers/Footer/Footer.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="page">
        <UserPage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;