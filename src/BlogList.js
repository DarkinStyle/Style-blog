
// This is a stateless functional component

const BlogList = ({ blogs, title, searchTerm }) => { 
   
    return ( 
        <div className="blog-list">
            
            <h2>{ title }</h2>
            {blogs.filter((blog) => {
                if (searchTerm == null) {
                    return ( 
                        <div className="blog-preview" key={blog.Year}>
                        <a href="./Showpage.js">
                        <h2>{ blog.Title }</h2>
                        <img src= { blog.Poster } alt="Images" />
                        <p>{ blog.Year }</p>
                        </a>
                        </div> 
                    ); 
                 } else if (blog.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return ( 
                        <div className="blog-preview" key={blog.Year}>
                        <a href="./Showpage.js">
                        <h2>{ blog.Title }</h2>
                        <img src= { blog.Poster } alt="Images" />
                        <p>{ blog.Year }</p>
                        
                        </a>
                        </div> 
                     );
                 }
            }).map((blog) => {
                return ( 
                
                <div className="blog-preview" key={blog.id}>
                <a href="./Showpage.js">
                <h2>{ blog.Title }</h2>
                <img src= { blog.Poster } alt="Images" />
                <p>{ blog.Year }</p>
                </a>
                </div> 
                );
           })}

           
        </div>
     );
}
 
export default BlogList;