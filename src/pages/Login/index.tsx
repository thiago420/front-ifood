import { useState } from "react";
import { Container, Form } from "./styles";
import { useNavigate } from "react-router";
import api from "../../api";

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const json = JSON.stringify({
      email,
      password,
    });

    api
      .post('/auth/login', json, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert('User logged successfully!');
          localStorage.setItem('token', response.data.token);
          navigate('/user');
        } else {
          alert('Error login user');
        }
      })
      .catch(() => {
        alert('Error login user');
      });
  }

  return (
    <>
      <Container>
        <Form>
          <h1>Login</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={handleLogin}>Login</button>
        </Form>
      </Container>
    </>
  )
};

export default Register;