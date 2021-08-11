import { useState, useEffect } from 'react';
import { readBuilderProgram } from 'typescript';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Search = () => {

    const { data: blogs, isPending, error } = useFetch('http://www.omdbapi.com/?s=superman&apikey=28f4dae9');

    const [searchTerm, setSearchTerm] = useState(null);

    useEffect(() => {
        console.log(searchTerm);
    })

    return (  
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading....</div>}
           <div class="search-box"> 
           <button class="btn-search"><i class="fas fa-search"></i></button>
            <input type="text" class="input-search" placeholder="Type to Search..." onChange={(event) => {setSearchTerm(event.target.value)} }/> 
            </div>
           { blogs && <BlogList blogs={blogs} title="All Movies" searchTerm={searchTerm} /> }
    
        </div>
    );
}
 
export default Search;
