
import React,{Component} from "react";
import TodoLists from "./TodoLists";


class Todo extends Component{
    constructor(props){
        super(props);

        this.state={
            lists:[
                {
                text: 'power on the devices',
                key:Date.now()
                },
                {
                    text: 'dinner party',
                    key:Date.now()
                    },
                    {
                        text: 'power on the devices',
                        key:Date.now()
                        }
            ]
        };
        this.addList=this.addList.bind(this);
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

                        
                        <button type="submit">Add to the list</button>
                    </form>
                </div>
                <TodoLists displays={this.state.lists}/>
            </div>
        );
    }
}
    export default Todo;