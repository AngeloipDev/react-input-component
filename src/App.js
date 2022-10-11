import { Input } from "./components/Input";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function App() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleVisible = () => {
    setVisible(!visible);
  };
  const handleClick = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Los datos son", form);
  };

  return (
    <div className="container">
      <form className="formulario" onSubmit={handleSubmit}>
        <Input type="email" text="Email" name="email" onChange={handleClick} />
        <Input
          type={visible ? "text" : "password"}
          text="Password"
          name="password"
          icon={visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          onClick={handleVisible}
          onChange={handleClick}
        />

        <button type="submit" className="btnSubmitForm">
          Iniciar Sesión
        </button>

        <button type="button" className="btnForm buttonForgotPass">
          ¿Olvidaste tu contraseña?
        </button>
        <p className="orP">
          <span className="orSpan">O</span>
        </p>
        <button type="button" className="btnForm buttonGoogle">
          <FcGoogle size={20} className="iconGoogle" />
          Acceder con Google
        </button>
        <br />
        <div className="link_register">
          <span>¿Aún no tienes una cuenta?</span>
          <button type="button" className="btnForm buttonIsRegister">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
