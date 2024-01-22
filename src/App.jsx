import React, { useState } from 'react'
import DisplayIdeas from './DisplayIdeas'
import IdeasForm from './IdeasForm';

function App() {
    const [ideas, setIdeas] = useState([
        "Movie about a guy who gets bit by a radioactive mole rat",
        "Romcom about two developers over Zoom",
        "Horror film where AWS goes down for 24 hours"
    ]);

    const addIdeas = (newIdeas) => {
        setIdeas([...ideas, newIdeas])
    }


  return (
    <div>
        <main>
            <h1>Welcome, Super Awesome Movie Monster Think Thank!</h1>
            <DisplayIdeas ideas={ideas} />
            <h1>Submit your ideas down below</h1>
            <IdeasForm addIdeas={addIdeas} />
        </main>
    </div>
  )
}

export default App