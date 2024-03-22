import './App.css';
import {useState} from 'react';

function App() {
  let list = [];
  let items = document.getElementById('list');
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const adicionar = () => {
    if(message !== '') {
    const li = `<li>${message}<button>Remover</button></li>`;
    items.innerHTML += li;
    list.push(li.replace('<li>', '').replace('</li>',''));
    setMessage('');
    }
  }

  const remover = (evt) => {
    if (evt.target.nodeName == "BUTTON" && evt.target.id !== "adicionar"){
        const li = evt.target.parentNode;
        li.remove();
        list.splice(list.indexOf(evt.target.parentNode.innerHTML), 1);

    }
}

window.addEventListener('click', remover);

  return (
    <form className='bg-white px-8 pt-6 pb-8 mb-4'>
    <h1 className='block text-gray-700 text-xl font-bold mb-2'>Lista de Tarefas</h1>
    <input className='shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="item" type="text" placeholder='Digite a tarefa aqui' value={message} onChange={handleChange}></input>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 ml-5' id="adicionar" type="button" onClick={adicionar}>Adicionar</button>
    <ul id="list">
    
    </ul>
    </form>
  );

  }
export default App;
