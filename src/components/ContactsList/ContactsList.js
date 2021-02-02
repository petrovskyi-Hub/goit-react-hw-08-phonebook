import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import s from './ContactsList.module.css';
import { contactsSelectors } from '../../redux/Contacts';
import { contactsOperations } from '../../redux/Contacts';

export default function ContactList({ filter }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [contacts, filter]);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.info}>
            {name}: {number}
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
}
