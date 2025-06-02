import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import '../src/components/ItemListContainer/ItemList.css'
import CatalogoAPI from './components/ItemListContainer/CatalogoAPI'
import Error from './components/ItemListContainer/Error'
import Detalle from './components/ItemListContainer/Detalle'
import './App.css'
function App() {

  return (
      <>
            <BrowserRouter>
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos a Luz de Oro!"} />
        <Routes>
        <Route path='/' element={<CatalogoAPI />} />
        <Route path="/:categoria" element={<CatalogoAPI />} />
        <Route path="/productos/:id" element={<Detalle/>} />
        <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
