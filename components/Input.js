import styles from './styles/loginStyle.module.css'
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            className: styles.textField,
            placeholder: this.props.placeholder,
            labelClass: styles.labelNormal,

        }
    }

    focusClass = () => {
        this.setState({
            labelClass: styles.labelFocus,
            placeholder: '',
        })
    }

    blurClass = (event) => {
        if (event.target.value === '') {
            this.setState({
                labelClass: styles.labelNormal,
                placeholder: this.props.placeholder,
            })
        }
    }

    render() {
        return (
            <div className={styles.textFieldClass}>
                <label className={this.state.labelClass}>{this.props.placeholder}</label>
                <input type={this.props.type} className={this.state.className} name={this.props.name} placeholder={this.state.placeholder} onChange={this.focusClass} onFocus={this.focusClass} onBlur={this.blurClass} />

            </div>
        );
    }
}

export default Input;