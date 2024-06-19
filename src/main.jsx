import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header, sections, InputSection, Duration} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <InputSection input1={sections['name']} input2={sections['address']} input3={sections['intro']}/>
    <InputSection input1={sections['school']} input2={sections['major']} input3={sections['schoolDescr']}/>
    <InputSection input1={sections['employer']} input2={sections['activity']} input3={sections['workDescr']}/>
    <Duration/>
  </React.StrictMode>,
)
