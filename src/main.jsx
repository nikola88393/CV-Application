import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContainer} from './App.jsx'
import { Header } from './Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {/* <MainSection/>
    <HistorySection input1="School" input2="Field of study" input3="Description"/>
    <HistorySection input1="Employer" input2="Field of work" input3="Description"/> */}
    <AppContainer/>
  </React.StrictMode>,
)
