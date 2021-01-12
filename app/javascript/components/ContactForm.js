import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  url: yup.string().required("Url is a required field"),
});

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

const FormItem = styled.div`
  margin: 4px;
`;

const TextInput = styled.input`
  height: 24px
`;

const SubmitInput = styled.input`
  background: #153F59;
  outline: none;
  border: none;
  color: white;
  width: 100px;
  height: 30px;
  font-weight: 600;

  &:disabled {
    background: #DCE1D3;
    color: white;
  }
`;

export const ContactForm = ({ isBusy, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <label htmlFor="firstName">First Name</label>
        <TextInput name="firstName" ref={register} />
        <p>{errors.firstName?.message}</p>
      </FormItem>
      <FormItem>
        <label htmlFor="lastName">Last Name</label>
        <TextInput name="lastName" ref={register} />
        <p>{errors.lastName?.message}</p>
      </FormItem>
      <FormItem>
        <label htmlFor="url">Url</label>
        <TextInput name="url" ref={register} />
        <p>{errors.url?.message}</p>
      </FormItem>
      <SubmitInput type="submit" disabled={isBusy} />
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isBusy: PropTypes.bool,
};

export default ContactForm;
