import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { contactsOperations } from '../../redux/Contacts';
import { contactsSelectors } from '../../redux/Contacts';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`🤔 ${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`🤔 ${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("😱 Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('💩 Enter the correct number phone!');
    } else {
      dispatch(contactsOperations.addContact(contact));
    }

    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name Sername"
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="xxx-xx-xx"
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
