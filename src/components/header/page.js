"use client"
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
export default function Header(){
    const [notificationOpen, setNotificationOpen] = useState(false);
    function OpenNotification() {
      document.getElementById("notification").style.display = "block";
    }
    useEffect(() => {
      
      
    }, []);
    return(
        <header className="no-background">
          <div className="search-button" data-search="open" onClick={OpenNotification}>
            <img src="/content/notification1.png" className="not-icon1" alt="" />
            <img src="/content/notification2.png" className="not-icon2" alt="" />
          </div>
      </header>
    )
}