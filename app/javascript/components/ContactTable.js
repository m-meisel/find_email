import React from "react";
import PropTypes from "prop-types";

export const ContactTable = ({ contacts }) => {
  const rows = contacts.map((contact) => {
    return (
      <tr key={contact.id} >
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.url}</td>
        <td>{contact.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Url</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.array,
};

export default ContactTable;
