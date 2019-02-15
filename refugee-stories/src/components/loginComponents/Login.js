import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      user: '',
      password: ''
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  setUser = event => {
    event.preventDefault();
    const user = {
      username: this.state.user, 
      password: this.state.password
    }
    axios
      .post('https://refugeestories.herokuapp.com/api/login', user)
      .then(response => {
        localStorage.setItem('token', response.data.token) 
        this.props.history.push('/recent-stories')
      });
  }

  render() {
    return (
      <div className='submitStoryWrapper'>
        <h2 className='submitStoryTitle'>Admin Log-In</h2>
        <form className='submitStoryForm' onSubmit={this.setUser}>
          <input 
            placeholder='Username'
            type='text'
            name='user'
            onChange={this.handleChange}
            value={this.state.user}
            required
          />
          <input 
            placeholder='Password'
            type='text'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <button type='submit'>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;