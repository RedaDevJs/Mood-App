import React, { useState } from 'react';

const MoodSelector = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleMoodSelection = (mood) => {
        setSelectedMood(mood);
    };

    const handleSubmit = () => {
        console.log("Mood submitted:", selectedMood);
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto">
            {submitted ? (
                <div>
                    <p>Merci pour votre humeur!</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Sélectionnez votre humeur</h2>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleMoodSelection('heureux')}>
                            😊 Heureux
                        </button>
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handleMoodSelection('triste')}>
                            😢 Triste
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleMoodSelection('en colère')}>
                            😡 En colère
                        </button>
                    </div>
                    <button className="bg-green-500 text-white px-4 py-2 rounded mt-4" onClick={handleSubmit}>Soumettre</button>
                </div>
            )}
        </div>
    );
};

export default MoodSelector;
