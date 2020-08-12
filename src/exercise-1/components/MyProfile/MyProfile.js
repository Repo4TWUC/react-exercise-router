import React from 'react';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <p>
          Username: xxx,
          Gender: female,
          Work: it industry,
          Website: '/my-profile'
        </p>
    );
  }
}

MyProfile.propTypes = {};

export default MyProfile;
