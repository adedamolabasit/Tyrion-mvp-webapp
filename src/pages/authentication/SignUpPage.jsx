import React,{useState,useEffect} from "react";
import icon1 from "../../assets/Vector.svg";
import icon2 from "../../assets/Vector 2.svg";
import icon3 from "../../assets/Vector 3.svg";
import icon4 from "../../assets/passwordicon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  tel: "",
  password1: "",
  password2: "",
};

const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "required ";
  }
  if (!values.email) {
    errors.email = "required  ";
  }
  if (!values.tel) {
    errors.tel = "required  ";
  }
  if (!values.password1) {
    errors.password1 = "required  ";
  }
  if (!values.password2) {
    errors.password2 = "required  ";
  }
  return errors;
};
console.log(validate)
const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  tel: Yup.string().required("Required"),
  password1: Yup.string().required("Required"),
  password2: Yup.string().required("RRequired"),
});

function SignUpPage(props) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const navigate = useNavigate();

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [comfirmPassword,setComfirmPassword] = useState('')




  return (
    <div className="font-['DM Sans'] w-340 md:w-767 mx-auto h-auto bg-white px-14 md:px-28  rounded-lg">
      <h4 className="md:text-4xl text-2xl text-center pt-8 md:pt-16 font-semibold mt-6 md:mt-11 mb-1.5">
        Create an account
      </h4>
      <p className="md:text-xl mb-8 md:mb-16 text-center text-[#00000058]">
        Fill in the details to create a{" "}
        <span className="text-[#FBC108]">tyrion</span> account
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control mb-5 md:mb-10">
          <label className="font-medium md:text-lg">Username</label>
          <div className=" relative flex ">
            <img
              src={icon1}
              alt=""
              className="w-3 absolute bottom-2.5 md:bottom-6 ml-4"
            />
            <input
              for="username"
              type="text"
              placeholder="Username"
              className="w-72 md:w-558 h-8 md:h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-sm md:text-lg "
              name="username"
              required
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <div className="flex text-center text-rose-300">
              {" "}
              {formik.errors.username}{" "}
            </div>
          ) : null}
        </div>

        <div className="form-control mb-5 md:mb-10">
          <label className="font-medium md:text-lg">Email</label>
          <div className="relative flex">
            <img
              src={icon2}
              alt=""
              className="w-3 absolute bottom-2.5 md:bottom-6 ml-4"
            />
            <input
              for="email"
              type="email"
              placeholder="Input your email"
              className="w-72 md:w-558 h-8 md:h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-sm md:text-lg "
              name="email"
              required
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="flex text-center text-rose-300">
              {" "}
              {formik.errors.email}{" "}
            </div>
          ) : null}
        </div>

        <div className="form-control mb-5 md:mb-10">
          <label className="font-medium md:text-lg">Phone number</label>
          <div className="relative flex ">
            <img
              src={icon3}
              alt=""
              className="w-3 absolute bottom-2.5 md:bottom-6 ml-4"
            />
            <input
              for="tel"
              type="tel"
              placeholder="Phone number"
              className="w-72 md:w-558 h-8 md:h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-sm md:text-lg"
              name="tel"
              required
              onChange={formik.handleChange}
              value={formik.values.tel}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.tel && formik.errors.tel ? (
            <div className="flex text-center text-rose-300">
              {" "}
              {formik.errors.tel}{" "}
            </div>
          ) : null}
        </div>
        <div className="form-control mb-5 md:mb-10">
          <label className="font-medium md:text-lg">Password</label>
          <div className="relative flex ">
            <img
              src={icon4}
              alt=""
              className="w-3 absolute bottom-2.5 md:bottom-6 ml-4"
            />
            <input
              for="password1"
              type="password"
              placeholder="Input your password"
              className="w-72 md:w-558  h-8 md:h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-sm md:text-lg"
              name="password1"
              required
              onChange={formik.handleChange}
              value={formik.values.password1}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.password1 && formik.errors.password1 ? (
            <div className="flex text-center text-rose-300">
              {" "}
              {formik.errors.password1}{" "}
            </div>
          ) : null}
        </div>
        <div className="form-control mb-5 md:mb-10">
          <label className="font-medium md:text-lg">Repeat password</label>
          <div className="relative flex ">
            <img
              src={icon4}
              alt=""
              className="w-3 absolute bottom-2.5 md:bottom-6 ml-4"
            />
            <input
              for="password2"
              type="password"
              placeholder="Input your password"
              className="w-72 md:w-558 h-8 md:h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-sm md:text-lg "
              name="password2"
              required
              onChange={formik.handleChange}
              value={formik.values.password2}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.password2 && formik.errors.password2 ? (
            <div className="flex text-center text-rose-300">
              {" "}
              {formik.errors.password2}{" "}
            </div>
          ) : null}
        </div>

        <button
          className="w-228 md:w-550 h-8 md:h-16 bg-[#FBC108] text-white mb-2.5 md:mb-5 rounded-lg font-medium text-sm md:text-lg hover:bg-[#FFCC00] active:bg-[#fbc10886]"
          type="submit"
        >
          Create an account
        </button>
      </form>
      <h4 className="text-center text-sm  md:text-lg pb-7 md:pb-14">
        Already have an account?{" "}
        <span
          className="text-[#fbc108] cursor-pointer active:bg-[#fbc10886]"
          onClick={() => navigate("/sign-in")}
        >
          Sign in
        </span>
      </h4>
    </div>
  );
}

export default SignUpPage;
