 import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © See My Trip{" "}
          {/* <a href="http://dexignlab.com/" target="_blank" rel="noreferrer">
            DexignLab
          </a>{" "} */}
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
