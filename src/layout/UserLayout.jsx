import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const UserLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserLayout;