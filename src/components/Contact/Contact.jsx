import React, { useContext, useState } from "react";
import { AppContext } from "../../GlobalContext/AppContext";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";

const Contact = () => {
  const { state } = useContext(AppContext);
  const darkTheme = state.darkTheme;
  const defaultLanguage = state.language;

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [inputValidate, setInputValidate] = useState({
    name: false,
    lastName: false,
    email: false,
    message: false,
  });

  const [emailFormat, setEmailFormat] = useState(false);

  let [countSubmit, setCountSubmit] = useState(0);

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setInputValidate({ ...inputValidate, [e.target.name]: false });
    if (e.target.name === "email" && countSubmit > 0) {
      validateEmail(input.email);
    }
  };

  const validate = (input) => {
    setInputValidate((prevInputValidate) => ({
      ...prevInputValidate,
      name: input.name === "" ? true : prevInputValidate.name,
      lastName: input.lastName === "" ? true : prevInputValidate.lastName,
      email: input.email === "" ? true : prevInputValidate.email,
      message: input.message === "" ? true : prevInputValidate.message,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const response = !regex.test(email);
    setEmailFormat(response);
    return response;
  };

  const handlerSubmit = (e, input) => {
    e.preventDefault();
    setCountSubmit(countSubmit + 1);
    const response = validateEmail(input.email);
    if (
      (input.name === "") |
      (input.lastName === "") |
      (input.email === "") |
      (input.message === "")
    ) {
      validate(input);
      toast.error("E-mail could not be sent!");
    } else if (!response) {
      //Aquí va la función que mandará el correo
      toast.success("E-mail sent!");
      setCountSubmit(0);
      setInput({
        name: "",
        lastName: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("E-mail sent!");
    }
  };

  return (
    <Container darktheme={darkTheme}>
      {defaultLanguage === "EN" ? (
        <div>
          <h2 id="contact">Contact</h2>
          <p>
            If you wish to contact me, please fill out the following form and I
            will be happy to respond to your questions or comments.Thank you!
          </p>
          <FormContainer>
            <form onSubmit={(e) => handlerSubmit(e, input)}>
              <Item>
                <label>Name</label>
                <input
                  onChange={(e) => handlerChange(e)}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={input.name}
                />
                {inputValidate.name && (
                  <Alert>Please complete this field.</Alert>
                )}
              </Item>
              <Item>
                <label>Last name</label>
                <input
                  onChange={(e) => handlerChange(e)}
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={input.lastName}
                />
                {inputValidate.lastName && (
                  <Alert>Please complete this field.</Alert>
                )}
              </Item>
              <Item>
                <label>E-mail</label>
                <input
                  onChange={(e) => handlerChange(e)}
                  type="eemail"
                  name="email"
                  placeholder="E-mail"
                  value={input.email}
                  autoComplete="nope"
                />
                {inputValidate.email && (
                  <Alert>Please complete this field.</Alert>
                )}
                {emailFormat && <Alert>Invalid e-mail format</Alert>}
              </Item>
              <Item>
                <label>Message</label>
                <textarea
                  onChange={(e) => handlerChange(e)}
                  name="message"
                  cols="30"
                  rows="10"
                  value={input.message}
                  placeholder="Message..."
                ></textarea>
                {inputValidate.message && (
                  <Alert>Please complete this field.</Alert>
                )}
              </Item>
              <input type="submit" value={"Submit"} />
            </form>
          </FormContainer>
        </div>
      ) : (
        <div>
          <h2 id="contact">Contact</h2>
          <form action="">
            <div>
              <label></label>
              <input type="text" />
            </div>
            <div>
              <label></label>
              <input type="text" />
            </div>
            <div>
              <label></label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      )}
      <Toaster />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  text-align: justify;
  h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
  form {
    background: ${({ darktheme }) => (darktheme ? "#212020" : "#9f9f9f")};
    padding: 20px;
    border-radius: 10px;
    width: 60%;
  }
  input {
    width: 90%;
    height: 30px;
    margin-left: 5%;
    font-size: 18px;
  }

  textarea {
    width: 90%;
    margin-left: 5%;
    resize: none;
    font-size: 18px;
  }

  @media screen and (max-width: 950px) {
    form {
      width: 100%;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 15px;
  label {
    margin-bottom: 5px;
  }
  input {
    height: 30px;
    &:focus {
      outline: none;
    }
  }
  textarea {
    &:focus {
      outline: none;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Alert = styled.span`
  color: red;
  margin-left: 5px;
  font-size: 16px;
`;
