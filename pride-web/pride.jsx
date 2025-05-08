import {createRoot} from react-dom/client

import { useState } from 'react';
import Calendar from 'react-calendar';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"))

function Header(){
    <main> 
        <p> We are a student and employe run collective which is focused on making the university a safe space for queer people

        </p>
        <p>We organise weekly events where everyone is welcome to join and meet new people</p>

    </main>

}
function Pictures(){
    return(
        <main> 

        </main>
    )
}
function footer(){

}

function Page(){
    return(
    <>
    <Header/> 
    <footer> </footer>
    <App></App>
    </>
)
}
root.render(Page)
