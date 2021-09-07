import './App.css';
import React from "react";

function App() {

    let todo = new ListDisplay ( "ToDo" );
    let done = new ListDisplay ( "Done" );
    
    return (
        <div className="App">
            {todo.render()}
            {done.render()}
        </div>
    );
}

class ListDisplay extends React.Component
{
    constructor ( name )
    {
        super ();
        this.name = name;
        this.items = [];
    }

    render()
    {
        return (
            <div>
                <h1>List: {this.name}</h1>
                {this.render_items ()}
            </div>
        );
    }

    render_items ()
    {
        if ( this.items.length === 0 )
            return (<p>No items.</p>);
        return (<p>Formatted list</p>);
    }
}

function formatList ( l ) {
}

export default App;
