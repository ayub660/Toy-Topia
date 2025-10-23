// src/pages/ToyDetails.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const ToyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [toy, setToy] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Shuru tei shob state reset kora bhalo, jate ID change hole notun fetch shuru hoy
        setLoading(true);
        setError(false);
        setToy(null);

        // ⭐ GURUTTOPURNO: ID FORMAT VALIDATION ⭐
        // Ekhane check kora hocche je ID shotti-i ekta shongkhya kina (e.g., '14' is valid, '14abc' is invalid)
        if (isNaN(Number(id))) {
            setLoading(false);
            setError(true);
            // Invalid format hole ekhane useEffect execution bondho hoye jabe
            return;
        }

        // Jodi ID format thik thake, tokhon data fetch korbe
        fetch("/toy.json")
            .then((res) => res.json())
            .then((data) => {
                // parseInt diye ID-ke number-e convert kora hocche, jeta apnar JSON-er shonge match korbe
                const toyIdAsNumber = parseInt(id);
                const foundToy = data.find((t) => t.toyId === toyIdAsNumber);

                if (foundToy) {
                    setToy(foundToy);
                    setError(false);
                } else {
                    // Toy khuje paowa jaayni, kintu format thik chilo
                    setError(true);
                }
                setLoading(false);
            })
            .catch((err) => {
                // Fetching error-er jonyo (network ba server shomoshya)
                console.error("Fetch Error:", err);
                setError(true);
                setLoading(false);
            });
    }, [id]); // id change holei effect cholbe

    // --- Render Logic ---

    if (loading) {
        return <Loader />;
    }

    // 404 Case: Error set hoyeche ba toy data paowa jaayni
    if (error || !toy) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-pink-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-rose-600 mb-4">Toy Not Found!</h1>

                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-sm bg-rose-500 text-white hover:bg-rose-600"
                    >
                        &larr; Go Back
                    </button>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-pink-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-sm btn-ghost mb-6 text-rose-600 hover:text-rose-800"
                >
                    &larr; Back
                </button>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <img
                        src={toy.pictureURL}
                        alt={toy.toyName}
                        className="w-full md:w-96 h-64 md:h-80 object-cover rounded-lg shadow-md"
                    />

                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">{toy.toyName}</h1>
                        <p className="text-gray-700 mb-2">
                            <strong>Price:</strong>{" "}
                            <span className="text-purple-700 font-semibold">${toy.price}</span>
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Rating:</strong> <span className="text-yellow-500">{toy.rating} ⭐</span>
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Available Quantity:</strong> {toy.availableQuantity}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Description:</strong> {toy.description}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Seller:</strong> {toy.sellerName} ({toy.sellerEmail})
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;