import { useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
        ),
        url("https://i.postimg.cc/VkgT9yVw/pexels-spencer-selover-428340.jpg"),
        center;
            
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color:white;
    ${mobile({width:"75%"})}
    ${tablet({width:"75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 200;
`;

const Form = styled.form`
    display: flex;  
    flex-wrap:wrap;
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border:none;
    border-bottom: 1px solid gray;
`;

const Aggrement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor: pointer;
    &:hover{
        background-Color: white;
        border:  teal solid;
        color:teal;
    }
`;

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};


const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  return (
        <div>
            <Container>
            <Wrapper>
                <Title>I Do Not Have A Account</Title>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        placeholder='Display Name'
                        required/>
                    <Input 
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Email'
                        required/>
                    <Input 
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Password'
                        required/>
                    <Input 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        placeholder='Confirm Password'
                        required/>
                    <Aggrement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>.
                    </Aggrement>
                    <Button type="submit">Create</Button>
                </Form>
            </Wrapper>
        </Container>
        </div>

        );
  }


export default Register;