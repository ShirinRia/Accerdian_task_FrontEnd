import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Appbar/Navbar";
import Footer from "./Shared/Footer";


const Root = () => {
    return (
        <div >
            <Navbar />
            <div style={{ minHeight: '100vh' }}>

                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;