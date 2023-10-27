

const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title

    return ( 
        <div>
            <h2>{title}</h2>
            {blogs.map((item)=>{
            return <div className='blog-preview' key={item.id}>
                        <h2>{item.title}</h2>
                        <p>written by: {item.author}</p>
                    </div>
               
            })}
        </div>
     );
}
 
export default BlogList;