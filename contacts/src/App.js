import React, {Component} from 'react';

class ContactList extends React.Component {
    render() {
        const contacts = [
            {name: 'Aleksandr'},
            {name: 'Victor'},
            {name: 'Maksim'}
        ];
        return <ol>
            {contacts.map(fr => <li key={fr.name}>{fr.name}</li>)}
        </ol>;
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <ContactList/>
            </div>
        );
    }
}

export default App;
