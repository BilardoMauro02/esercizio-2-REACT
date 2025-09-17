function Button(type = "submit", onClick, variant) {
    return(
        <button className="button"
        type = {type}
        onClick={onClick}
        variant={variant}
        />
    )
}

export default Button;