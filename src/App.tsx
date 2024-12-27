import { FC, 
  //useEffect, 
  //useState 
} from 'react'
import './App.css'
import Providers from './providers'
import { BrowserRouter } from 'react-router-dom'
import Cabinet from './layout/cabinet'

import useLocalizeDocumentAttributes from './i18n/useLocalizeDocumentAttributes'

const App:FC = () => {

useLocalizeDocumentAttributes()

return (
  <Providers>
    <BrowserRouter 
    // future={{
    //   v7_startTransition: true,
    //   v7_relativeSplatPath: true
    // }}
    >
      <Cabinet />
    </BrowserRouter>
  </Providers>
)

}

export default App
