import React, { useState } from "react";
import { auth } from "../layout/firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            Swal.fire("Error", "Please enter your email", "error");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            Swal.fire(
                "Success",
                "Password reset email sent! Check your inbox.",
                "success"
            );
            setEmail("");
        } catch (error) {
            console.error(error);
            Swal.fire("Error", error.message, "error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-rose-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-rose-600">Forgot Password</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="btn bg-rose-500 hover:bg-rose-600 text-white"
                    >
                        Send Reset Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
