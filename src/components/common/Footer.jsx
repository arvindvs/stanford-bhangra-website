import React, { Component } from 'react';

function Footer() {
    return(
        <footer>
            <div className="icons">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/stanfordbhangra/" target="_blank" className="facebook">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/stanfordbhangra/" target="_blank" className="instagram">Instagram</a>
                    </li>
                    <li className="last">
                        <a href="https://www.youtube.com/results?search_query=stanford+bhangra" target="_blank" className="youtube">YouTube</a>
                    </li>
                </ul>
            </div>
            <p> Copyright © 2019 Stanford Bhangra </p>
        </footer>
    );
}

export default Footer;
