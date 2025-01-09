import React, { useState, useEffect } from 'react';
import "../style/contactUs.css";

import PageLayout from '../components/pageLayout';

const ContactUs = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        service: "",
        specificService: "",
        message: ""
    });

    const [doesShow, setDoesShow] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const displayOptions = () => {
        switch (values.service) {
            case "web servies":
                return (
                    <>
                        <option value=''>Specify a Service</option>
                        <option value='website development'>Website Development</option>
                        <option value='website maintenance'>Website Maintenance</option>
                        <option value='website optimization'>Website Optimization</option>
                        <option value='website security'>Website Security</option>
                        <option value='General Inquiry'>General Inquiry</option>
                    </>
                );
            case "blockchain solutions":
                return (
                    <>
                        <option value=''>Specify a Service</option>
                        <option value='blockchain development'>Blockchain Development</option>
                        <option value='blockchain consulting'>Blockchain Consulting</option>
                        <option value='NFT solutions'>NFT Solutions</option>
                        <option value='General Inquiry'>General Inquiry</option>
                    </>
                );
            case "digital marketing":
                return (
                    <>
                        <option value=''>Specify a Service</option>
                        <option value='search engine optimization'>Search Engine Optimization (SEO)</option>
                        <option value='social media marketing'>Social Media Marketing</option>
                        <option value='content marketing'>Content Marketing</option>
                        <option value='paid advertising'>Paid Advertising (PPC)</option>
                        <option value='email marketing'>Email Marketing</option>
                        <option value='General Inquiry'>General Inquiry</option>
                    </>
                );
            case "app development":
                return "app development";
            default:
                return (
                    <>
                        
                    </>
                );
        }
    }

    const checkShow = () => {
        if (values.service !== "") {
            setDoesShow(true);
        } else {
            setDoesShow(false);
        }
    }

    useEffect(() => {
        setOptions(displayOptions());
        checkShow();
    }, [values.service]);

    return (
        <PageLayout>
            <div className="contactUsContainer">
                <h1>Contact Us</h1>
                <h3>we are happy to hear from you and that we will get back to them asap</h3>
                <form onSubmit={handleSubmit} className="contactForm">
                    <div className='boxes'>
                        <div className="contactInfo">
                            <input name="name" type="text" placeholder="Name" onChange={handleChange} required/>
                            <input name="email" type="email" placeholder="Business Email" onChange={handleChange} required/>
                            <input name="phone" type='tel' placeholder='Phone Number' onChange={handleChange} required/>
                            <input name="company" type='text' placeholder='Company Name' onChange={handleChange} required/>
                        </div>
                        <div className="details">
                            <input name="country" type='text' placeholder='Country' onChange={handleChange} required/>
                            <select name="service" onChange={handleChange} required>
                                <option value="" >Select a Service</option>
                                <option value="web servies" >Web Servies</option>
                                <option value="blockchain solutions" >Blockchain Solutions</option>
                                <option value="digital marketing" >Digital Marketing</option>
                                <option value="app development" >App Development</option>
                            </select>
                            {doesShow && (
                                <select name="specificService" onChange={handleChange} required>
                                    {options}
                                </select>
                            )}
                            <select name="contact" onChange={handleChange} required>
                                <option value="">best way to contact you</option>
                                <option value="email" >Email</option>
                                <option value="phone" >Phone</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="ContactProblems">
                <h2>have any techincal issues email us</h2>
                <p>issues are common so if something does arise email us at: support@yourdomain.com</p>
            </div>
        </PageLayout>
    );
};

export default ContactUs;