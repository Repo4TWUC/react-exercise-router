import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <p>
          This is a beautiful Home Page.
          And the url is '/'.
        </p>
    );
  }
}

Home.propTypes = {};

export default Home;
