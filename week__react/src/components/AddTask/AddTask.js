import React , {Component} from 'react';
class AddTask extends Component{
    state = {
        title:'',
        status:false
    }
    handleChangeTask = (e)=>{
        const title = e.target.value;
        this.setState({title})
        
    }
    handleAdd = () =>{
        this.props.onAdd(this.state)
        this.setState({title:''})
        
    }
    render(){
        return(
            <div className="add-task">
                <label>Task</label>
                <input value={this.state.title} onChange={this.handleChangeTask}/>
                <button onClick={this.handleAdd}>Add</button>
            </div>

        )
    }
}
export default AddTask;