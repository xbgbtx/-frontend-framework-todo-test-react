import './App.css';
import React from "react";
import {useState} from "react";

function App() {
    
    let todo_items = [];
    let done_items = [ "foo", "bar", "baz" ];

    const [ todo_input_text, set_todo_input_text ] = useState("");

    const todo_submit_handler = e =>
    {
        e.preventDefault ();

        console.log ( `Submit: ${todo_input_text}` );
    };

    const todo_change_handler = e =>
    {
        todo_input_text += e.target.value;
        console.log ( e.target.value );
    };

    return (
        <div className="App">
        <ListDisplay list_name="ToDo" list_items={todo_items} />
        <ListDisplay list_name="Done" list_items={done_items} />
        <TodoItemForm 
            todo_text={todo_input_text}
            change_cb={e => set_todo_input_text ( e.target.value )}
            submit_cb={todo_submit_handler}
        />
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

const TodoItemForm = ({ todo_text, change_cb, submit_cb }) =>
{
    return (
        <div>
            <h1>Add ToDo Item:</h1>
            <form onSubmit={submit_cb}>
                <label>
                    Add ToDo Item:
                    <input type="text" name="todo-item"
                        value={todo_text}
                        onChange={change_cb}
                    />
                </label>
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
}

export default App;
