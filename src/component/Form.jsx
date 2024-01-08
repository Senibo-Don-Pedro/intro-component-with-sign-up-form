import * as yup from 'yup'

import { useState } from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  // defining yup schema to validate our form

  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3),
    // email can not be an empty string so we will use the required function
    email: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    password: yup.string().min(8).required(),
    age: yup.string(),
    mobile: yup.string(),
  })

  // Function which will validate the input data whenever submit button is clicked.

  async function validateForm(e) {
    e.preventDefault()
    // creating a form data object

    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }

    // validating this dataObject concerning Yup userSchema

    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Success')
    } else {
      alert('Error')
    }
  }

  return (
    <form
      onSubmit={validateForm}
      className=' bg-white p-6 py-11 flex flex-col gap-3 rounded-xl box mb-14 sm:mb-0 '
    >
      <input
        type='text'
        className='border border-neutralGrayishBlue text-neutralDarkBlue p-4 rounded-lg placeholder:font-bold'
        placeholder='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type='text'
        className='border  p-4 rounded-lg border-neutralGrayishBlue placeholder:font-bold'
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type='email'
        className='border p-4 rounded-lg border-neutralGrayishBlue placeholder:font-bold'
        placeholder='Email Address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        className='border p-4 rounded-lg border-neutralGrayishBlue placeholder:font-bold'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='p-4 bg-primaryGreen rounded-lg text-white font-bold buttonshadow'>
        CLAIM YOUR FREE TRIAL
      </button>
      <p className='text-xs text-neutralGrayishBlue text-center'>
        By clicking the button, you are agreeing to our{' '}
        <span className='font-bold text-primaryRed'>Terms and Services</span>
      </p>
    </form>
  )
}

export default Form
