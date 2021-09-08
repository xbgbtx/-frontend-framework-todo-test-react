import './App.css';
import React from "react";

function App() {
    
    let todo_items = [];
    let done_items = [ "foo", "bar", "baz" ];

    return (
        <div className="App">
        <ListDisplay list_name="ToDo" list_items={todo_items} />
        <ListDisplay list_name="Done" list_items={done_items} />
            <TodoItemForm />
        </div>
    );
}

const ListDisplay = ({ list_name, list_items }) =>
{
    const render_items = () =>
    {
        if ( list_items.length === 0 )
            return (<p>No items.</p>);

        let list_html = list_items.map ( (item, idx) => (
            <li key={(idx+1).toString()}>
                {item}
            </li>
        ));

        return (
            <ol>
                {list_html}
            </ol>
        );
    }

    return (
        <div>
            <h1>{list_name}:</h1>
            {render_items ()}
        </div>
    );

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
