// import Hello from './Hello';
// import Header from './components/Header';
import React, {useState} from 'react';
import {
  Button,
  Col,
  Row
} from 'reactstrap';
import {
  Header,
  NewComponent
} from './components/Header';
import './App.css';

// function NewComponent() {
//   return <div>ini New Component</div>;
// }

function App() {
  // const name = 'Nyoman';

  const [name, setName] = useState('Nyoman');
  const [alamat, setAlamat] = useState('Bali');
  const [umur] = useState(23);

  const [loginData, setLoginData] = useState({
    email: null,
    password: null,
  });

  const changeNama = (event) => {
    console.log(event);
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };

  return(
    <>
    <Header
        nama={name}
        alamat={alamat}
        umur={26}
        gantiNama={(e) => setName(e.target.value)}
        text={<h1>Ini tg html di dalam property/attribute</h1>}
      />
      <NewComponent/>
      <h1>Hello {name}</h1>
       <form onSubmit={handleSubmit}>
         <input
          type="email"
          placeholder="email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button type="submit" color="primary" outline>
          submit
        </Button>
       </form>
       <Row>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
        <Col md={1} style={{ border: '1px solid tomato' }}>
          <p>Test</p>
        </Col>
      </Row>
    </>
  );
}

export default App;