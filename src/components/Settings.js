import React, { useState, useEffect } from 'react';

function Settings({ brightness, color, pattern, setBrightness, setColor, setPattern, updateScreen, saveSettings, loadSettings }) {
    return (
        <section id="settings" className="mb-4">
            <h2>Settings</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="brightness">Brightness:</label>
                    <input type="range" className="form-control" id="brightness" name="brightness" min="0" max="100" value={brightness} onChange={(e) => { setBrightness(e.target.value); updateScreen(); }} />
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color:</label>
                    <input type="color" className="form-control" id="color" name="color" value={color} onChange={(e) => { setColor(e.target.value); updateScreen(); }} />
                </div>
                <div className="form-group">
                    <label htmlFor="pattern">Pattern:</label>
                    <select className="form-control" id="pattern" name="pattern" value={pattern} onChange={(e) => { setPattern(e.target.value); updateScreen(); }}>
                        <option value="solid">Solid</option>
                        <option value="stripes">Stripes</option>
                        <option value="checkerboard">Checkerboard</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={updateScreen}>Update Screen</button>
                <button type="button" className="btn btn-secondary" onClick={saveSettings}>Save Settings</button>
                <button type="button" className="btn btn-secondary" onClick={loadSettings}>Load Settings</button>
            </form>
        </section>
    );
}

export default Settings;
