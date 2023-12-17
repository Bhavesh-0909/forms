import './App.css';
import React, { useState } from 'react';


function App() {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    Comments:"",
    isVisible:true,
    favCar:"",
    mode:""    
  })

  function changehandler(event){
    
    const {type ,value , checked, name} = event.target;
    
    setFormData((prevs)=> {
      return{
        ...prevs,
        [name] : type === "checkbox"? checked : value
      }
    })

  }

  console.log(formData)
  return (
    <div className="App">
      <form>

        <input 
        type="text"
        placeholder="first Name"
        name="firstName"
        value={formData.firstName}
        onChange={changehandler}
        />

        <input 
        type="text"
        placeholder="last Name"
        name="lastName"
        value={formData.lastName}
        onChange={changehandler}
        />
        <br/>
        <br/>
        
        <textarea
        placeholder="comments"
        name="Comments"
        value={formData.Comments}
        onChange={changehandler}
        />

        <br/>
        <br/>

        <input
        type="checkbox"
        name="isVisible"
        onChange={changehandler}
        checked={formData.isVisible}
        id='isVisible'
        />
        <label htmlFor='isVisible'>Is isVisible</label>
        
        <br/>
        <br/>

        <label>
          Mode:
          <input
          type="radio"
          name="mode"
          onChange={changehandler}
          checked={formData.mode === "online"}
          value="online"
          id='online'
          />
          <label htmlFor='online'>
            online
          </label>
          <input
          type="radio"
          name="mode"
          onChange={changehandler}
          checked={formData.mode === "offline"}
          value="offline"
          id='offline'
          />
          <label htmlFor='offline'>
            offline
          </label>
        </label>

        <br/>
        <br/>
        <label>
          Fav Car : 
        </label>

        <select 
        name="favCar"
        value={formData.favCar}
        onChange={changehandler}
        >
          <option>scorpio</option>
          <option>fortuner</option>
          <option>range rover</option>
          <option>bmw</option>
          <option>audi</option>
        </select>

                

        
      </form>
    </div>
  );
}

export default App;
