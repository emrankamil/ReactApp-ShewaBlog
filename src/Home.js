import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data:blogs, error, isPending} = useFetch("http://localhost:8000/blogs")
    return (
        <div className="home">
            
            {isPending && (
                <div className="loading-spinner">
                    <div>Loading...   </div>
                    <div className="spinner"></div>  
                </div>
            )}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {error && (
            <div className="error-container">
                <div className="error-icon">
                    <i className="fa fa-exclamation-triangle fa-2x" aria-hidden="true"></i>
                </div>
                <div className="error-message">
                    <h3>Oops, Something Went Wrong</h3>
                    <p>We encountered an error while fetching data from the database.</p>
                </div>
            </div>)}
        </div>
    );
}

export default Home;
