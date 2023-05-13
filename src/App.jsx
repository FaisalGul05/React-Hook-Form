import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    defaultValues: {
      firstname: 'Faisal',
      lastname: 'Qureshi',
      age: 10
    }
  })
  console.log({ errors, isValid })
  const firstname = watch('firstname')
  // console.log(register)
  // console.log({ ...register('firstname') })
  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <input {...register('firstname', { required: 'First name is required' })} placeholder='First name'
          aria-invalid={errors.firstname ? 'true' : 'false'} />
          {errors.firstname?.type === 'required' && <p role="alert">First name is required</p>}
        <p>{errors.firstname?.message}</p>
        <input {...register('lastname', { required: "Lastname is required", minLength: { value: 4, message: 'Min Length Should be 4' } })} placeholder='Last name' />
        <p>{errors.lastname?.message}</p>
        <input type="number" {...register("age", { min: { value: 18, message: 'Should 18 plus' }, max: 99 })} />
        <p>{errors.age?.message}</p>
        <input type={'password'} {...register("password", { pattern: { value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i, message: 'Password : Minimum Length of eight with atleast one uppercase and special character' }, required: 'Password Required' })} />
        <p>{errors.password?.message}</p>
        <input type="submit" />
      </form>
      <h1>{firstname}</h1>
    </div>
  )
}

export default App
