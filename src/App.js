import React from 'react';
import Card from './Components/Card';
import  './index.css';
import Data from './data.json';

function App() {
   return <div>
            <Card Title={Data[0].title} Desc={Data[0].desc} />
            <Card />
            <Card />
         </div>
}

export default App;