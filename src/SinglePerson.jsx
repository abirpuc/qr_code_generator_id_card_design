import React from 'react';
import QRCode from 'qrcode.react';
import { useLoaderData } from 'react-router-dom';
import { cadreOffice } from './cardeOfficer';
import './singlePersonstyle.css'

const SinglePerson = () => {
    const userId = useLoaderData()
    const id = parseInt(userId.id)
    return (
        <div>
            { 
                cadreOffice.map((officer) => (officer.id === id) ? 
                
                    <>
                        <div className="idcard__container">
                            <div className="front__end">
                                <img className='logo' src="" alt="" />
                                <h3 className='front__end__title'>Cadre Officers Cooperative Society Ltd.</h3>
                                <img className='personimg' src="" alt="" />
                                <h3 className='name'>{officer.name}</h3>
                                <div className="info__container">
                                    <h4>Bcs Batch: <span className='content'>{officer.batch.split(',')[0]}</span></h4>
                                    <h4>Cadre Name: <span className='content'>{officer.batch.split(',')[1]}</span></h4>
                                </div>
                            </div>
                            <div className="back__end">
                                <h3 className='back_title'>This card is the Property of Cadre Officers Cooperative Society Ltd.</h3>
                                
                                <div className="qr__code" >
                                    <QRCode
                                        value= {[
                                        `WorkPlace & Designation: ${officer.designation}`,
                                        `\nNid: ${officer.nid}`,
                                        `\nMobile: ${officer.mobile}`,
                                        `\nDate of Issue: 12-06-23`,
                                        `\nDate : 24-06-23`
                                    ]}
                                    />
                                </div>
                                <h3 className='backend__office'>Cadre Officers Cooperative Society Ltd</h3>
                                <p className='office__address'>Address: House No. 738, Flat 2/B,
                                    Ibrahimpur, Post Office: Kafrul,
                                    Police Station: Kafrul, District:
                                    Dhaka</p>
                                <div className="signature__container">
                                    <div className="secretary">
                                        <img src="" alt="" />
                                        <p>Secretary</p>
                                    </div>
                                    <div className="president">
                                    <img src="" alt="" />
                                        <p>President</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : '')
            }
        </div>
    );
};

export default SinglePerson;