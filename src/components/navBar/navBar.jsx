import React, { useState } from 'react';
import '../../style/navBar.css';

import menuButton from '../../assets/menu.png';

const NavBar = () => {
    const [active, setActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const [webServices, setWebServices] = useState(false);
    const [blockchainSolutions, setBlockchainSolutions] = useState(false);
    const [digitalMarketing, setDigitalMarketing] = useState(false);
    const [appDevelopment, setAppDevelopment] = useState(false);

    const hoverDisplay = () => {
        setActive(true);
    }

    const handleContactUs = () => {
        window.location.href = '/Opulence/#/contact-us';
    }
    const handleServiceClick = (e) => {
        const id = e.target.id;
        setActive(false);
        window.location.href = '/Opulence/#/services/' + id;
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
                <div className='menu'>
                    <img src={menuButton} alt='menu button' onClick={() => setMenuActive(!menuActive)}/>
                </div>
            </div>
            <div className={menuActive ? 'activeMenu' : 'hiddenNavLinks'}>
                <button onClick={handleContactUs}>Contact Us</button>
                <div className='menuLinks' onClick={() => setWebServices(!webServices)}>
                    <p>Web Services</p>
                    <p>{webServices ? "▲" : "▼"}</p>
                </div>
                {webServices && (
                    <div className='subMenu'>
                        <p id="Website-Development" onClick={ handleServiceClick }>Website Development</p>
                        <p id="Web-Maintenance" onClick={ handleServiceClick }>Web Maintenance</p>
                        <p id="Web-Optimization" onClick={ handleServiceClick }>Web Optimization</p>
                        <p id="Web-Security" onClick={ handleServiceClick }>Web Security</p>
                    </div>
                )}
                <div className='menuLinks' onClick={() => setBlockchainSolutions(!blockchainSolutions)}>
                    <p>Blockchain Solutions</p>
                    <p>{blockchainSolutions ? "▲" : "▼"}</p>
                </div>
                {blockchainSolutions && (
                    <div className='subMenu'>
                        <p id="Blockchain-Development" onClick={ handleServiceClick }>Blockchain Development</p>
                        <p id="Blockchain-Consulting" onClick={ handleServiceClick }>Blockchain Consulting</p>
                        <p id="NFT-Solutions" onClick={ handleServiceClick }>NFT-Solutions</p>
                    </div>
                )}
                <div className='menuLinks' onClick={() => setDigitalMarketing(!digitalMarketing)}>
                    <p>Digital Marketing</p>
                    <p>{digitalMarketing ? "▲" : "▼"}</p>
                </div>
                {digitalMarketing && (
                    <div className='subMenu'>
                        <p id="SEO-Optimization" onClick={ handleServiceClick }>SEO Optimization</p>
                        <p id="Social-Media-Management" onClick={ handleServiceClick }>Social Media Management</p>
                        <p id="Content-Creation" onClick={ handleServiceClick }>Content Creation</p>
                        <p id="Paid-Advertising" onClick={ handleServiceClick }>Paid Advertising</p>
                        <p id="Email-Marketing" onClick={ handleServiceClick }>Email Marketing</p>
                    </div>
                )}
                <div className='menuLinks' onClick={() => setAppDevelopment(!appDevelopment)}>
                    <p>App Development</p>
                    <p>{appDevelopment ? "▲" : "▼"}</p>
                </div>
                {appDevelopment && (
                    <div className='subMenu'>
                        <p id="Custom-Mobile-App-Development" onClick={ handleServiceClick }>Custom Mobile App Development</p>
                        <p id="UI-UX-Design" onClick={ handleServiceClick }>UI/UX Design</p>
                        <p id="App-Integration-Services" onClick={ handleServiceClick }>App Integration Services</p>
                        <p id="App-Maintenance-and-Updates" onClick={ handleServiceClick }>App Maintenance and Updates</p>
                        <p id="Progressive-Web-Apps" onClick={ handleServiceClick }>Progressive Web Apps</p>
                        <p id="App-Security-Services" onClick={ handleServiceClick }>App Security Services</p>
                        <p id="App-Testing-and-Quality-Assurance" onClick={ handleServiceClick }>App Testing and Quality Assurance</p>
                    </div>
                )}
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