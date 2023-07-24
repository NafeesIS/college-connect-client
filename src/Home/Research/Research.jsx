import React, { useEffect, useState } from "react";

const ResearchSection = () => {
    const [researchData, setResearchData] = useState([]);

    useEffect(() => {
        // Fetch latest research data from the API
        fetch('http://localhost:5000/research')
            .then(res => res.json())
            .then(data => setResearchData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="bg-gray-100 py-10 mt-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-6xl font-bold font-serif text-center mb-8">Research Section</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {researchData.map((research) => (
                        <div key={research.id} className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">{research.title}</h3>
                            <p className="text-gray-700 mb-2">Student: {research.name}</p>
                            <p className="text-gray-700 mb-2">University: {research.university}</p>
                            <p className="text-gray-700 mb-4">{research.description}</p>
                            <a
                                href={research.paperLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                            >
                                Read Research Paper
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchSection;
