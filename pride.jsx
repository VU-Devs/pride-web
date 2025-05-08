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
            <p>Here are some pictures from our events!</p>
        </main>
    )
}
function Footer(){
    return (
        <footer>
            <p>Follow us on Instagram and WhatsApp for updates!</p>
        </footer>
    )
}

function Page() {
  return (
    <>
      <Header />
      <Pictures />
      <Footer />
      <App />
    </>
  );
}

root.render(<Page />);
// to do: add calendar
// add pictures
// add events
// add header-> dropdown menu 
// add footer
// link to insta/whatsapp 
