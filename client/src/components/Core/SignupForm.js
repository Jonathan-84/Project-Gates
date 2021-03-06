import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';

import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const Signup = () => {

    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    // uses mutation
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            // use ADD_USER mutation
            const { data } = await addUser({
                variables:  userFormData 
            });

            

            if (error) {
                throw new Error('something went wrong!');
              }

              const token = data.addUser.token;
             // alert(token);
              Auth.login(token);
            } catch (err) {
              console.error(err);
              setShowAlert(true);
            }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });

    };

  
    return (
        <>
        {/* This is needed for the validation functionality above */}
        <div className='d-flex mx-auto w-50 border border-danger '>
            <div>
                <div className='p-2'>
                <p className="font-weight-bold text-justify">Alert: <span className="font-weight-normal">Password Resets and Password Recovery are not 
                available. Depending on application adoption, it will be included in future development. So please take 
                great care to save your Password.</span> </p>
                </div>
            </div>
        </div>
        <br></br>
        <div className='d-flex mx-auto w-50 '>
        <Form className='w-50' noValidate validated={validated} onSubmit={handleFormSubmit}>
            {/* show alert if server response is bad */}
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your signup!
            </Alert>

            <Form.Group>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Your username'
                    name='username'
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                />
                <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Your email address'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                />
                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Your password'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
            </Form.Group>
            <Button
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type='submit'
            variant='warning'>
                Submit
            </Button>
         
            </Form>
            </div>

            <div className='d-flex mx-auto w-50 '>
            <p className="center">Already have an account with us?<br /><Link to="/login" className="add-padding link-text bold-text">Login to your account</Link></p>
            </div>
            <br></br>
<br>
      </br><br></br>
<br>
      </br>
    </>
);
};
export default Signup;