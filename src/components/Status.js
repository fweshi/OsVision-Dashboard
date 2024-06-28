import React from 'react';

function Status({ brightness, color, pattern }) {
    return (
        <section id="status">
            <h2>Status</h2>
            <div className="bg-light p-3 border rounded">
                <p>Brightness: <span id="currentBrightness">{brightness}</span></p>
                <p>Color: <span id="currentColor">{color}</span></p>
                <p>Pattern: <span id="currentPattern">{pattern.charAt(0).toUpperCase() + pattern.slice(1)}</span></p>
            </div>
        </section>
    );
}

export default Status;
