import React, { useState, useEffect } from 'react';
import '../style/select.css';
import { useParams } from 'react-router-dom';
import data from '../components/data.json';

import PageLayout from '../components/pageLayout';
const SelectPage = () => {

    const { id } = useParams();
    const values = data;

    const [selected, setSelected] = useState({});

    const selectInformation = () => {
        for (let i = 0; i < values.length; i++) {
            if (values[i].id === id) {
                setSelected(values[i]);
            }
        }
        console.log(selected);
    }

    useEffect(() => {
        console.log(values);
        selectInformation();
    }, [id]);

    return (
        <PageLayout>
            <div className='selectContainer'>
                <div className='beginning'>
                    <div className='beginningInfo'>
                        <h1>{selected.title}</h1>
                        <p>{selected.description}</p>
                    </div>
                    <div className='beginningImage'>
                        <img src='https://images.stockcake.com/public/d/4/c/d4cb34a4-6b14-4068-a9f4-de3e9d78f40b_large/busy-tech-office-stockcake.jpg' alt='home page image'/>
                    </div>
                </div>
                <div className='middle'>
                    <div className='middleInfo'>
                        <h3>When it comes to {selected.title} we can help in the following areas</h3>
                        <div className='line'>
                            <p>1. {selected.service1}</p>
                            <p className='description'>{selected.description1}</p>
                        </div>
                        <div className={selected.service2 ? 'line' : 'hidden'}>
                            <p>2. {selected.service2}</p>
                            <p className='description'>     {selected.description2}</p>
                        </div>
                        <div className={selected.service3 ? 'line' : 'hidden'}>
                            <p>3. {selected.service3}</p>
                            <p className='description'>{selected.description3}</p>
                        </div>
                        <div className={selected.service4 ? 'line' : 'hidden'}>
                            <p>4. {selected.service4}</p>
                            <p className='description'>{selected.description4}</p>
                        </div>
                        <div className={selected.service5 ? 'line' : 'hidden'}>
                            <p>5. {selected.service5}</p>
                            <p className='description'>{selected.description5}</p>
                        </div>
                    </div>
                    <div className='middleImage'>
                        <img src='https://images.stockcake.com/public/d/4/c/d4cb34a4-6b14-4068-a9f4-de3e9d78f40b_large/busy-tech-office-stockcake.jpg' alt='home page image'/>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default SelectPage;