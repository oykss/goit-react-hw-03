import { useEffect, useState } from 'react';
import css from './App.module.css';
import startContact from '../../assets/data.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? startContact
  );
  const [search, setSearch] = useState('');

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
  );

  const contactAdd = (values, actions) => {
    setContacts(prev => [{ id: crypto.randomUUID(), ...values }, ...prev]);
    actions.resetForm();
  };

  const contactDelete = contactId =>
    setContacts(prev => prev.filter(({ id }) => id !== contactId));

  return (
    <div className={css.container}>
      <h1 className={css.title}>PhoneBook</h1>
      <ContactForm handleSubmit={contactAdd} />
      <SearchBox value={search} handleSearch={setSearch} />
      <ContactList contacts={visibleContacts} handleDelete={contactDelete} />
    </div>
  );
}
