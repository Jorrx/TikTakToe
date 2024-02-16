
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './component/AppRouter'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
