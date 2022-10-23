import { Link } from "react-router-dom";

const Navbar = () => {
return(
    <div className="nav">
        <Link to='/'>Sign In</Link>
        <Link to='/home'>Home</Link>
    </div>
)
}
export default Navbar;