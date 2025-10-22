import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
    const fullStars = Math.floor(toy.rating);
    const halfStar = toy.rating % 1 >= 0.5;

    return (
        <div className="card w-80 bg-pink-50 shadow-xl rounded-xl hover:scale-105 transition-transform flex-shrink-0">
            <figure>
                <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="h-36 w-full object-cover rounded-t-xl"
                />
            </figure>
            <div className="card-body text-center py-3 px-2">
                <h2 className="card-title text-rose-600 text-lg">{toy.toyName}</h2>
                <p className="text-green-700 font-semibold">Price: ${toy.price}</p>
                <p className="text-yellow-400">
                    {Array.from({ length: fullStars }).map((_, i) => "★")}
                    {halfStar && "½"}
                </p>
                <p className="text-blue-700 text-sm">
                    Available: {toy.availableQuantity}
                </p>

                <Link to={`/toy/${toy.toyId}`} className="btn btn-info mt-2 btn-sm">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ToyCard;
