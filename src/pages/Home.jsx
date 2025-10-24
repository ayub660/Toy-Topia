import React, { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";
import HomeSlider from "../components/HomeSlider";
import { Link } from "react-router-dom";

const Home = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/toy.json")
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 3)))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-rose-50 min-h-screen">
            <HomeSlider />

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
                <h2 className="text-4xl font-bold mb-8 text-center text-rose-700">
                    Popular Toys
                </h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toys.map(toy => <ToyCard key={toy.toyId} toy={toy} />)}
                </div>

                <div className="mt-8 text-center">
                    <Link to="/alltoys" className="btn btn-rose btn-lg">
                        See All Toys
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
