const Home = () => {

    const handleClick = (e) => {
        console.log('Hello, everyone', e); // e is the event object
    }
    
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>click me again</button>
        </div>
    );
}
 
export default Home;
