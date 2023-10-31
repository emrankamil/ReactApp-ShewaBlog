import { Link } from "react-router-dom";


const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title

    return ( 
        <div>
            <h2>{title}</h2>
            {blogs.map((item)=>{
            return <div className='blog-preview' key={item.id}>
                        <Link to={`blogs/${item.id}`}>
                        <h2>{item.title}</h2>
                        <p>written by: {item.author}</p>
                        </Link>
                    </div>       
            })}
        </div>
     );
}
 
export default BlogList;