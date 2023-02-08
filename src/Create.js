import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Anonymous');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author };

    console.log(blog)
    fetch('https://react-blog-server-gfdn.onrender.com/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label >Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="">Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label htmlFor="">Blog author</label>
        <select name="" id=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)} >
          <option value="Anonymous">Anonymous</option>
          <option value="Guest">Guest</option>
          <option value="Ryan Candole">Ryan Candole</option>
        </select>

        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>

    </div>
  );
}

export default Create;
