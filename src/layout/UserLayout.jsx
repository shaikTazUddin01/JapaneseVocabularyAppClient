import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const UserLayout = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-white">
            {/* navbar */}
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserLayout;