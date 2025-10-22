import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ToyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [toy, setToy] = useState(null);

    useEffect(() => {
        fetch("/toy.json")
            .then(res => res.json())
            .then(data => {
                const foundToy = data.find(t => t.toyId === parseInt(id));
                setToy(foundToy);
            });
    }, [id]);

    if (!toy) return <p>Loading...</p>;

    return (
        <div className="container mx-auto py-10">
            <button
                onClick={() => navigate(-1)} // Back button
                className="btn btn-sm btn-ghost mb-6"
            >
                &larr; Back
            </button>

            <h1 className="text-4xl text-rose-600 mb-4">{toy.toyName}</h1>
            <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-96 mx-auto mb-6"
            />
            <p><strong>Price:</strong> ${toy.price}</p>
            <p><strong>Rating:</strong> {toy.rating}</p>
            <p><strong>Available Quantity:</strong> {toy.availableQuantity}</p>
            <p><strong>Description:</strong> {toy.description}</p>
            <p><strong>Seller:</strong> {toy.sellerName} ({toy.sellerEmail})</p>
        </div>
    );
};

export default ToyDetail;
