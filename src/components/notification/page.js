"use client"

export default function Notification(){
    return(
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
    )
}