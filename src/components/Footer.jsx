import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full bg-rose-200 mb-8">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <footer className="footer sm:footer-horizontal text-black">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>

                {/* Centered current year */}
                <p className="text-center text-black mt-6">
                    &copy; {currentYear} ToyTopia. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
