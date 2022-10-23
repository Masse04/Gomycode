import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const SignIn = () => {
    const user = {email : 'massamba084@gmail.com',motDePasse : 'Mouhammad084'}
    const [ident,setIdent] = useState({mail : '' , password : ''})
    useEffect (() => {
        window.alert('Bonjour entrer votre identifiant et mot de passe')
      }, [] )
      useEffect(() => {
      })
      let navigate = useNavigate();
    return(
        <div>
            <input type = 'email' placeholder = 'example@mail.com' onChange={(e) => {setIdent({...ident,mail:e.target.value})
            console.log (ident.mail)}}/>
            <input type = 'password' placeholder = '********'onChange={(e) => {setIdent({...ident,password:e.target.value})
            console.log (ident.password)}}/>
            <button className = "signIn" onClick= {(props) => { ident.mail === user.email && ident.password === user.motDePasse ? navigate('/home') : alert('ko')
            }}>Sign In</button>
        </div>
    )
}
export default SignIn;