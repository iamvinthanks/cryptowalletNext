/* eslint-disable @next/next/no-img-element */
"use client"
import 'styles/cryptocoins.css'
import { useEffect, useState } from "react";


export default function WalletComponent({key,name,symbol,wallet}){
    const [isActive, setActive] = useState(false);
    const OpenDetail = () => {
        setActive(!isActive);
    };
    return (
        <div className={`expandable-item accordion ${isActive ? 'active' : ''}`} data-group="accordion1" >
                            <div className="expandable-header purp" onClick={OpenDetail}>
                                <i className={`cc ${symbol}-alt`} ></i>
                                <h3 className="list-title">{name} Wallet</h3>
                                <i className={`list-arrow fa ${isActive ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                            </div>
                            <div className="expandable-content">
                                <div className="padding-content">
                                    <div className="recent-trans">
                                        <ul className="dropdown-menu-list list-unstyled no-mb">
                                            <li>
                                                <div className="notice-icon">
                                                    <i className="fa fa-institution"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Recieved Amount</strong>
                                                        <span className="time small">+ 3.39498 {symbol}</span>
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="notice-icon">
                                                    <i className="fa fa-credit-card"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Sent Amount</strong>
                                                        <span className="time small">- 0.81729 {symbol}</span>
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="notice-icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Recieved Amount</strong>
                                                        <span className="time small">+ 548,485.44 {symbol}</span>
                                                    </span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="wallet-address">
                                        <h4 className="w-text mt-0">{name} Wallet Address</h4>
                                        <div className="form-row-group with-icons">
                                            <div className="form-row no-padding">
                                                <i className={`cc ${name} text-muted`}></i>
                                                <input type="text" name="aaa" className="form-element" value={wallet}/>
                                            </div>
                                        </div>
                                        <img src="content/qr.png" alt="" className="mt-15"/>
                                        <h4>This is your Wallet ID</h4>
                                        <p className="g-text mb-0">Scan This crediential to send or exchange crypto assets with just scaning this code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}