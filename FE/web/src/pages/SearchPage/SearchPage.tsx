import Header from '../../containers/Header/Header.tsx';
import SearchBar from '../../components/Search/SearchBar.tsx';
import SearchResults from '../../components/Search/SearchResults.tsx';
import Footer from '../../containers/Footer/Footer.tsx';

import classes from "./SearchPage.module.scss"

function SearchPage() {
	return (
    <div>
    <Header/>
    <div className={classes.page}>
      <div className={classes.search}>
        <SearchBar/>
        <SearchResults/>
      </div>
    </div>
      <Footer/>
    </div>
  )
}
  
export default SearchPage