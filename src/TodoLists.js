import React, {Component} from "react";

class TodoLists extends Component{
    createTodo(item){
        return <li key={item.key}>{item.text}</li>
    }

    render(){
        var todoDisplays = this.props.displays;
        var itemLists = todoDisplays.map(this.createTodo);

        return(
            <ul className="list">
                {itemLists}
            </ul>
        );
    }
};

export default TodoLists;