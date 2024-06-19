import { Input, Text, Duration } from './Inputs'
import './App.css'

export function HistorySection({input1, input2, input3}){

    return(
      <div className='inputSection'>
        <Input label={input1}></Input>
        <Input label={input2}></Input>
        <Text placeholder={input3}></Text>
        <Duration/>
        <div className='sectionControls'>
          <button>Edit</button>
          <button>Submit</button>
        </div>
      </div>
    )
  }