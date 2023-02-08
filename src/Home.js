import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
  const { data, isPending, error } = useFetch('https://react-blog-server-gfdn.onrender.com/blogs')

  return (
    <div className="home">
      {error && <div>{error} </div>}
      {isPending && <div>Loading .... </div>}
      {data && <Bloglist blogs={data} title='All Blogs' />}
    </div>
  );
}

export default Home;
