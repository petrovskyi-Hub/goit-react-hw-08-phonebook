import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import { contactsSelectors, contactsOperations } from '../redux/Contacts';
import { authSelectors } from '../redux/auth';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const contacts = useSelector(contactsSelectors.getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(contactsOperations.fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <ContactForm />

      <h2>Contacts</h2>
      {(contacts?.length > 1 || filter !== '') && (
        <Filter value={filter} setFilter={setFilter} />
      )}
      {contacts?.length > 0 && isLoggedIn ? (
        <ContactsList filter={filter} />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </>
  );
}
