/* eslint-disable @next/next/no-img-element */
"use client";
import styles from './page.module.css'
import 'styles/global.style.css'
import 'styles/bootstrap.min.css'
import React, { useState , useEffect} from 'react'
import Header from '@/components/header/page';
import Notification from '@/components/notification/page';

export default function Home() {
  return (
    <div className="wrapper">
      <div className="wrapper-inline">
        <Header />
        <Notification />
        {/* content */}
        <main className="margin mt-0">
          <div className="dash-balance">
            <div className="d-flex align-items-center mt-30">
              <div className="d-flex flex-grow">
                <div className="mr-auto">
                  <h1 className="b-val">$2,589.50</h1>
                  <p className="g-text mb-0">IDR Balance</p>
                </div>
                <div className="ml-auto align-self-end">
                  <a href="profile.html" className="profile-av"><img src="/content/avatar/avatar.png" alt=""/></a>
                </div>
              </div>
            </div>
            <div className="services-bulk">
              <div className="content-row">
                <div className="serv-item">
                  <a href="#" className="serv-icon"><img src="/content/icon1.png" className="mb-5" alt=""/></a>
                  <span>Send </span>
                </div>
                <div className="serv-item">
                  <a href="#" className="serv-icon"
                    ><img src="/content/icon2.png" className="mb-5" alt=""
                  /></a>
                  <span>Recieve </span>
                </div>
                <div className="serv-item">
                  <a href="#" className="serv-icon"
                    ><img src="/content/icon4.png" className="mb-5" alt=""
                  /></a>
                  <span>Loan </span>
                </div>
                <div className="serv-item">
                  <a href="#" className="serv-icon"
                    ><img src="/content/icon3.png" className="mb-5" alt=""
                  /></a>
                  <span>Topup </span>
                </div>
              </div>
            </div>
          </div>
          <section className="trans-sec container">
          <h4 className="title-main mt-0">Balances</h4>
          <ul className="transaction-list list-unstyled mb-0">
              <li>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-xs"
                      src="/content/coin1.png"
                      alt="coin image"
                    />
                    <div className="ml-10">
                      <h4 className="coin-name">Bitcoin</h4>
                      <small className="text-muted"
                        >08-24 <span className="ml-10">20.04PM</span></small>
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
                    <img
                      className="img-xs"
                      src="/content/coin2.png"
                      alt="coin image"
                    />
                    <div className="ml-10">
                      <h4 className="coin-name">Ethereum</h4>
                      <small className="text-muted"
                        >08-24 <span className="ml-10">20.04PM</span></small>
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
                    <img
                      className="img-xs"
                      src="/content/coin3.png"
                      alt="coin image"
                    />
                    <div className="ml-10">
                      <h4 className="coin-name">Dashcoin</h4>
                      <small className="text-muted"
                        >08-24 <span className="ml-10">20.04PM</span></small>
                    </div>
                  </div>
                  <div>
                    <small className="d-block mb-0 txt-red">-23.84523</small>
                    <small className="text-muted d-block">$1,493.03</small>
                  </div>
                </div>
              </li>
              <li className="mb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-xs"
                      src="/content/coin4.png"
                      alt="coin image"
                    />
                    <div className="ml-10">
                      <h4 className="coin-name">Ripple</h4>
                      <small className="text-muted"
                        >08-24 <span className="ml-10">20.04PM</span></small>
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
          <section className="trans-sec container">
            <h4 className="title-main mt-0">Recent Transactions</h4>
            <ul className="transaction-list list-unstyled mb-0">
              <li>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-xs"
                      src="/content/coin1.png"
                      alt="coin image"
                    />
                    <div className="ml-10">
                      <h4 className="coin-name">Bitcoin</h4>
                      <small className="text-muted"
                        >08-24 <span className="ml-10">20.04PM</span></small>
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
                    <img
                      className="img-xs"
                      src="/content/coin2.png"
                      alt="coin image"
                    />
                    <div className="ml-10">
                      <h4 className="coin-name">Ethereum</h4>
                      <small className="text-muted"
                        >08-24 <span className="ml-10">20.04PM</span></small>
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
                    <img
                      className="img-xs"
                      src="/content/coin3.png"
                      alt="coin image"
                    />
                    <div className="ml-10">
                      <h4 className="coin-name">Dashcoin</h4>
                      <small className="text-muted"
                        >08-24 <span className="ml-10">20.04PM</span></small>
                    </div>
                  </div>
                  <div>
                    <small className="d-block mb-0 txt-red">-23.84523</small>
                    <small className="text-muted d-block">$1,493.03</small>
                  </div>
                </div>
              </li>
              <li className="mb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-xs"
                      src="/content/coin4.png"
                      alt="coin image"
                    />
                    <div className="ml-10">
                      <h4 className="coin-name">Ripple</h4>
                      <small className="text-muted"
                        >08-24 <span className="ml-10">20.04PM</span></small>
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
        </main>
      </div>
    </div>
  )
}
