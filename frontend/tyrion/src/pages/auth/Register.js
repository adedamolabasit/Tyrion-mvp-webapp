import React from "react"
import { useFormik } from "formik"


function Register() {
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            tel:"",
            password1:"",
            password2:"",


        }
    })
}