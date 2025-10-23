// src/pages/MyProfile.jsx
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../layout/context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
    const { user, setUser, loading } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl text-rose-700">Loading...</p>
            </div>
        );
    }

    const handleUpdate = () => {
        if (!name && !photoURL) {
            toast.error("Please enter a name or photo URL.");
            return;
        }

        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                toast.success("Profile updated successfully!");
                setUser({
                    ...user,
                    displayName: name,
                    photoURL: photoURL,
                });
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="min-h-screen bg-pink-50 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-rose-700 mb-8">My Profile</h1>

            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <div className="flex flex-col items-center">
                    {photoURL ? (
                        <img
                            src={photoURL}
                            alt={name}
                            className="w-32 h-32 rounded-full border-4 border-rose-300 object-cover mb-4"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-rose-200 flex items-center justify-center text-3xl font-bold text-white mb-4">
                            {name ? name.charAt(0).toUpperCase() : "U"}
                        </div>
                    )}

                    <p className="text-lg text-gray-700 mb-2">
                        <span className="font-semibold">Email:</span> {user?.email}
                    </p>
                </div>

                <div className="mt-6 space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="Enter photo URL"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                        />
                    </div>

                    <button
                        onClick={handleUpdate}
                        className="w-full bg-rose-500 text-white py-2 rounded-lg font-semibold hover:bg-rose-600 transition"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
