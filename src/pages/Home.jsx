import React, { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";
import { Link } from "react-router-dom";

const Home = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/toy.json")
            .then((res) => res.json())
            .then((data) => setToys(data.slice(0, 3))) // first 3 toys
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="bg-gradient-to-b from-pink-50 to-yellow-50 min-h-screen py-10">
            <h1 className="text-5xl font-bold mb-6 text-center text-rose-600">
                Welcome to ToyTopia!
            </h1>

            <section className="text-center">
                <h2 className="text-3xl font-semibold mb-6 text-purple-600">
                    Popular Toys
                </h2>

                {/* Horizontal flex container */}
                <div className="flex flex-row justify-center gap-3 overflow-x-auto px-4">
                    {toys.map((toy) => (
                        <ToyCard key={toy.toyId} toy={toy} />
                    ))}
                </div>

                {/* View All button centered */}
                <div className="mt-6">
                    <Link to="/alltoys" className="btn btn-rose btn-lg">
                        View All Toys
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
