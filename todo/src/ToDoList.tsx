import { useForm } from 'react-hook-form';

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState);
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register('Email', { required: true })} placeholder="Email" />
        <input
          {...register('First Name', { required: true })}
          placeholder="First Name"
        />
        <input
          {...register('Last Name', { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register('Username', { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register('Password', { required: 'Password is required' })}
          placeholder="Password"
        />
        <input
          {...register('Password Confirm', { required: true })}
          placeholder="Password Confirm"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
