import React, {useState} from 'react';

export default function App (){
   const [state, setState]=useState(true)
   console.log(state);
   
    return<div>
        <h1>Работате</h1>
    </div>
}