import './styles/App.css'
import Navbar from './components/Nabar'
import Banner from './components/Banner'
import MidText from './components/MidText'
import Services from './components/Services'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MidText />
      <Services />
      <Info />
      <Footer />
    </div>
  )
}

export default App
