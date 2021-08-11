

const Showpage = ({ blogs, title, searchTerm }) => {

  return (

   
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="blog-list">
            
            <h2>{ title }</h2>
            {blogs.map((blog) => {
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
      </div>
    </div>
  );
}

export default Showpage;
