import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";


const UserLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default UserLayout;