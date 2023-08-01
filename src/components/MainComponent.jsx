import { Route, Routes } from 'react-router-dom'
import Blue from './Blue'
import Red from './Red'
import Home from './Home'
import Green from './Green'
import Purple from './Purple'
import Orange from './Orange'

const MainComponent = () => {

    return(
        <div id="main-section">
          <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/blue" element={<Blue/>} />
            <Route path = "/red" element={<Red/>} />
            <Route path = "/green" element={<Green/>} />
            <Route path = "/purple" element={<Purple/>} />
            <Route path = "/orange" element={<Orange/>} />
          </Routes>
        </div>
    )
}

export default MainComponent