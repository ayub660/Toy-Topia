import React, { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        // Public folder theke JSON load
        fetch("/toy.json")
            .then((res) => res.json())
            .then((data) => setToys(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-rose-700">
                All Toys
            </h1>
            <div className="flex flex-wrap justify-center">
                {toys.map((toy) => (
                    <ToyCard key={toy.toyId} toy={toy} />
                ))}
            </div>
        </div>
    );
};

export default AllToys;
