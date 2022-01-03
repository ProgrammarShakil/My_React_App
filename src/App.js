import React from 'react';
import Card from './Components/Card';
import  './index.css';
import Data from './data.json';

function App() {

    let items = [];

    // for (let x = 0; x < Data.length; x++) {
    //     items.push(<Card Title={Data[x].title} Desc={Data[x].desc} />)
    // }

    items = Data.map((item, index) => <Card key={index} Title={item.title} Desc={item.desc} /> );

   return <div>
            {items}
            <Card />
            <Card />
         </div>
}

export default App;