import React, {Component} from 'react';

class ContactList extends React.Component {
    render() {
        const contacts = this.props.contacts;
        return <ol>
            {contacts.map(fr => <li key={fr.name}>{fr.name}</li>)}
        </ol>;
    }
}

class App extends Component {
    render() {
        const contacts = [
            {name: 'Aleksandr'},
            {name: 'Victor'},
            {name: 'Maksim'}
        ];
        return (
            <div className="App">
                <ContactList contacts={contacts}/>
            </div>
        );
    }
}
export default App;
