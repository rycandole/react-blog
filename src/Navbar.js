import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1 className="navbar__title">The Blog React</h1>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;
