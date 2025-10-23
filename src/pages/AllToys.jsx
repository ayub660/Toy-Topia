import React, { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";
import HomeSlider from "../components/HomeSlider";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/toy.json")
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-pink-50 min-h-screen py-10">
            {/* --- Slide Show --- */}
            <HomeSlider />

            <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
                <h1 className="text-4xl font-bold text-rose-700 mb-6 text-center">All Toys</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toys.map(toy => (
                        <ToyCard key={toy.toyId} toy={toy} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllToys;
