const BlogItem = ({ blog }) => {
    
    return (
        <div>
            <h3>{blog.title}</h3>
            <p>{blog.text}</p>
            <p>{blog.author}</p>
        </div>
    )
}

export default BlogItem;