
import styles from './styles/loginStyle.module.css'
import Input from './Input'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',

        }
    }


    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (

            <div className={styles.contain}>

                <div className={styles.containLogin}>
                    <div className={styles.logo}>
                        <span> LOGO </span>
                    </div>
                    <form className={styles.form} align="center">

                        <h1>
                            LOGIN
                        </h1>


                        <Input type="text" placeholder="username or email" />

                        <Input type="password" placeholder="password" />

                        <div className={styles.fp}>
                            <button> Forget password</button>
                        </div>

                        <div className={styles.buttoncon}>
                            <button type="submit" className={styles.button}>LOG IN</button>
                        </div>
                    </form>


                    <div className={styles.fp + ' ' + styles.below}>
                        <span>Don't have an account </span>
                        <button> Sign up</button>
                    </div>


                </div>

            </div >
        )
    }
}

export default Login






