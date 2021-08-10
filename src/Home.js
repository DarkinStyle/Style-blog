import { useState, useEffect } from 'react';
import { readBuilderProgram } from 'typescript';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');


    useEffect(() => {
        fetch('http://localhost:8000/blogs') // fetching it from resources as a promise
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            })
    }, []); 

    return (  
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            
        </div>
    );
}
 
export default Home;
