import './App.css'
import Navbar from './Navbar'
import { BrowserRouter } from "react-router-dom"
import Paintings from './components/Paintings'
import ListPaintings from './components/ListPaintings'
import PaintingInfo from './components/PaintingInfo'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Paintings />}>
            <Route path="list" element={<ListPaintings />} />
            <Route path=":id" element={<PaintingInfo />} />
          </Route>

          {/* <Route path="favorites" element={<Favorites />} />
          <Route path="checkout" element={<Cart />} />
          <Route path="about" element={<About />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
