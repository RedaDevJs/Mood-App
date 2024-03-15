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
        <div>
            {submitted ? (
                <div>
                    <p>Merci pour votre humeur!</p>
                </div>
            ) : (
                <div>
                    <h2>Sélectionnez votre humeur</h2>
                    <div>
                        <button onClick={() => handleMoodSelection('heureux')}>
                            😊 Heureux
                        </button>
                        <button onClick={() => handleMoodSelection('triste')}>
                            😢 Triste
                        </button>
                        <button onClick={() => handleMoodSelection('en colère')}>
                            😡 En colère
                        </button>
                    </div>
                    <button onClick={handleSubmit}>Soumettre</button>
                </div>
            )}
        </div>
    );
};

export default MoodSelector;
