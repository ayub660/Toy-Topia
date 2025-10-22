import React from "react";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-pink-200 text-pink-900 rounded-t-xl">
            {/* Services Section */}
            <div>
                <h6 className="footer-title text-lg font-bold mb-2">Services</h6>
                <a className="link link-hover block">Branding</a>
                <a className="link link-hover block">Design</a>
                <a className="link link-hover block">Marketing</a>
                <a className="link link-hover block">Advertisement</a>
            </div>

            {/* Company Section */}
            <div>
                <h6 className="footer-title text-lg font-bold mb-2">Company</h6>
                <a className="link link-hover block">About us</a>
                <a className="link link-hover block">Contact</a>
                <a className="link link-hover block">Jobs</a>
                <a className="link link-hover block">Press kit</a>
            </div>

            {/* Legal Section */}
            <div>
                <h6 className="footer-title text-lg font-bold mb-2">Legal</h6>
                <a className="link link-hover block">Terms of use</a>
                <a className="link link-hover block">Privacy policy</a>
                <a className="link link-hover block">Cookie policy</a>
            </div>

            {/* Copyright */}
            <div className="mt-4 sm:mt-0 sm:col-span-3 text-center text-pink-900 font-semibold">
                &copy; {new Date().getFullYear()} ToyTopia. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
