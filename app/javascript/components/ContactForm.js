import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName : yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  url: yup.string().required("Url is a required field"),
});

export const ContactForm = ({ isBusy, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input name="firstName" ref={register} />
      <p>{errors.firstName?.message}</p>

      <label htmlFor="lastName">Last Name</label>
      <input name="lastName" ref={register} />
      <p>{errors.lastName?.message}</p>

      <label htmlFor="url">Url</label>
      <input name="url" ref={register} />
      <p>{errors.url?.message}</p>

      <input type="submit" disabled={isBusy} />
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isBusy: PropTypes.bool
}

export default ContactForm;
