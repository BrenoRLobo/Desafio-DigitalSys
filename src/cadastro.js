import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';
import axios from 'axios';

function Cadastro() {
    const [dados, setDados] = useState({
        nome: '',
        dataNascimento: '',
        email: '',
        telefone: '',
        endereco: '',
        experiencia: [{ cargo: '', empresa: '', periodo: '', descricao: '' }],
        formacao: [{ instituicao: '', curso: '', periodo: '' }],
    });
    
    const handleChange = (e, index, type) => {
        const { name, value } = e.target;
        if (type === 'experiencia' || type === 'formacao') {
          const updatedSection = [...dados[type]];
          updatedSection[index][name] = value;
          setDados({ ...dados, [type]: updatedSection });
        } else {
          setDados({ ...dados, [name]: value });
        }
    };
    
    const addSection = (type) => {
        const newSection = type === 'experiencia'
          ? { cargo: '', empresa: '', periodo: '', descricao: '' }
          : { instituicao: '', curso: '', periodo: '' };
        setDados({ ...dados, [type]: [...dados[type], newSection] });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(dados);
      const infoDados = {nome: dados.nome, dataNascimento: dados.dataNascimento};
      const responseDados = await axios.post('http://127.0.0.1:8000/create_dados/', infoDados);
      const infoContato = {email: dados.email, telefone: dados.telefone, endereco: dados.endereco, dadosPessoais: responseDados.data.id};
      const responseContato = await axios.post('http://127.0.0.1:8000/create_contato/', infoContato);
      const experiencia1 = dados.experiencia.map(exp =>
        axios.post('http://127.0.0.1:8000/create_experiencia/', {...exp, dadosPessoais: responseDados.data.id}))
        await Promise.all(experiencia1)
      const formacao1 = dados.formacao.map(forma =>
        axios.post('http://127.0.0.1:8000/create_formacao/', {...forma, dadosPessoais: responseDados.data.id}))
        await Promise.all(formacao1)
      console.log(responseContato);
    };

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/');
    };
    
      return (
        <form onSubmit={handleSubmit}>
          <h2>Dados Pessoais</h2>
          <label>Nome:</label>
          <input type="text" name="nome" value={dados.nome} onChange={handleChange} />
          
          <label>Data de Nascimento:</label>
          <input type="date" name="dataNascimento" value={dados.dataNascimento} onChange={handleChange} />
    
          <h2>Contato</h2>
          <label>Email:</label>
          <input type="email" name="email" value={dados.email} onChange={handleChange} />
    
          <label>Telefone:</label>
          <input type="tel" name="telefone" value={dados.telefone} onChange={handleChange} />
    
          <label>Endereço:</label>
          <input type="text" name="endereco" value={dados.endereco} onChange={handleChange} />
    
          <h2>Experiência Profissional</h2>
          {dados.experiencia.map((exp, index) => (
            <div key={index}>
              <label>Cargo:</label>
              <input type="text" name="cargo" value={exp.cargo} onChange={(e) => handleChange(e, index, 'experiencia')} />
    
              <label>Empresa:</label>
              <input type="text" name="empresa" value={exp.empresa} onChange={(e) => handleChange(e, index, 'experiencia')} />
    
              <label>Período:</label>
              <input type="text" name="periodo" value={exp.periodo} onChange={(e) => handleChange(e, index, 'experiencia')} />
    
              <label>Descrição:</label>
              <input type="text" name="descricao" value={exp.descricao} onChange={(e) => handleChange(e, index, 'experiencia')} />
            </div>
          ))}
          <button type="button" onClick={() => addSection('experiencia')}>Adicionar Experiência</button>
    
          <h2>Formação Acadêmica</h2>
          {dados.formacao.map((form, index) => (
            <div key={index}>
              <label>Instituição:</label>
              <input type="text" name="instituicao" value={form.instituicao} onChange={(e) => handleChange(e, index, 'formacao')} />
    
              <label>Curso:</label>
              <input type="text" name="curso" value={form.curso} onChange={(e) => handleChange(e, index, 'formacao')} />
    
              <label>Período:</label>
              <input type="text" name="periodo" value={form.periodo} onChange={(e) => handleChange(e, index, 'formacao')} />
            </div>
          ))}
          <button type="button" onClick={() => addSection('formacao')}>Adicionar Formação</button>
    
          <button type="submit">Enviar</button>
          <button onClick={handleNavigation} className='voltar'>Voltar</button>
        </form>
      );
    }
  
  export default Cadastro;
