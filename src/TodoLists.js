import React, {Component} from "react";

class TodoLists extends Component{
    
    

    render(){
        return <ul>
            {this.props.displays.map((item) => {
                return <li key={item.key}>
                <p>{item.text}</p>
                <p>{item.date}</p>
                <button onClick={this.props.deleteList.bind(null, item)} >
                Delete</button></li>

            }                                                                                                                                                                              )}
        </ul>;
        }
        
    }


export default TodoLists;
