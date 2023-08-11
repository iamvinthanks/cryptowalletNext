"use client";
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from '../globals.css'
import 'styles/global.style.css'
import 'styles/bootstrap.min.css'
import 'styles/animate.css'
import WalletComponent from '@/components/wallet/page';
import Header from '@/components/header/page';
import Notification from '@/components/notification/page';
export default function Wallet() {
    const Asset = [
        {
            id: 1,
            name: "Bitcoin",
            symbol: "BTC",
            wallet: "XAHS-AKDLAD4523AAI",
        },
        {
            id: 2,
            name: "Etherium",
            symbol: "ETH",
            wallet: "ETH-AKDLAD4523AAI",
        },
        {
            id: 3,
            name: "Litecoin",
            symbol: "LTC",
            wallet: "XAHS-AKDLAD4523AAI",
        },
    ];
    return (
        <div classNameName="wrapper">
            <div className="wrapper-inline">
            <Header />
        <Notification />
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
                        {Asset.map(item => (
                            <WalletComponent
                                key={item.id}
                                name={item.name}
                                symbol={item.symbol}
                                wallet={item.wallet}
                            />
                        ))}
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