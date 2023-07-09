import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe-col">
      <h4 className="subscribe-title">Subscribe</h4>
      <form className="subscribe-form">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
