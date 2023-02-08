import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch('https://react-blog-server-gfdn.onrender.com/blogs/' + id)
  const history = useHistory();

  const deleteClick = () => {
    fetch('https://react-blog-server-gfdn.onrender.com/blogs/' + blog.id, {

      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading .... </div>}
      {error && <div>{error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p > Author: {blog.author}</p>
          <p className="blog-details__body">{blog.body}</p>
          <button onClick={deleteClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
