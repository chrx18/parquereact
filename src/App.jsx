import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { fetchParques } from './service/parqueService';
import ParqueCard from './components/ParqueCard.jsx';


function App() {

  const [parques, setParques] = useState([])

  useEffect(() => {

    fetchParques()

      .then((data) => {

        console.log(data);
        setParques(data);

      })

      .catch((err) => {

        console.log(err.message);

      });

  }, []);

  return (
    <>

      <header>

        <h1 className="text-center p-3 shadow rounded-5 bg-success text-white">
          ¡Bienvenido a la pagina oficial de Parques!
        </h1>

      </header>

      <div className="row p-3">

        {parques.map((parque) => {

          return (

            <div className="col-xl-6 col-md-6 my-2"
              key={parque.id}>

              <ParqueCard
                nombre={parque.nombre}
                imagen={parque.imagen}
                descripcion={parque.descripcion}
                likes={parque.likes}
              />
            </div>

          );

        })}
        <footer className="text-center p-3">
          <img src="https://yt3.googleusercontent.com/rleiHoc9HO4_uE8rYuZgdIrlJ31A6wWsjIzERP8EZTMlxSPu8MZpFG1cmNUnAQXYN9wBQ6MzJw=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="" 
          className = "img-fluid "/>
          </footer>

        
      </div>

    </>

  )

}

export default App