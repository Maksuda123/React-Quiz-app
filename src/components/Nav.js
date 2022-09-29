import classes from '../style/Nav.module.css'
import Account from './Account'
import logo from '../Assets/images/logo-bg.png'
export default function Nav(){
  return(
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt='Logo'/>
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account/>
    </nav>
  )
} 