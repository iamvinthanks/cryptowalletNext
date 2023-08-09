/* eslint-disable @next/next/no-img-element */
"use client"

export default function NavBottom() {
    return (
        <div className="bottom-menu-section">
          <ul className="bottom-menu list-unstyled list-inline">
            <li>
              <a href="index.html">
                <img src="/content/l1.png" alt="" />
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href="wallet">
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
    )
}