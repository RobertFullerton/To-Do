import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 

class App extends Component {	
     constructor(props) {
       super(props);
       
       this.state={
           newItem:"",
         list:[]
       }
     }
         
     updateInput(key, value){
         // updating state 
         this.setState({
           [key]: value
         });
      }
      addItem() {
        // creates a unique id
        const newItem={
         id: 1 + Math.random(),
         value:this.state.newItem.slice()
        };
      
      // makes a copy of current items
       const list = [...this.state.list];
      
       list.push(newItem);
      
      this.setState({
        list,
        newItem:""
       });
     }
     deleteItem(id){
       const list = [...this.state.list];
       
       // udates list after delete
       const updatedList = list.filter(item => item.id !== id);
       
       this.setState({list: updatedList});
     }
  render() {
    return (
         <div className="App">
            <div>
              Add an item....
              
               <br />
                <input 
                    type="text"
                  placeholder="New item to do..."
                    value={this.state.newItem}
                  onChange={() => this.updateInput("newItem", e.target.value)}
                />
                
                <button  
                   onClick={() => this.addItem()}
                >
                Add
                
                </button>
                <br />
                <ul>
                {this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                       {item.value}
                         <button 
                          onClick={() => this.deleteItem(item.id)}
                        >
                        X
                       </button>
                      </li>
                    )
                })}
                </ul>
              </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
