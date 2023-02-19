import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import "./styles.css"
function Contacts() {

    const [contacts, setContacts] = useState([{ fullname: "ahmet", phone_number: "768768" },
     { fullname: "raif", phone_number: "789879" },
     { fullname: "ali", phone_number: "7878754" }]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts