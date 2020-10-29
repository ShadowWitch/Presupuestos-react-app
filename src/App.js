import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'
// 
function App() {

  const [cantidad, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [elgasto, guardarElGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);
  const [creargasto, guardarCrearGasto] = useState(false);
  const [mostrarpregunta, actualizarMostrarPregunta] = useState(true);


  useEffect(() =>{
    if(creargasto === true){

      //Agregar el gasto
      guardarGastos([
        ...gastos,
        elgasto
      ])

      //Resetear la comprobacion del envio del gaso
      guardarCrearGasto(false);

      //Restar presupuesto
      const presupuestoRestante = restante - elgasto.cantidad;
      guardarRestante(presupuestoRestante)

    }


  }, [elgasto, creargasto, gastos, restante])


  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido'>
          {mostrarpregunta
          ?
            <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarMostrarPregunta={actualizarMostrarPregunta}
            />
          :
            <div className='row'>
              <div className='one-half column'>
                <Formulario 
                  guardarElGasto={guardarElGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className='one-half column'>
                <Listado 
                  gastos={gastos}
                />

                <ControlPresupuesto 
                  cantidad={cantidad}
                  restante={restante}
                />
              </div>
              
            </div>
          }

        </div>
      </header>
    </div>
  );
}

export default App;
