import SearchComponent from "./search-component.js"
import { useParams } from 'react-router';

const Search = () => {
    const query = useParams();
    
    return (
        <div>
            <SearchComponent query={query}/>
        </div>  
    );
           
}

export default Search