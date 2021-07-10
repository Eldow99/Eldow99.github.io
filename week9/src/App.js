import React  from 'react';
import List from './components/list/List'
import './App.css';
import AddTask from './components/AddTask/AddTask';

class App extends React.Component{

    state = {
    data:[{
      title:'Coding',
      status: false
    },
    {
      title:'Start to do react Project',
      status: true
    },
    {
      title:'Read about redux',
      status: true
    },
    {
      title:'Start todo',
      status: false
    }
  ]
    }
    handleAdd =(task)=>{
      const newData = [...this.state.data];
      newData.push(task)
      this.setState({data:newData})
      
    }
    handleDel = (index)=>{
      console.log(index)
      const newData = [...this.state.data];
      newData.splice(index,1);
      this.setState({data : newData})
    }
    handleChangeStatus = (index) =>{
      const newData = [...this.state.data]
      newData[index].status=!newData[index].status;
      this.setState({data:newData})
    }
    render(){

   
  return (
    <div className="App">
      <AddTask onAdd= {this.handleAdd}/>
      <List
        data={this.state.data} 
        onChange={this.handleChangeStatus} 
        onDel={this.handleDel}/>
    </div>
  );
}
}
export default App;
