
function Input ( value, name, placeholder, type, onChange){

    return(
            <input className="input"
            name = {name}
            value = {value}
            placeholder = {placeholder}
            onChange={onChange}
            type = {type}
            />
    )

}
export default Input;