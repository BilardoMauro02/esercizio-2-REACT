function Button(type = "submit", onClick, variant, text) {
    return(
        <button className="button"
        type = {type}
        onClick={onClick}
        variant={variant}
        >
            {text}
        </button>
    )
}

export default Button;