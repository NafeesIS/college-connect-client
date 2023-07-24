import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const College = () => {
    const [collegeData, setCollegeData] = useState([]);

    useEffect(() => {
        // Fetch college data from your API
        fetch("http://localhost:5000/collegedetails")
            .then((res) => res.json())
            .then((data) => setCollegeData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="bg-gray-100 py-10 mt-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-6xl font-bold font-serif text-center mb-8">Colleges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {collegeData.map((college) => (
                        <div key={college.id} className="card bg-white p-4 rounded-lg shadow">
                            <img src={college.
                                college_image} alt={college.name} className="w-full h-40 rounded-t-lg object-cover" />
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold mb-2">{college.
                                    college_name
                                }</h3>
                                <p className="text-gray-700 mb-2">Rating: {college.
                                    college_rating}</p>
                                <p className="text-gray-700 mb-2">Admission Date: {college.
                                    admission_date
                                }</p>
                                <p className="text-gray-700 mb-2">Research Count: {college.number_of_research}</p>
                                <div className="flex justify-between">
                                    <Link to={`/college/${college.id}`} className="btn btn-sm btn-primary">
                                        Details
                                    </Link>
                                    {/* Add onClick handler for the "Details" button to navigate to college details route */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default College;
