import React, { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/toy.json")
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-rose-50 min-h-screen py-10 px-4 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-rose-700">
                All Toys
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toys.map(toy => <ToyCard key={toy.toyId} toy={toy} />)}
            </div>
        </div>
    );
};

export default AllToys;
