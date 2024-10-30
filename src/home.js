import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import logo from './Logo.png';

function Home() {
    const navigate = useNavigate();
    const handleNavigation1 = () => {
      navigate('/cadastro');
    };

    const handleNavigation2 = () => {
      navigate('/curriculos');
    };
    
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
        <h1>BEM-VINDO À PEGHO</h1>
        <p>Conectamos talentos e oportunidades para impulsionar carreiras e empresas!</p>
      <div className='buttons'>
        <button className='cadastrarHome' onClick={handleNavigation1}>CADASTRAR</button>
      </div>
    </div>
  );
}

export default Home;