import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '../Button';
import Input from '../input/input';

export type Field = {

    label: string
    name: string
    type: 'text' | 'textarea'
    options: {
        required: string
        validate?: (input: string) => string
    }

}

interface FormProps {
  title: string;
  fields: Field[];
  buttonText: string;
  onSubmit: (data: any) => void
}



const Form: React.FC<FormProps> = ({ title, fields, buttonText, onSubmit }) => {

const [loading, setLoading] = useState(false)

const {
  handleSubmit,
  formState: { errors },
  control,
} = useForm<any>({ mode: 'onChange', reValidateMode: 'onChange' });

  return (
    <div className='mx-auto p-4 md:w-1/2 '>
      <h3 className='font-normal leading-none text-3xl md:text-5xl mb-4'>
        {title}
      </h3>

      <form action='#' autoComplete='no' onSubmit={handleSubmit(onSubmit)}>
        {fields.map((f) => {
          return (
            <>
              <Controller
                rules={{ ...f.options }}
                name={f.name}
                control={control}
                render={({ field }) => (
                  <Input {...field} label={f.label} loading={loading} />
                )}
              />
              {errors[f.name] && (
                <p className='text-sm text-red-500 my-2'>
                  {errors.url.message}
                </p>
              )}
            </>
          );
        })}
        <Button label='Submit' loading={loading} />
      </form>
    </div>
  );
};

export default Form;
