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
        <div className="container mx-auto py-10 bg-yellow-50 min-h-screen">
            <h1 className="text-4xl text-center font-bold text-rose-600 mb-6">
                All Toys
            </h1>
            <div className="flex flex-wrap justify-center">
                {toys.map((toy, index) => (
                    <ToyCard key={toy.toyId} toy={toy} offset={index % 2 === 0} />
                ))}
            </div>
        </div>
    );
};

export default AllToys;
