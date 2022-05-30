import React from 'react';
import Form, { Field } from '../components/formwrapper/form';

const AddEvent = () => {

  const fields: Field[] = [
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      options: {
        required: 'Event title is required',
      },
    },
    {
      label: 'Description',
      name: 'description',
      type: 'text',
      options: {
        required: 'Description is required',
      },
    },
    {
      label: 'Attendees',
      name: 'attendees',
      type: 'text',
      options: {
        required: 'Attendees is required',
      },
    },
  ];

  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <div>
      <Form
        fields={fields}
        title='Add a new event by filling the form below'
        buttonText='Submit'
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AddEvent;
