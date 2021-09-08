import './App.css';
import React from "react";
import {useState} from "react";

function App() {
    
    const [ todo_items, set_todo_items ] = useState([]);
    const [ done_items, set_done_items ] = useState([]);

    const [ todo_input_text, set_todo_input_text ] = useState("");

    const todo_submit_handler = e =>
    {
        e.preventDefault ();

        console.log ( `Submit: ${todo_input_text}` );

        if ( todo_input_text.length < 1 )
            return;

        let new_item = todo_input_text;
        set_todo_items  ( prev_items => [ ...prev_items, new_item ] );

        set_todo_input_text ( "" );
    };

    return (
        <div className="App">

            <ListDisplay 
                list_name="ToDo" 
                list_items={todo_items} 
                button_text="Mark as Done"
            />

            <ListDisplay 
                list_name="Done" 
                list_items={done_items} 
                button_text="Delete"
            />

            <TodoItemForm 
                todo_text={todo_input_text}
                change_cb={e => set_todo_input_text ( e.target.value )}
                submit_cb={todo_submit_handler}
            />

        </div>
    );
}

const ListDisplay = ({ list_name, list_items, button_text }) =>
{
    const render_items = () =>
    {
        if ( list_items.length === 0 )
            return (<p>No items.</p>);

        let list_html = list_items.map ( (item, idx) => (
            <li key={idx.toString()}>
                {item}
                <input type="button" 
                    value={button_text}
                />
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
