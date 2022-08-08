import styled from "styled-components";
import { mobile,tablet } from "../responsive";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword} from '../utils/firebase/firebase.utils';


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
    width: 35%;
    padding: 20px;
    background-color:white;
    ${mobile({width: "75%"})}
    ${tablet({width: "68%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 200;
`;

const Form = styled.form`
    display: flex;  
    flex-direction:column;
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0;
    padding: 10px;
    border:none;
    border-bottom: 1px solid gray;
    padding: 10px 10px 10px 5px;
    
`;


const Button = styled.button`
    width: 100%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor: pointer;
    margin-bottom:5px;
    &:hover{
        background-Color: white;
        border:  teal solid;
        color:teal;
    }
`;



const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration:underline;
    cursor: pointer;
`;

const defaultFormFields = {
  email: "",
  password: "",
};


const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
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
                <Title>SIGN IN</Title>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={email}
                        placeholder='Email'
                        required/>
                    <Input 
                        name='password'
                        type='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Password'
                        required/>
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <Button type='submit' style={{marginRight:'10px '}}>LOGIN</Button>
                    <Button onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
                    </div>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
            <Outlet/>
        </Container>
        </div>
    );
};



export default Login;