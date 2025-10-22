import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
    // Convert rating to stars
    const fullStars = Math.floor(toy.rating);
    const halfStar = toy.rating % 1 >= 0.5;

    return (
        <div className="card w-64 bg-pink-50 shadow-lg m-3 rounded-xl hover:scale-105 transition-transform">
            <figure>
                <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="h-40 w-full object-cover rounded-t-xl"
                />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title text-rose-600">{toy.toyName}</h2>
                <p className="text-green-700 font-semibold">Price: ${toy.price}</p>
                <p>
                    Rating:{" "}
                    {Array.from({ length: fullStars }).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                    ))}
                    {halfStar && <span className="text-yellow-400">½</span>}
                </p>
                <p className="text-blue-700">Available: {toy.availableQuantity}</p>

                <Link
                    to={`/toy/${toy.toyId}`}
                    className="btn btn-info mt-3"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ToyCard;
