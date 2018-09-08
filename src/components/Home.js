import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWineGlassAlt,
  faEnvelope,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";
library.add(faWineGlassAlt);
library.add(faEnvelope);
library.add(faBookOpen);

const Home = () => {
  return (
    <div class="container">
      <img style={{ overflow: "hidden" }} src="/Rippon.jpg" alt="" />
      <div className="center">
        <h1>New Zealand Wine Supply</h1>
        <button>
          <FontAwesomeIcon size="4x" icon="wine-glass-alt" />
          <br />
          Our Wines
        </button>
        <button>
          <FontAwesomeIcon size="4x" icon="envelope" />
          <br />
          About Us
        </button>
        <button>
          <FontAwesomeIcon size="4x" icon="book-open" />
          <br />
          Contact
        </button>
      </div>
    </div>
  );
};

export default Home;
