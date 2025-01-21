import React from 'react';
import './industry.css';

const logos = [
    { id: 1, url: 'https://w7.pngwing.com/pngs/67/313/png-transparent-spotify-podcast-spotify-logo-text-logo-music-download-thumbnail.png', alt: 'Logo 1' },
    { id: 2, url: 'https://cdn.iconscout.com/icon/free/png-512/free-coinbase-icon-download-in-svg-png-gif-file-formats--logo-photoshop-design-brand-company-pack-1-logos-icons-10221907.png?f=webp&w=256', alt: 'Logo 2' },
    { id: 3, url: 'https://cdn.iconscout.com/icon/free/png-512/free-slack-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-logos-pack-icons-1174997.png?f=webp&w=256', alt: 'Logo 3' },
    { id: 4, url: 'https://cdn.iconscout.com/icon/free/png-512/free-dropbox-logo-icon-download-in-svg-png-gif-file-formats--logos-icons-1181729.png?f=webp&w=256', alt: 'Logo 4' },
    { id: 5, url: 'https://cdn.iconscout.com/icon/free/png-512/free-zoom-logo-icon-download-in-svg-png-gif-file-formats--app-logos-icons-2050545.png?f=webp&w=256', alt: 'Logo 5' },
    { id: 6, url: 'https://cdn.iconscout.com/icon/free/png-512/free-webflow-icon-download-in-svg-png-gif-file-formats--company-brand-logo-social-media-1-pack-logos-icons-10439302.png?f=webp&w=256', alt: 'Logo 6' },
];

function Industry() {
    return (
        <div>
            <div className="container-1">
                <p className="ind">1% of the industry</p>
                <header className="header-2">
                    <h1>Welcome to your new digital reality. Now.</h1>
                    <form className="email-form">
                        <input type="email" placeholder="Enter Your Email" />
                        <button type="submit">Submit</button>
                    </form>
                    <div className="features">
                        <div className="feature">
                            <span>✔</span>
                            <p>Instant results</p>
                        </div>
                        <div className="feature">
                            <span>✔</span>
                            <p>User-friendly interface</p>
                        </div>
                        <div className="feature">
                            <span>✔</span>
                            <p>Personalized customization</p>
                        </div>
                    </div>
                </header>
                
            </div>
            <div className="container2">
                <div className="logos">
                    {logos.map(logo => (
                        <div key={logo.id} className="logo">
                            <img src={logo.url} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Industry;
