import {Link} from "react-router-dom"
import EmailConfirmed from "../components/EmailConfirmed"


export default function ConfirmedEmail() {
   <EmailConfirmed/>
  return (
    <>
    <div className="bg-slate-200 flex justify-center items-center h-screen">
    <div className=" text-3xl bg-slate-50 h-48 w-2/5 flex items-center justify-center shadow-xl"><h1>Your email was successfully verified click <Link to="/signin" className=" text-blue-600">here</Link> to sign-in</h1></div></div></>
  )
}
