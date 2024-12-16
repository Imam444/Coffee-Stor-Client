import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/user'>User</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/'>Home</NavLink>
        </div>
    );
};

export default Header;