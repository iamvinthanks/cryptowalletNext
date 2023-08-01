/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image'
import styles from './page.module.css'
import 'styles/global.style.css'
import 'styles/bootstrap.min.css'
import React, { useState , useEffect} from 'react'

export default function Home() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  function OpenNotification() {
    document.getElementById("notification").style.display = "block";
  }
  useEffect(() => {
    
    
  }, []);
  return (
    <div className="wrapper">
      <div className="wrapper-inline">
      <header className="no-background">
          <div className="search-button" data-search="open" onClick={OpenNotification}>
            <img src="/content/notification1.png" className="not-icon1" alt="" />
            <img src="/content/notification2.png" className="not-icon2" alt="" />
          </div>
      </header>
        <div className="search-form" id="notification">
          <span className="close-search-form" data-search="close"
            ><i className="fa fa-times"></i>
          </span>
          <form>
            <div className="search-input">
              <input
                type="text"
                name="q"
                className="form-element"
                placeholder="Search..."
              />
              <button type="submit" className="search-input-btn">
                <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </form>
          <ul className="notification-list list-unstyled">
            <li>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="">
                    <h5 className="coin-name">You have 3 notifications</h5>
                  </div>
                </div>
                <div>
                  <a href="#"
                    ><small className="text-muted d-block"
                      >mark all as read</small></a>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="notice-icon available">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="ml-10">
                    <h4 className="coin-name">Successful transaction 0.01 BTC</h4>
                    <small className="text-muted">15 min ago</small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="notice-icon away">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="ml-10">
                    <h4 className="coin-name">4 of Pending Transactions!</h4>
                    <small className="text-muted"> 12 hours ago</small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="notice-icon busy">
                    <i className="fa fa-times"></i>
                  </div>
                  <div className="ml-10">
                    <h4 className="coin-name">Cancelled Order of 200 ICO</h4>
                    <small className="text-muted">15 Feb - 08:34</small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="notice-icon available">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="ml-10">
                    <h4 className="coin-name">Great Speed Notify of 1.34 LTC</h4>
                    <small className="text-muted">24 jan - 20:43</small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a href="#" className="text-muted">Read all notifications</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="bottom-menu-section">
          <ul className="bottom-menu list-unstyled list-inline">
            <li>
              <a href="index.html">
                <img src="/content/l1.png" alt="" />
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href="wallet.html">
                <img src="/content/l2.png" alt="" />
                <p>Wallet</p>
              </a>
            </li>
            <li>
              <a className="b-m-pluse" href="#"><i className="fa fa-plus"></i></a>
            </li>
            <li>
              <a href="setting.html">
                <img src="/content/l3.png" alt="" />
                <p>Cards</p>
              </a>
            </li>
            <li>
              <a href="profile.html">
                <img src="/content/l4.png" alt="" />
                <p>Profile</p>
              </a>
            </li>
          </ul>
        </div>
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
