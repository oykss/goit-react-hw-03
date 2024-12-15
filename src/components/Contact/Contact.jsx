import css from './Contact.module.css';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

export default function Contact({
  contact: { id, name, number },
  handleDelete,
}) {
  return (
    <>
      <div className={css.wrap}>
        <p className={css.name}>
          <AiOutlineUser className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <BsTelephone className={css.icon} />
          {number}
        </p>
      </div>

      <button
        type="button"
        className={css.btnDelete}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </>
  );
}
