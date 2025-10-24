import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Extra = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/toy.json")
            .then((res) => res.json())
            .then((data) => setToys(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="bg-rose-200 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-rose-900">
                    All Extra Toys
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toys.map((toy) => (
                        <div key={toy.toyId} className="bg-white rounded-lg shadow-md p-4">
                            <img
                                src={toy.pictureURL}
                                alt={toy.toyName}
                                className="w-full h-48 object-cover rounded"
                            />
                            <h2 className="text-xl font-semibold mt-2">{toy.toyName}</h2>
                            <p className="text-gray-600 mt-1">{toy.subCategory}</p>
                            <p className="text-purple-700 font-bold mt-2">${toy.price}</p>

                            <Link
                                to={`/toy/${toy.toyId}`}
                                className="btn btn-rose btn-sm mt-3 w-full"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Extra;
