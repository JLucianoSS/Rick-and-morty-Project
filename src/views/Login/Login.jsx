import Form from "../../components/Form/Form";
import style from './Login.module.css';
import img from '../../assets/images/login.jpg';

const Login = (props) =>{
    const {login} = props;
    return (
        <div className={style.containerLogin}>
            <img className={style.user_login} src={img} alt="user-login" />
            <div className={style.separador}></div>
            <Form login={login}/>
        </div>
    );
}

export default Login;