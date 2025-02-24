import React from "react";
import "../styles.css"; // Ensure the CSS is applied

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Made by <b>Pranay Vaidya</b>
      </p>
      <p>
        <a
          href="https://github.com/your-repo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
