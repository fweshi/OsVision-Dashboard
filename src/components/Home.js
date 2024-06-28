import React from 'react';

function Home() {
    return (
        <section id="home" className="mb-4">
            <h2>Home</h2>
            <div id="ledScreen" className="d-flex justify-content-center align-items-center bg-dark text-white" style={{ position: 'relative', height: '200px' }}>
                <div id="ledOverlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000' }}></div>
                <p style={{ position: 'relative', zIndex: 1 }}>LED Screen Preview</p>
            </div>
        </section>
    );
}

export default Home;
