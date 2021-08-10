import { useState } from 'react';
import { readBuilderProgram } from 'typescript';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // props for bloglist: blogs={blogs}

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/> 
        
        </div>
    );
}
 
export default Home;
