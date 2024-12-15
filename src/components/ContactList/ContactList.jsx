import Contact from '../Contact/Contact';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
