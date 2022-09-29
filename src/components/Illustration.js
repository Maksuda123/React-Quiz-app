import signupImage from '../Assets/images/signup.svg'
import classes from '../style/Illustration.module.css'
export default function Illustration(){
  return(
    <div className={classes.Illustration}>
            <img src={signupImage} alt="Signup" />
          </div>
  )
}