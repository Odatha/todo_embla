import React, {Component} from "react";

class TodoLists extends Component{
    
    

    render(){
        return <ul>
            {this.props.displays.map((item,i) => {
                return <li key={item.key}>{item.text}
                <button onClick={this.props.deleteList.bind(null, item)} >
                Delete</button></li>

            }                                                                                                                                                                              )}
        </ul>;
        }
        
    }


export default TodoLists;
