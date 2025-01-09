import React from 'react';
import PageLayout from '../components/pageLayout';
import '../style/home.css';

const Home = () => {

    const handleContactUs = () => {
        window.location.href = '/contact-us';
    }

    return (
        <PageLayout>
            <div className='homeContainer'>
            <div className='beginning'>
                    <div className='beginningInfo'>
                        <h1>Meet the next step in your digital transformation</h1>
                        <p>Explore the site to learn more about our services, 
                            when your ready contact us so we can help you take your business to the next level</p>
                    <button onClick={handleContactUs}>Get Started</button>
                    </div>
                    <div className='beginningImage'>
                        <img src='https://images.stockcake.com/public/d/4/c/d4cb34a4-6b14-4068-a9f4-de3e9d78f40b_large/busy-tech-office-stockcake.jpg' alt='home page image'/>
                    </div>
                </div>
                <div className='catigoryContainer'>
                    <div className='catigory'>
                        <h2>Web Services</h2>
                        <p>Our web services can fit perfectly in your website creations or already created wesites.
                            We can help develop, maintain and optimize your website while ensuring that its safe an secure.</p>
                    </div>
                    <div className='catigory'>
                        <h2>Blockchain Solutions</h2>
                        <p>When it comes to Blockchain solutions we can ensure that you have a the best foot foward every step of the way.
                            Whether its development or consulting your project will be in good hands. we also provide a wide range of NFT solutions.
                        </p>
                    </div>
                    <div className='catigory'>
                        <h2>Digital Marketing</h2>
                        <p>Digital Marketing is an essential part of any successful business, so we want to help take you to the next level.
                            from improving your search engine optimization to creating a strong social media presence we have you covered.
                            As well as imporving your advertising strategies.
                        </p>
                    </div>
                    <div className='catigory'>
                        <h2>App Development</h2>
                        <p>App development is a great way to reach your customers on the go. We can help you create a custom app that fits your needs.
                            Whether its for your business or personal use we have you covered.
                        </p>
                    </div>
                </div>
                <div className='bottomInfoContainer'>
                    {/*
                    <div className='bottomInfo'>
                        <div className='infoText'>
                            <h2>Web Services</h2>
                            <p>Web Services description</p>
                        </div>
                        <div className='infoImage'>
                            <img src='https://images.stockcake.com/public/d/4/c/d4cb34a4-6b14-4068-a9f4-de3e9d78f40b_large/busy-tech-office-stockcake.jpg' alt='home page image'/>
                        </div>
                    </div>
                    <div className='bottomInfo'>
                        <div className='infoImage'>
                            <img src='https://images.stockcake.com/public/d/4/c/d4cb34a4-6b14-4068-a9f4-de3e9d78f40b_large/busy-tech-office-stockcake.jpg' alt='home page image'/>
                        </div>
                        <div className='infoText'>
                            <h2>Blockchain Solutions</h2>
                            <p>Blockchain Solutions description</p>
                        </div>
                    </div>
                        */}
                    <div className='bottomInfoFAQ'>
                        <div className='infoFAQ'>
                            <h1>FAQ</h1>
                            <h3>Why should I choose your services?</h3>
                            <p>We combine expertise, creativity, and a customer-first approach to deliver results that exceed expectations.
                                Our team focuses on understanding your unique needs and providing tailored solutions to achieve your goals.</p>
                            <h3>How long does it take to complete a project?</h3>
                            <p>Timelines vary based on the complexity of the project. For example, a basic website may take 2-4 weeks, 
                                while blockchain or NFT projects could take several months. Contact us for a customized timeline.</p>
                            <h3>Do you offer ongoing support after the project is completed?</h3>
                            <p>Yes, we provide ongoing support, including website maintenance, security updates, and digital marketing strategies
                                to ensure long-term success.</p>
                        </div>
                        <div className='infoFAQ'>
                            <h1> </h1>
                        <h3>Are your solutions scalable?</h3>
                            <p>Absolutely! Our services are designed to grow with your business. 
                                From scalable web designs to blockchain networks, we ensure your solution adapts to increasing demands.</p>
                            <h3>How do I get started?</h3>
                            <p>Simply contact us through the "Get Started" button, and our team will reach out to schedule a consultation. 
                                Let’s build something amazing together!</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Home;