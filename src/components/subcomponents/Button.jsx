import './button.css'

function Button({ children, active, ...props }) {
    return (
        <button className={`button ${active ? 'button-active' : ''}`} {...props}>
            {children}
        </button>
    )
}

export default Button