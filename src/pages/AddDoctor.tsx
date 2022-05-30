import React from 'react'
import Form, { Field } from '../components/formwrapper/form';

const AddDoctor = () => {

  const fields: Field[] = [
      
    {
      label: 'Name',
      name: 'doctor',
      type: 'text',
      options: {
        required: 'Doctor name is required',
      },
    },
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      options: {
        required: 'Email is required',
      },
    },
    {
      label: 'Password',
      name: 'password',
      type: 'text',
      options: {
        required: 'Password is required',
      },
    },
  ];

  const onSubmit = () => {
      console.log('submit')
  }
  return <div>
          <Form fields={fields} title='Add a new doctor by filling the form below' buttonText='Submit' onSubmit={onSubmit}/>
      </div>;
}

export default AddDoctor