import React from "react";
import "./NewLetter.css";

const NewLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>
        Subscribe to our newsletter and stay updated
        <div>
          <input type="email" placeholder="Enter Email here..." />
          <button>Subscribe</button>
        </div>
      </p>
    </div>
  );
};

export default NewLetter;
