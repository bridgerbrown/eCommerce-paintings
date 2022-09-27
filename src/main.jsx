import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "jquery"
// import "bootstrap/dist/js/bootstrap"
import "@popperjs/core"
// import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./Shop/Shop"
import ItemPage from "./ItemPage"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="shop" element={<Shop />}>
              <Route path=":id" element={<ItemPage />} />
            </Route>
           
            {/* <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
            <Route path="checkout" element={<Checkout />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)