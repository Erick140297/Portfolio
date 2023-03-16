import React, { useContext, useState } from "react";
import { AppContext } from "../../GlobalContext/AppContext";
import emailjs from "emailjs-com";
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
      defaultLanguage === "EN"
        ? toast.error("E-mail could not be sent!")
        : toast.error("El correo no se pudo enviar");
    } else if (!response) {
      emailjs
        .send("service_bbir3ym", "template_xuepvsc", input, "tHlLmksyS974BXxhT")
        .then(
          () => {
            defaultLanguage === "EN"
              ? toast.success("E-mail sent!")
              : toast.success("Correo enviado");
          },
          () => {
            defaultLanguage === "EN"
              ? toast.error("E-mail could not be sent!")
              : toast.error("El correo no se pudo enviar");
          }
        );
      setCountSubmit(0);
      setInput({
        name: "",
        lastName: "",
        email: "",
        message: "",
      });
    } else {
      defaultLanguage === "EN"
        ? toast.error("E-mail could not be sent!")
        : toast.error("El correo no se pudo enviar");
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
                  autoComplete="nope"
                  placeholder="Name"
                  value={input.name}
                />
                {inputValidate.name && (
                  <Alert darktheme={darkTheme}>
                    Please complete this field.
                  </Alert>
                )}
              </Item>
              <Item>
                <label>Last name</label>
                <input
                  onChange={(e) => handlerChange(e)}
                  type="text"
                  name="lastName"
                  autoComplete="nope"
                  placeholder="Last name"
                  value={input.lastName}
                />
                {inputValidate.lastName && (
                  <Alert darktheme={darkTheme}>
                    Please complete this field.
                  </Alert>
                )}
              </Item>
              <Item>
                <label>E-mail</label>
                <input
                  onChange={(e) => handlerChange(e)}
                  type="eemail"
                  name="email"
                  autoComplete="nope"
                  placeholder="E-mail"
                  value={input.email}
                />
                {inputValidate.email && (
                  <Alert darktheme={darkTheme}>
                    Please complete this field.
                  </Alert>
                )}
                {emailFormat && (
                  <Alert darktheme={darkTheme}>Invalid e-mail format</Alert>
                )}
              </Item>
              <Item>
                <label>Message</label>
                <textarea
                  onChange={(e) => handlerChange(e)}
                  name="message"
                  cols="30"
                  rows="10"
                  autoComplete="nope"
                  value={input.message}
                  placeholder="Message..."
                ></textarea>
                {inputValidate.message && (
                  <Alert darktheme={darkTheme}>
                    Please complete this field.
                  </Alert>
                )}
              </Item>
              <Submit type="submit" value={"Submit"} darktheme={darkTheme}/>
            </form>
          </FormContainer>
        </div>
      ) : (
        <div>
          <h2 id="contact">Contacto</h2>
          <p>
            Si deseas contactarme, por favor llena el siguiente formulario y con
            gusto responderé a tus preguntas o comentarios. ¡Gracias!
          </p>
          <FormContainer>
            <form onSubmit={(e) => handlerSubmit(e, input)}>
              <Item>
                <label>Nombre</label>
                <input
                  onChange={(e) => handlerChange(e)}
                  type="text"
                  name="name"
                  autoComplete="nope"
                  placeholder="Nombre"
                  value={input.name}
                />
                {inputValidate.name && (
                  <Alert darktheme={darkTheme}>
                    Por favor llena este campo.
                  </Alert>
                )}
              </Item>
              <Item>
                <label>Apellido</label>
                <input
                  onChange={(e) => handlerChange(e)}
                  type="text"
                  name="lastName"
                  autoComplete="nope"
                  placeholder="Apellido"
                  value={input.lastName}
                />
                {inputValidate.lastName && (
                  <Alert darktheme={darkTheme}>
                    Por favor llena este campo.
                  </Alert>
                )}
              </Item>
              <Item>
                <label>Correo</label>
                <input
                  onChange={(e) => handlerChange(e)}
                  type="eemail"
                  name="email"
                  autoComplete="nope"
                  placeholder="Correo"
                  value={input.email}
                />
                {inputValidate.email && (
                  <Alert darktheme={darkTheme}>
                    Por favor llena este campo.
                  </Alert>
                )}
                {emailFormat && (
                  <Alert darktheme={darkTheme}>Correo no válido</Alert>
                )}
              </Item>
              <Item>
                <label>Mensaje</label>
                <textarea
                  onChange={(e) => handlerChange(e)}
                  name="message"
                  cols="30"
                  rows="10"
                  autoComplete="nope"
                  value={input.message}
                  placeholder="Tu mensaje..."
                ></textarea>
                {inputValidate.message && (
                  <Alert darktheme={darkTheme}>
                    Por favor llena este campo.
                  </Alert>
                )}
              </Item>
              <Submit type="submit" value={"Enviar"} darktheme={darkTheme}/>
            </form>
          </FormContainer>
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
    background: ${({ darktheme }) => (darktheme ? "#212020" : "#00b0ff")};
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
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 15px;
    }
    label {
      font-size: 18px;
    }
    span {
      font-size: 15px;
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
  @media screen and (max-width: 950px) {
    input {
      height: 25px;
      font-size: 15px;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const Alert = styled.span`
  /* color: ${({ darktheme }) => (darktheme ? "#ff0000" : "#000000")}; */
  color: #ff0000; 
  font-size: 16px;
`;

const Submit = styled.input`
  width: 90%;
  height: 30px;
  margin-left: 5%;
  font-size: 18px;
  color: white;
  background: ${({ darktheme }) => (darktheme ? "red" : "#f50057")};
  border: 0;
  border-radius: 5px;
`;
