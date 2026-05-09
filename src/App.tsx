import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import Features from './components/layout/Features'
import Tools from './components/layout/Tools.tsx'
import Footer from './components/layout/Footer.tsx'
function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>

      <main>
        <Hero/>
        <Features/>
        <Tools/>
        <Footer/>
      </main>
      
    </div>
  )
}

export default App
