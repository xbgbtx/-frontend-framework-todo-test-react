import logo from './logo.svg';
import './App.css';

let todo = [];
let done = [];

function App() {
  return (
    <div className="App">

        <h1>Todo:</h1>
        {formatList ( todo )}

        <h1>Done:</h1>
        {formatList ( done )}

        <h1>Add Item:</h1>
    </div>
  );
}

function formatList ( l ) {
    if ( l.length == 0 )
        return (<p>No items.</p>);
    return (<p>Formatted list</p>);
}

export default App;
