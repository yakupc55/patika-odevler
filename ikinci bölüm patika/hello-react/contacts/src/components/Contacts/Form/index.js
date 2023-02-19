import { useState, useEffect } from 'react'

function Form({ addContact, contacts }) {
    const initialFormValus = { fullname: "", phone_number: "" }

    const [form, setForm] = useState(initialFormValus)
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        return () => {
            setForm(initialFormValus)
        }
    }, [contacts])

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }
        addContact([...contacts, form]);
        console.log(form);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input name="fullname" placeholder='FullName' value={form.fullname} onChange={onChangeInput} />
                </div>

                <div>
                    <input name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />
                </div>

                <div className='btn'>
                    <button >Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form