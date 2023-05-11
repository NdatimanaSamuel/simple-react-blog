  import {Link} from 'react-router-dom';
  const  Navbar = () => {
    return (  
      <nav className="navbar">
      <h1 className="logo">The Telex Blog</h1>
      <div className="links">
        <Link to="/" className="cta">HOME</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/login">Login </Link>
        <Link to="/register">Register</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact  Us</Link>

      </div>
      </nav>
    );
  }
   
  export default  Navbar;