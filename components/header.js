import st from './styles/header.module.css'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            changeIcon: true,
            iclasses: faBars,
            overlayClasses: [st.overlay,],


        }
    }


    toggler = () => {


        if (this.state.changeIcon) {
            this.setState({

                overlayClasses: [st.overlay, st['menu-open']],
                changeIcon: false,
                iclasses: faTimes,


            })
        }
        else {
            this.setState({
                overlayClasses: [st.overlay,],
                changeIcon: true,
                iclasses: faBars,
            })

        }


    }

    render() {


        let overlayClasses = this.state.overlayClasses.join(' ')
        return (
            <div className={st.fullcontainer}>
                <header className={st.header}>
                    <div className={st.menuToggle} id={st.hamburger} onClick={this.toggler}>
                        <FontAwesomeIcon icon={this.state.iclasses} />
                    </div>

                    <div className={overlayClasses} ></div>

                    <div className={st.container}>
                        <Navbar isadd={!this.state.changeIcon} />

                    </div>



                </header>
            </div>
        )
    }
}

