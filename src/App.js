import React, {useState, useEffect} from 'react';
import './App.css';
import FormularioTareas from './components/FormularioTareas';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const tareasGuardadas = 
          localStorage.getItem('tareas') 
          ? 
         JSON.parse(localStorage.getItem('tareas')) 
          : 
          [];


let configMostrarCompletadas = '';
if(localStorage.getItem('completadas' === null)){
  configMostrarCompletadas = true;
}  else {
   configMostrarCompletadas = localStorage.getItem('completadas') === 'true';
}


  const [tareas, setTareas] = useState(tareasGuardadas);

useEffect(() => {
   localStorage.setItem('tareas', JSON.stringify(tareas));
   
}, [tareas]);

const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas);

useEffect(() => {
  localStorage.setItem('completadas', mostrarCompletadas.toString());
  
}, [mostrarCompletadas]);


  return (
    <div className="contenedor">
      <Header  
          mostrarCompletadas = {mostrarCompletadas}
          setMostrarCompletadas = {setMostrarCompletadas}   
      />
      <FormularioTareas tareas={tareas} setTareas={setTareas}/>
      <ListaTareas 
          tareas={tareas}   
          setTareas={setTareas} 
          mostrarCompletadas = {mostrarCompletadas}
      />
    </div>
  );
}

export default App;
