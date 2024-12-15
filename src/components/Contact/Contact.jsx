import css from './Contact.module.css';

export default function Contact({
  contact: { id, name, number },
  handleDelete,
}) {
  return (
    <>
      <div>
        <p className={css.qq}>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </>
  );
}
