import Card from './components/CardStudent'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import Contact from './pages/Contact'
import GithubGraph from './pages/GithubActivity'
import Hero from './pages/Hero'
import Profil from './pages/Profil'
import Showcase from './pages/Showcase'

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <Profil />
    <Card />
    <Showcase />
    <GithubGraph />
    <Contact />
    <Footer />
    </>
  )
}

export default App
