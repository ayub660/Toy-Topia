import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
            <h1 className="text-6xl font-bold text-rose-600 mb-4">404</h1>
            <p className="text-2xl text-rose-800 mb-6">Page Not Found</p>
            <Link to="/" className="btn btn-rose">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
