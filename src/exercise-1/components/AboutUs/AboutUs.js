import React from 'react';
import {Link} from "react-router-dom";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <p>
          Company: ThoughtWorks Local
          Location: Xi'an
          <br />
          for more information please view our <Link to="/">website</Link>
        </p>
    );
  }
}

AboutUs.propTypes = {};

export default AboutUs;
