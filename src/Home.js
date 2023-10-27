
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

// Put your side-effect logic into the callback function, 
// then use the dependencies argument to control when you want the side-effect to run. 
// That's the sole purpose of useEffect(). the dependencies passed to the side effect are of 3 types:
//A) Not provided: the side-effect runs after every rendering.
//B) An empty array []: the side-effect runs once after the initial rendering.
//C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs once after initial rendering and then only when any dependency value changes.

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then((response) => response.json())
                .then((blogs) => {
                    setBlogs(blogs);
                    setIsPending(false);
                }).catch(err => console.log(err.message));
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isPending && (
                <div className="loading-spinner">
                    <div>Loading...   </div>
                    <div className="spinner"></div>  
                </div>
            )}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;
