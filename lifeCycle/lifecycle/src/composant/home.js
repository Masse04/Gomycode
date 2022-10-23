import React from "react";
import {useState,useEffect} from 'react';
const Home = () => {
  const [Recup,setRecup] = useState()
  const [Task,setTask] = useState([{Task:'la premiere tache', status : false}]);
  let barre = 'barre'
  let nonBarre = 'nonBarre'
  let tache = 'tache'
 useEffect(()=>{
    window.alert('vous etes sur la page d\'accueil');
 },[])
  return (
    <div className="home">
      <div className='search'>
        <input type= 'text' placeholder = 'faites une recherche' onChange={(e) => { setTask([...Task.filter(n => (n.Task.includes(e.target.value)))])
        console.log(e.target.value)}}/>
        <button ><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className='add'>
        <input type = 'text' placeholder = 'ecrire une tâche a effectuer' onChange={(e) => {setRecup(e.target.value)
        console.log(Recup)}}/>
        <button onClick={()=>{setTask([...Task,{Task:Recup , status : false}])
        console.log(Task)}}><i class="fa-regular fa-square-plus"></i></button>
      </div>
      <div >
        {
          Task.map(el =>(
              <div className={tache}  >
                  <input type = 'checkbox'  onChange={()=> {
                    setTask([...Task.map(num =>
                      num.Task === el.Task ? {...num, status : !num.status} : num)])    
                    console.log(Task)
                  }}/>
                  <p className={el.status === true ?  barre :  nonBarre}>{el.Task}</p>
                  <button onClick={()=> {
                    setTask([...Task.filter(x => (x.Task !== el.Task))])
                  }}><i class="fa-regular fa-trash-can"></i></button>
              </div>
          ))
          }
      </div>
      
    </div>
  );
}
export default Home;