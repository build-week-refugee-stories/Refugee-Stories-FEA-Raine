import React from 'react';

const Authentication = (Component1) => (Component2) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        adminLoggedIn: false
      }
    }

    componentDidMount () {
      if (localStorage.getItem('token')) {
        this.setState({
          adminLoggedIn: true
        })
      } else {
        this.setState({
          adminLoggedIn: false
        })
      }
    }

    render() {
      if (!this.state.adminLoggedIn) {
        return <Component1 />
      } else {
        return <Component2 />
      }
    }
  }

  export default Authentication;