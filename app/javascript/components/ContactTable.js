import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TableHead = styled.thead`
  background-color: #8FBABF;
  color: white;
`;

const Table = styled.table`
  width: 100%;
`;

const StyledTh = styled.th`
  padding: 6px;
`;

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
    <Table>
      <TableHead>
        <tr>
          <StyledTh>First name</StyledTh>
          <StyledTh>Last name</StyledTh>
          <StyledTh>Url</StyledTh>
          <StyledTh>Email</StyledTh>
        </tr>
      </TableHead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.array,
};

export default ContactTable;
