import Navbar from './components/Navbar'
import Footer from'./components/Footer'
import RemoveBackground from './components/RemoveBackground'

function App() {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
      <RemoveBackground />
      </div>
      <Footer />
    </div>
  )
}

export default App
