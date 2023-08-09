/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image'
import styles from '../globals.css'
import 'styles/global.style.css'
import 'styles/bootstrap.min.css'
import React, { useState , useEffect} from 'react'

export default function Wallet() {
    return (
        <div classNameName="wrapper">
            <div className="wrapper-inline">
                <main className="margin mt-0">

                    <div className="dash-balance">
                        <div className="dash-content relative">
                            <h3 className="w-text">My Wallet</h3>
                            <div className="notification">
                                <a href="#"><i className="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>

                    <section className="bal-section container">
                        
                        <div className="resources-card-wrapper">
                            <div className="wallet-card mr-10 round">
                                <div className="flex-column flex-md-row">
                                <img src="content/coin1.png" className="max50" alt=""/>
                                <h3 className="">Bitcoin Wallet</h3>
                                <p className="mb-0 font-weight-medium"><i className="txt-green fa fa-arrow-up mr-10"></i>0.8224 BTc </p>
                                </div>
                            </div>
                            
                            <div className="wallet-card ml-10">
                                <div className="flex-column flex-md-row">
                                <img src="content/coin2.png" className="max50" alt=""/>
                                <h3 className="">ETH Wallet</h3>
                                <p className="mb-0 font-weight-medium"><i className="txt-red fa fa-arrow-down mr-10"></i>1.2629 ETH </p>
                                </div>
                            </div>
                        </div>
                        <div className="resources-card-wrapper mt-15">
                            <div className="wallet-card mr-10">
                                <div className="flex-column flex-md-row">
                                <img src="content/coin4.png" className="max50" alt=""/>
                                <h3 className="">Ripple Wallet</h3>
                                <p className="mb-0 font-weight-medium"><i className="txt-red fa fa-arrow-down mr-10"></i>8,954.3 XRP </p>
                                </div>
                            </div>
                            
                            <div className="wallet-card ml-10">
                                <div className="flex-column flex-md-row">
                                <img src="content/coin3.png" className="max50" alt=""/>
                                <h3 className="">Dash Wallet</h3>
                                <p className="mb-0 font-weight-medium"><i className="txt-green fa fa-arrow-up mr-10"></i>1.269 DASH </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="wallets-list container">
                        <h4 className="title-main">Cryptocoins Wallets</h4>
                        <div className="expandable-item accordion active" data-group="accordion1">
                            <div className="expandable-header purp">
                                <i className="cc BTC-alt"></i>
                                <h3 className="list-title">Bitcoin Wallet</h3>
                                <i className="list-arrow fa fa-angle-down"></i>
                            </div>
                            <div className="expandable-content">
                                <div className="padding-content">
                                    <h4>Recent Bitcoin Transactions</h4>
                                    <div className="recent-trans">
                                        <ul className="dropdown-menu-list list-unstyled no-mb">
                                            <li>
                                                <div className="notice-icon">
                                                    <i className="fa fa-institution"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Recieved Amount</strong>
                                                        <span className="time small">+ 3.39498 BTC</span>
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
                                                        <span className="time small">- 0.81729 BTC</span>
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
                                                        <span className="time small">+ 548,485.44 BTC</span>
                                                    </span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="wallet-address">
                                        <h4 className="w-text mt-0">Bitcoin Wallet Address</h4>
                                        <div className="form-row-group with-icons">
                                            <div className="form-row no-padding">
                                                <i className="cc BTC text-muted"></i>
                                                <input type="text" name="aaa" className="form-element" value="XAHS-AKDLAD4523AAI"/>
                                            </div>
                                        </div>
                                        <img src="content/qr.png" alt="" className="mt-15"/>
                                        <h4>This is your Wallet ID</h4>
                                        <p className="g-text mb-0">Scan This crediential to send or exchange crypto assets with just scaning this code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="expandable-item accordion" data-group="accordion1">
                            <div className="expandable-header purp">
                                <i className="cc ETH-alt"></i>
                                <h3 className="list-title">Ethereum Wallet</h3>
                                <i className="list-arrow fa fa-angle-down"></i>
                            </div>
                            <div className="expandable-content">
                                <div className="padding-content">
                                    <h4>Recent Ethereum Transactions</h4>
                                    <div className="recent-trans">
                                        <ul className="dropdown-menu-list list-unstyled no-mb">
                                            <li>
                                                <div className="notice-icon">
                                                    <i className="fa fa-institution"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Recieved Amount</strong>
                                                        <span className="time small">+ 3.39498 ETH</span>
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
                                                        <span className="time small">- 0.81729 ETH</span>
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
                                                        <span className="time small">+ BTC8,485.44 ETH</span>
                                                    </span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="wallet-address">
                                        <h4 className="w-text mt-0">Ethereum Wallet Address</h4>
                                        <div className="form-row-group with-icons">
                                            <div className="form-row no-padding">
                                                <i className="cc ETH text-muted"></i>
                                                <input type="text" name="aaa" className="form-element" value="XAHS-AKDLAD4523AAI"/>
                                            </div>
                                        </div>
                                        <img src="content/qr.png" alt="" className="mt-15"/>
                                        <h4>This is your Wallet ID</h4>
                                        <p className="g-text mb-0">Scan This crediential to send or exchange crypto assets with just scaning this code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="expandable-item accordion" data-group="accordion1">
                            <div className="expandable-header purp">
                                <i className="cc LTC-alt"></i>
                                <h3 className="list-title">Litecoin Wallet</h3>
                                <i className="list-arrow fa fa-angle-down"></i>
                            </div>
                            <div className="expandable-content">
                                <div className="padding-content">
                                    <h4>Recent Litecoin Transactions</h4>
                                    <div className="recent-trans">
                                        <ul className="dropdown-menu-list list-unstyled no-mb">
                                            <li>
                                                <div className="notice-icon">
                                                    <i className="fa fa-institution"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Recieved Amount</strong>
                                                        <span className="time small">+ 3.39498 LTC</span>
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
                                                        <span className="time small">- 0.81729 LTC</span>
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
                                                        <span className="time small">+ BTC8,485.44 LTC</span>
                                                    </span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="wallet-address">
                                        <h4 className="w-text mt-0">Litecoin Wallet Address</h4>
                                        <div className="form-row-group with-icons">
                                            <div className="form-row no-padding">
                                                <i className="cc LTC text-muted"></i>
                                                <input type="text" name="aaa" className="form-element" value="XAHS-AKDLAD4523AAI"/>
                                            </div>
                                        </div>
                                        <img src="content/qr.png" alt="" className="mt-15"/>
                                        <h4>This is your Wallet ID</h4>
                                        <p className="g-text mb-0">Scan This crediential to send or exchange crypto assets with just scaning this code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </section>

                    <section className="container">
                        <div className="resources-card-wrapper mt-15">
                            <a href="buy-sell.html" className="buy-card mr-10">
                                <div className="flex-column flex-md-row">
                                <img src="content/p1.png" alt=""/>
                                <h4>Buy crypto</h4>
                                <p className="g-text mb-0 font-weight-medium">Lorem ipsum dolr sit amet alias iure. </p>
                                </div>
                            </a>
                            
                            <a href="buy-sell.html" className="buy-card ml-10">
                                <div className="flex-column flex-md-row">
                                <img src="content/p2.png" alt=""/>
                                <h4>Sell crypto</h4>
                                <p className="g-text mb-0 font-weight-medium">Lorem ipsum dolr sit amet alias iure. </p>
                                </div>
                            </a>
                            
                        </div>
                    </section>

                
                    <section className="container">
                        <h4 className="title-main">Recent Transactions</h4>
                        <ul className="transaction-list list-unstyled">
                            <li>
                                <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img className="img-xs" src="content/coin1.png" alt="coin image"/>
                                    <div className="ml-10">
                                    <h4 className="coin-name">Bitcoin</h4>
                                    <small className="text-muted">08-24 <span className="ml-10">20.04PM</span></small>
                                    </div>
                                </div>
                                <div>
                                    <small className="d-block mb-0 txt-green">+0.94853</small>
                                    <small className="text-muted d-block">$2,748.94</small>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img className="img-xs" src="content/coin2.png" alt="coin image"/>
                                    <div className="ml-10">
                                    <h4 className="coin-name">Ethereum</h4>
                                    <small className="text-muted">08-24 <span className="ml-10">20.04PM</span></small>
                                    </div>
                                </div>
                                <div>
                                    <small className="d-block mb-0 txt-green">+1.84993</small>
                                    <small className="text-muted d-block">$3,748.94</small>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img className="img-xs" src="content/coin3.png" alt="coin image"/>
                                    <div className="ml-10">
                                    <h4 className="coin-name">Dashcoin</h4>
                                    <small className="text-muted">08-24 <span className="ml-10">20.04PM</span></small>
                                    </div>
                                </div>
                                <div>
                                    <small className="d-block mb-0 txt-red">-23.84523</small>
                                    <small className="text-muted d-block">$1,493.03</small>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img className="img-xs" src="content/coin4.png" alt="coin image"/>
                                    <div className="ml-10">
                                    <h4 className="coin-name">Ripple</h4>
                                    <small className="text-muted">08-24 <span className="ml-10">20.04PM</span></small>
                                    </div>
                                </div>
                                <div>
                                    <small className="d-block mb-0 txt-green">+500.347</small>
                                    <small className="text-muted d-block">$239.94</small>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <footer>
                        <div className="container">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                            <p>Copyright © All Right Reserved</p>
                        </div>
                    </footer>
                </main>
                
            </div>
        </div>
    )
}