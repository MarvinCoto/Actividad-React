import './App.css'
import BotonVerde from './components/BotonVerde'
import BotonAzul from './components/BotonAzul'
import Spinner from './components/Spinner'
import Alerta from './components/Alerta'
import BotonCarga from './components/BotonCarga'
import BotonRecord from './components/BotonRecord'
import Imagen from './components/Imagen'
import Acordeon from './components/Acordeon'


function App() {


  return (
    <>
    <h1>Actividad de Componentes</h1> 
    <br />
    <BotonVerde/>
    <br /> <br />
    <BotonAzul/>
    <br /> <br />
    <Spinner/>
    <br /> <br />
    <Alerta/>
    <br /> <br />
    <BotonCarga/>
    <br /> <br />
    <BotonRecord/>
    <br /> <br />
    <Imagen/>
    <br /> <br />
    <Acordeon/>
    <br /> <br />
    </>
  )
}

export default App
