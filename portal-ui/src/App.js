import React, { Component } from 'react';
import './App.css';

class App extends Component {

  async componentDidMount() {
    // const promises = [1,2,3,4,5,6].map(item => {
    //   return fetch(`http://api.thewalters.org/v1/collections/2/objects?page=${item}&pageSize=100&apikey=DUpHWeGMjW4pDlIs7DmTeHMj4Wt0LlqEd7BMJiXviUx3HsLDrZ7kZRQv86C0lF0y`)
    //     .then(response => {
    //       return response.json();
    //     })
    // })
    
    // Promise.all(promises).then(bodies => {
    //   const objects = bodies.reduce((acc, body) => {
    //     acc = acc.concat(body.Items);
    //     return acc;
    //   }, []);

    //   console.log(objects.sort((a,b) => a.DateEndYear - b.DateEndYear))

    //   const creators = objects.reduce((acc, obj) => {
    //     if (!acc[obj.Creator]) {
    //       acc[obj.Creator] = 1;
    //     } else {
    //       acc[obj.Creator]++;
    //     }
    //     return acc
    //   }, {})
    //   console.log(creators)

    //   const classifications = objects.reduce((acc, obj) => {
    //     if (!acc[obj.Classification]) {
    //       acc[obj.Classification] = 1;
    //     } else {
    //       acc[obj.Classification]++;
    //     }
    //     return acc
    //   }, {})
    //   console.log(classifications)
    // })     
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
