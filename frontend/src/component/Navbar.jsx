import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <Link to="/form" className="text-white mx-4">
                    User Form
                </Link>
                <Link to="/data" className="text-white mx-4">
                    User Data
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
