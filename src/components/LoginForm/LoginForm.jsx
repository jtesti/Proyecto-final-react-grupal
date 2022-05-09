import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/API";
import { useNavigate } from "react-router";
import { JwtContext } from "../../shared/context/JwtContext";
import { AuthContext } from "../../shared/context/auth";
import "../LoginForm/LoginForm.scss";

const LoginForm = () => {
  const { loginUser, error, message, loading } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const openUser = async (data) => {
    console.log(data);
    try {
      const result = await loginUser(data.email, data.password);
      if (result === undefined) {
        return;
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("---> User Not Found Error !", error);
    }
  };

  const { setJwt } = useContext(JwtContext);

  const onSubmit = (data) => {
    openUser(data);
    API.post("users/login", data).then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      /*  localStorage.setItem('email', a) */
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setJwt(response.data.token);
      navigate("/home");
    });
  };

  return (
    <form className="content-form-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="content-login">
            <label className="label-email">Email</label>
            <input
              className="input-email"
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
            <label className="label-password">Password</label>
            <input
              className="input-password"
              type="password"
              name="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,12}$/,
              })}
            />
          <input type="submit" className="btn-login" value={loading ? "validando..." : "Login"}/>
          {error && <p>{message}</p>}
        </div>
    </form>
  );
};

export default LoginForm;
