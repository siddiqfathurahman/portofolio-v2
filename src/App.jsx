import Navbar from './components/Navbar'
import './index.css'
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
    <Showcase />
    <GithubGraph />
    </>
  )
}

export default App
