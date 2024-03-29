// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from "./data.js"
import { useState } from 'react'
import './index.css'








function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

// console.log("puppyList: ", puppyList);



// function handleClick() {
// // when a user clicks on a puppy, more information will be shown
// }


const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log(featuredPup)

return (
  <div className="App">
    {puppies.map((puppy) => (
      <p key={puppy.id} onClick={() => { setFeatPupId(puppy.id) }}>
        
        {puppy.name}
      </p>
    ))}

    {/* {featPupId && <p>{featPupId}</p>} */}

    {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
  </div>
);
    }

export default App
