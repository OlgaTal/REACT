import React from 'react';
import {render} from 'react-dom';

const Context = React.createContext();

function Parent({name}) {
    return (
        <div>
            <h1>Parent</h1>
            <Child name={name}/>
        </div>
    );
}

function Child({name}) {
    return (
        <div>
            <h1>Child</h1>
            <Grandchild name={name}/>
        </div>
    );
}

function Grandchild() {
    return (
        <Context.Consumer>
            {(name) => (
                <div>
                    <h1>Grandchild</h1>
                    <h3>Name: {name}</h3>
                </div>
            )}
        </Context.Consumer>
    );
}

export default class App extends React.Component {
    render() {
        const name = 'Olga';

        return (
            <Context.Provider value={name}>
                <Parent/>
            </Context.Provider>
        );
    }
}

// render(<App />, document.getElementById('root'));