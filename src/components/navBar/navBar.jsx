import React, { useState } from 'react';
import '../../style/navBar.css';

const NavBar = () => {
    const [active, setActive] = useState(false);
    const hoverDisplay = () => {
        setActive(true);
    }

    const handleContactUs = () => {
        window.location.href = '/contact-us';
    }
    const handleServiceClick = (e) => {
        const id = e.target.id;
        window.location.href = '/services/' + id;
    }

    return (
        <div className="navBarContainer">
            <div className='navBar' >
                <div className='logo' onClick={() => window.location.href = '/'}>
                    <h2>logo</h2>
                </div>
                <div className='navLinks'>
                    <div className='hoverDisplay' onMouseOver={hoverDisplay} onMouseOut={() => setActive(false)}>
                    <p>services offered</p>
                    </div>
                    <div className='buttonContainer'>
                    <button onClick={handleContactUs}>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className={active ? 'activeNavLinks' : 'hiddenNavLinks'} onMouseOver={hoverDisplay} onMouseLeave={() => setActive(false)}>
                <div className='masterContainer'>
                    <table>
                        <tr className="spacedRow">
                            <th>Web Services</th>
                            <th>Blockchain Solutions</th>
                            <th>Digital Marketing</th>
                            <th>App Development</th>
                        </tr>
                        <tr className="spacedRow">
                            <td id="Website-Development" onClick={ handleServiceClick }>Website Development</td>
                            <td id="Blockchain-Development" onClick={ handleServiceClick }>Blockchain Development</td>
                            <td id="Search-Engine-Optimization" onClick={ handleServiceClick }>Search Engine Optimization (SEO)</td>
                            <td id='Custom-Mobile-App-Development' onClick={ handleServiceClick }>Custom Mobile App Development</td>
                            <td id='App-Integration-Services' onClick={ handleServiceClick }>App Integration Services</td>
                        </tr>
                        <tr className="spacedRow">
                            <td id='Web-Maintenance' onClick={ handleServiceClick }>Web Maintenance</td>
                            <td id='Blockchain-Consulting' onClick={ handleServiceClick }>Blockchain Consulting</td>
                            <td id='Email-Social-Media-Marketing' onClick={ handleServiceClick }>Email/Social Media Marketing</td>
                            <td id='UI-UX-Design' onClick={ handleServiceClick }>UI/UX Design</td>
                            <td id='App-Security-Services' onClick={ handleServiceClick }>App Security Services</td>
                        </tr>
                        <tr className="spacedRow">
                            <td id='Web-Optimization' onClick={ handleServiceClick }>Web Optimization</td>
                            <td id='NFT-Solutions' onClick={ handleServiceClick }>NFT-Solutions</td>
                            <td id='Content-Creation' onClick={ handleServiceClick }>Content Creation</td>
                            <td id='App-Maintenance-and-Updates' onClick={ handleServiceClick }>App Maintenance and Updates</td>
                            <td id='Progressive-Web-Apps' onClick={ handleServiceClick }>Progressive Web Apps (PWAs)</td>
                        </tr>
                        <tr className="spacedRow">
                            <td id='Web-Security' onClick={ handleServiceClick }>Web Security</td>
                            <th></th>
                            <td id='Paid-Advertising' onClick={ handleServiceClick }>Paid Advertising (PPC)</td>
                            <td id='App-Testing-and-Quality-Assurance' onClick={ handleServiceClick }>App Testing and Quality Assurance</td>
                        </tr>
                    </table>
                </div>
            </div>                
        </div>
    );
};

export default NavBar;