import './App.css';
import React from "react";

function App() {

    return (
        <div className="App">
            <TodoItemForm />
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

class TodoItemForm extends React.Component
{
    constructor (props)
    {
        super (props);

        this.state = { 
            value : "" 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange ( e )
    {
        this.setState ({ value : e.target.value });
    }

    handleSubmit ( e )
    {
        e.preventDefault ();
        alert ( `Submit: ${this.state.value}` );
    };

    render ()
    {
        return (
            <div>
                <h1>Add ToDo Item:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add ToDo Item:
                        <input type="text" name="todo-item"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        );
    }
}

export default App;
