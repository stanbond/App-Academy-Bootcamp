import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        // debugger
        return (
            
            <li>{this.props.todo.title}</li>
        )
    }
}