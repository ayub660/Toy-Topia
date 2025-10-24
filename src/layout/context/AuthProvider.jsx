import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // SweetAlert 
    const showToast = (icon, title) => {
        Swal.fire({
            toast: true,
            position: "bottom-end",
            icon: icon,
            title: title,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            background: "#fcd5ce",
            iconColor: "#b91c1c",
        });
    };

    // Register user
    const register = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                return updateProfile(res.user, { displayName: name, photoURL }).then(() => {
                    setUser({ ...res.user, displayName: name, photoURL });
                    showToast("success", "Registration Successful!");
                });
            })
            .catch((err) => {
                showToast("error", err.message);
                throw err;
            })
            .finally(() => setLoading(false));
    };

    // Login user
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                showToast("success", "Login Successful!");
            })
            .catch((err) => {
                showToast("error", err.message);
                throw err;
            })
            .finally(() => setLoading(false));
    };

    // Google login
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((res) => {
                setUser(res.user);
                showToast("success", "Login Successful!");
            })
            .catch((err) => {
                showToast("error", err.message);
                throw err;
            });
    };

    // Logout user
    const logout = () => {
        return signOut(auth)
            .then(() => {
                setUser(null);
                showToast("success", "Logged out successfully!");
            })
            .catch((err) => {
                showToast("error", err.message);
                throw err;
            });
    };

    // Auth state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, register, login, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
