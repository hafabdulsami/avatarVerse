import * as YUP from 'yup'

export const signUpSchema = YUP.object({
  name:YUP.string().min(2).max(25).required("Please enter your name"),
  username:YUP.string().min(5).max(15).required("Please enter your username"),
  email:YUP.string().email().required("Please enter your Email"),
  password:YUP.string().min(6).required("Please enter your Password"),
  country:YUP.string().required("Please select Country")
  //.oneOf([YUP.ref("password"),null], "Password must match"),
})