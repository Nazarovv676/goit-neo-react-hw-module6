import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css["contact-container"]}>
      <div className={css["name-number-container"]}>
        <div className={css["icon-name-container"]}>
          <FaUserAlt size={18} />
          <p>{contact.name}</p>
        </div>
        <div className={css["icon-name-container"]}>
          <FaPhoneAlt className={css.phone} size={14} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
}
