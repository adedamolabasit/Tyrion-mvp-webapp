import React,{useState,useEffect} from "react";
import icon2 from "../../assets/Vector 2.svg";
import icon4 from "../../assets/passwordicon.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { login } from '../../store/actions/userActions'




function SignInPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email,password))
  }


  const userLogin = useSelector(state => state.userLogin)

  const {error, loading,userInfo} = userLogin

  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  },[navigate,userInfo])



  return (
    <div className="font-['DM Sans'] md:w-767 w-340 mx-auto h-auto bg-white md:px-28 px-14 rounded-lg">
      <form onSubmit={submitHandler}>

      <h4 className="md:text-4xl text-2xl text-center md:pt-16 pt-8 font-semibold mt-6 md:mt-11 mb-1.5">
        Welcome back!
      </h4>
      <p className="md:text-xl text-sm mb-4 md:mb-8 md:mb-16 text-center font-medium">
        Please sign in to your <span className="text-[#FBC108]">tyrion</span>{" "}
        account
      </p>
      <label className="font-medium md:text-lg">Email</label>
      <div className="relative flex mb-6 md:mb-10">
        <img
          src={icon2}
          alt=""
          className="w-3 absolute md:bottom-6 bottom-2.5 ml-4"
        />
        <input
          for="username"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input your email"
          className="w-72 md:w-558 h-8  md:h-16 border border-gray rounded-lg pl-10 text-sm font-normal text-[rgba(0, 0, 0, 0.24)] md:text-lg "
          required
        />
      </div>
      <label className="font-medium md:text-lg">Password</label>
      <div className="relative flex mb-5 md:mb-10">
        <img
          src={icon4}
          alt=""
          className="w-3 absolute bottom-2.5 md:bottom-6 ml-4"
        />
        <input
          for="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Input your password"
          className="md:w-558 w-72 md:h-16 h-8 border border-gray rounded-lg pl-10 font-normal text-sm text-[rgba(0, 0, 0, 0.24)] md:text-lg"
          required
        />
      </div>
      <div className="m-4 md:mb-8 text-center">
        <input type="radio" className="" />
        <label className="ml-2 text-xs md:text-base font-medium">
          Always remember me
        </label>
      </div>

      <h4 className="md:text-lg mb-4 md:mb-8 text-center text-xs ">
        Forgot password?{" "}
        <span className="text-[#fbc108] cursor-pointer hover:text-[#FFCC00]  active:bg-[#fbc10886]">
          Reset password
        </span>
      </h4>

      <button type="submit" className="md:w-558 w-full h-8 md:h-16 bg-[#FBC108] text-white mb-2.5 md:mb-5 rounded-lg font-medium md:text-lg hover:bg-[#FFCC00]  active:bg-[#fbc10886] ">
        Sign in
      </button>
      </form>
  

      <h4 className="md:text-lg text-xs font-medium text-center pb-12 md:pb-24">
        Don't have an account?{" "}
        <span
          className="text-[#fbc108] cursor-pointer hover:text-[#FFCC00  active:bg-[#fbc10886]]"
          onClick={() => navigate("/sign-up")}
        >
          Create an account
        </span>
      </h4>
    </div>
  );
}

export default SignInPage;
