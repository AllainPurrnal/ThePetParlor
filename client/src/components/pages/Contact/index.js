import React from 'react';
import './index.css';

const Contact = () => {

  return (
    <div className="wrapper contactWrap">
      <div className="topSection">
        <div className="storeHours">
          <h1>
            Hours
          </h1>

          <ul>
            <li>
              Monday: 9:00am - 6:00pm
            </li>
            <li>
              Tuesday: 9:00am - 6:00pm
            </li>
            <li>
              Wednesday: 9:00am - 5:00pm
            </li>
            <li>
              Thursday: 9:00am - 6:00pm
            </li>
            <li>
              Friday: 9:00am - 3:00pm
            </li>
            <li>
              Saturday/Sunday: Closed
            </li>
          </ul>
        </div>

        <div className="storeLocation">
          <h1>
            Location
          </h1>

          <p>Insert Google Maps API</p>
          <p>
            Donec non massa commodo, hendrerit odio eu, vehicula dolor. Sed ut arcu consectetur, aliquam sapien sed, consectetur felis. Duis et mollis eros. Praesent et enim nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mi ex, tempor et dolor sed, tempus pretium sem. Praesent porta diam quis convallis ultrices. Morbi tellus mi, hendrerit ac placerat nec, fringilla et orci.
          </p>
        </div>
      </div>

      <div className="storeContact">
        <h1>Contact Us</h1>

        <form>
          <p>Name:</p><input></input>
          <p>Email Address:</p><input></input>
          <p>Subject:</p><input></input>
          <p>Message:</p><input></input>
        </form>
      </div>
    </div>
  )
}

export default Contact;