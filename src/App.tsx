import './App.css'
import LeftMenu from './components/leftMenu/leftMenu'
import CardAnimated from './components/cardAnimated/cardAnimated'
import LoginPage from './pages/login'
import Cube from './components/cube/cube'


function App() {
  return (
    <main>
      <LeftMenu/>
      <div className='main_div'>
         {/*<CardAnimated typeCard="animatedRainbow"/>  */}
        {/* <LoginPage/> */}
        {/* <Cube/> */}
      </div>
      

    </main>
  )
}

export default App
