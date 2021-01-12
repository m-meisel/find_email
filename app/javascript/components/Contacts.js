import React, { useState } from "react";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { findContact } from "../services/contactService";

export const Contacts = ({ path, authToken, initialContacts }) => {
  const [isBusy, setBusy] = useState(false);
  const [contacts, setContacts] = useState(initialContacts);

  const onSubmit = (data) => {
    setBusy(true);
    findContact({ ...data, authToken, path }).then((result) => {
      setContacts([...contacts, result])
      setBusy(false);
    }).catch(error => {
      console.log(error);
      setBusy(false);
    });
  };

  return (
    <div>
      <ContactForm onSubmit={onSubmit} isBusy={isBusy} />
      <ContactTable contacts={contacts} />
    </div>
  );
};

Contacts.propTypes = {
  initialContacts: PropTypes.array,
  path: PropTypes.string.isRequired,
  authToken: PropTypes.string.isRequired,
};

export default Contacts;
