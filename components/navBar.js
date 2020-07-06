import ns from './styles/navbar.module.css'
import Link from 'next/link'
import LinkStyles from './styles/styledLink'
export default class Navbar extends React.Component {
    constructor(props) {
        super(props)


    }


    render() {
        let classes = this.props.isadd ? [ns.nav, ns['menu-open']].join(' ') : ns.nav
        return (
            <nav className={classes}>
                <h1 className={ns.brand} ><a>To<span>Do</span>App</a></h1>

                <ul>
                    <li><Link href='/'><LinkStyles>Home</LinkStyles></Link></li>
                    <li><Link href='/about'><LinkStyles>About</LinkStyles></Link></li>
                    <li><Link href='/login'><LinkStyles>Login</LinkStyles></Link></li>
                    <li><Link href='/register'><LinkStyles>Register</LinkStyles></Link></li>

                </ul>
            </nav>
        )
    }
}

