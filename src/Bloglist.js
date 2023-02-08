import { Link } from "react-router-dom";

// Bloslist parameters is props from home.js
const Bloglist = ({blogs, title}) => {

  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2 className='blog-title'> {blog.title} </h2>
          <h3> Author: {blog.author}</h3>
          <p className='blog-body'> {blog.body} </p>          
          </Link>

        </div>
      ))}
    </div>
   );
}
 
export default Bloglist;