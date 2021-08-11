import { useState, useEffect } from 'react';
import { readBuilderProgram } from 'typescript';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => { // just to demostrate the loading message by set a timer
            fetch('http://localhost:8000/blogs') // fetching it from resources as a promise
            .then(res => {
                
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message); 
            })
        }, 1000);
    }, []); 

    return (  
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading....</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    );
}
 
export default Home;
