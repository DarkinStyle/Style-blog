import { useState, useEffect } from 'react';
import { readBuilderProgram } from 'typescript';
import BlogList from './BlogList';
import Search from './Search';
import useFetch from './useFetch';


const Home = () => {

 

    return (  
        <div className="home">
           <Search />
        </div>
    );
}
 
export default Home;
