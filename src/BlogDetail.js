import {useParams} from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetail=()=>{

    let {id} = useParams()
    const {data:blog, isPending, error} = useFetch("http://localhost:8000/blogs/"+id)
    

    return (

        <div>
            {isPending && (
            <div className="loading-spinner">
                <div>Loading...</div>
                <div className="spinner"></div>  
            </div>
            )}

            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>}

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
        
        
    )
}

export default BlogDetail