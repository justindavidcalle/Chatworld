import { useState } from 'react';
import '../css/login.css'
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Login = ({setToken}) => {

    const [username, setUsername] = useState()
    const [eMail, setEMail] = useState()
    const [password, setPassword] = useState()


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          eMail,
          password
        });
        setToken(token);
    }

    return (
    <>
    <div className='login-wrapper'>
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                <p>E-Mail</p>
                <input type="eMail" onChange={e => setEMail(e.target.value)} />
            </label>
            <label >
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
    
    </>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login