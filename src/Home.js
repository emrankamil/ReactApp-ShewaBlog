import BlogList from './BlogList';
import useFetch from './useFetch';
import {Link} from 'react-router-dom'
import coverImage from './img/cover-React.png';


const Home = () => {

    const {data:blogs, error, isPending} = useFetch("http://localhost:8000/blogs")
    return (
        <div className="home text-[#352F44]">

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

            {/* code from tailwind */}

            <main>
                <div>
                    <Link to="#">Log in</Link>
                    <Link to="#">Sign up</Link>
                </div>

                <header>
                    <h1 className="text-grey-700 text-2xl font-semibold">All Blogs</h1>
                    <h3 className='text-xl font-semibold'>Check out all blogs</h3>
                </header>
                 {/* cards fo here  */}
                <div>
                    <h4>Latest Blogs</h4>
                    <div>
                        <div>
                            <img src={coverImage} alt="Cover" />
                            <div>
                                <span>First Blog</span>
                                <span>First Snake Game</span>
                            </div>
                        </div>
                    </div>

                    <h4>Populat Blogs</h4>
                    <div>
                        <div>
                            {/* populat blogs card goes in here */}
                        </div>
                    </div>

                    <div>
                        <div>Load more</div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Home;
