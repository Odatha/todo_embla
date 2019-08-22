
import React,{Component} from "react";
import TodoLists from "./TodoLists";
import DatePicker from 'react-date-picker';


class Todo extends Component{
    constructor(props){
        super(props);

        this.state={
            lists:[
                {
                text: 'power on the devices',
                key:1
                },
                {
                    text: 'dinner party',
                    key:2
                    },
                    {
                        text: 'power on the devices',
                        key:3
                        }
            ],
            date:new Date()  
        };
        this.addList=this.addList.bind(this);
    }
    onChange = date => this.setState({date});

    deleteList(deleteItem){
        //console.log(deleteItem);
        var filterItems = this.state.lists.filter((newLists) => {
            return newLists !=deleteItem
        });
        this.setState({lists:filterItems});

    }
    addList(e){
        if(this._inputElement.value !==""){
            var newItem={
                text: this._inputElement.value,
                key:Date.now()
            };

            this.setState((prevState)=>{
                return{
                    lists:prevState.lists.concat(newItem)
                };
            });
            this._inputElement.value="";
        }

        console.log(this.state.lists);

        e.preventDefault();
        

    }
    render(){
        return(
            <div className="mainList">
                <div className="header">
                    <form onSubmit={this.addList}>


                        <input ref={(a) => this._inputElement = a}
                        placeholder="what are your todo s??"/>

                        <div>
                            <DatePicker
                            onChange={this.onChange}
                            value={this.state.date}
                            />
                        </div>

                        
                        <button type="submit">Add to the list</button>
                    </form>
                </div>
                <TodoLists 
                deleteList={this.deleteList.bind(this)}
                displays={this.state.lists}/>
            </div>
        );
    }
}
    export default Todo;