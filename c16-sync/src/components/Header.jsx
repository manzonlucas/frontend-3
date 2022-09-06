import {Link, Outlet } from "react-router-dom";

const Header = () => {
    return(
        <>
        <ul>
            <li><Link to ="/home">Home</Link></li>
            <li><Link to ="/guauguaus">Guauguaus</Link></li>
            <li><Link to ="/miaumiaus">Miaumiaus</Link></li>
        </ul>
        <Outlet/>
        </>
    );
};
export default Header;
