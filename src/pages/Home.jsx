// Home.jsx
import React, { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";
import { Link } from "react-router-dom";

const Home = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/toy.json")
            .then((res) => res.json())
            .then((data) => setToys(data.slice(0, 3)))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="min-h-screen w-full bg-rose-200"> {/* Full width background */}
            <div className="max-w-7xl mx-auto px-4 py-10"> {/* Centered content */}
                <h1 className="text-5xl font-bold mb-6 text-center text-rose-800">
                    Welcome to ToyTopia!
                </h1>

                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-purple-700">
                        Popular Toys
                    </h2>

                    <div className="flex flex-row justify-center gap-3 overflow-x-auto px-4">
                        {toys.map((toy) => (
                            <ToyCard key={toy.toyId} toy={toy} />
                        ))}
                    </div>

                    <div className="mt-6">
                        <Link to="/alltoys" className="btn btn-rose btn-lg">
                            View All Toys
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
