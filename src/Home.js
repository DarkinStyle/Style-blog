import { useState, useEffect } from 'react';
import { readBuilderProgram } from 'typescript';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs') // fetching it from resources as a promise
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
            })
    }, []); 

    return (  
        <div className="home">
            {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>  */}
            
        </div>
    );
}
 
export default Home;
