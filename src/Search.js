import { useState, useEffect } from 'react';
import { readBuilderProgram } from 'typescript';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Search = () => {

    const { data: blogs, isPending, error } = useFetch('http://www.omdbapi.com/?s=superman&apikey=28f4dae9');

    useEffect(() => {
        console.log(blogs);
    })

    return (  
        <div className="home">
           <input type="text" />
           
        </div>
    );
}
 
export default Search;
