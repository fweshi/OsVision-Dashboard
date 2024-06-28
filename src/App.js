import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Settings from './components/Settings';
import Status from './components/Status';

function App() {
    const [brightness, setBrightness] = useState(50);
    const [color, setColor] = useState('#ffffff');
    const [pattern, setPattern] = useState('solid');

    useEffect(() => {
        loadSettings();
    }, []);

    const updateScreen = () => {
        const ledScreen = document.getElementById('ledScreen');
        const ledOverlay = document.getElementById('ledOverlay');

        ledScreen.style.backgroundColor = color;
        ledOverlay.style.opacity = 1 - (brightness / 100);

        switch (pattern) {
            case 'stripes':
                ledScreen.style.backgroundImage = `linear-gradient(90deg, ${color} 50%, #000 50%)`;
                ledScreen.style.backgroundSize = '20px 100%';
                break;
            case 'checkerboard':
                ledScreen.style.backgroundImage = `linear-gradient(45deg, ${color} 25%, #000 25%, #000 75%, ${color} 75%), linear-gradient(45deg, ${color} 25%, #000 25%, #000 75%, ${color} 75%)`;
                ledScreen.style.backgroundSize = '20px 20px';
                break;
            default:
                ledScreen.style.backgroundImage = 'none';
        }
    };

    const saveSettings = () => {
        const settings = { brightness, color, pattern };
        localStorage.setItem('ledSettings', JSON.stringify(settings));
        alert('Settings saved!');
    };

    const loadSettings = () => {
        const settings = JSON.parse(localStorage.getItem('ledSettings'));
        if (settings) {
            setBrightness(settings.brightness);
            setColor(settings.color);
            setPattern(settings.pattern);
        } else {
            alert('No saved settings found.');
        }
    };

    return (
        <div className="container-fluid">
            <Header />
            <Navbar />
            <main className="container mt-4">
                <Home />
                <Settings
                    brightness={brightness}
                    color={color}
                    pattern={pattern}
                    setBrightness={setBrightness}
                    setColor={setColor}
                    setPattern={setPattern}
                    updateScreen={updateScreen}
                    saveSettings={saveSettings}
                    loadSettings={loadSettings}
                />
                <Status
                    brightness={brightness}
                    color={color}
                    pattern={pattern}
                />
            </main>
        </div>
    );
}

export default App;
