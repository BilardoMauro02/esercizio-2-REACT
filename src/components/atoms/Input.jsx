
function Input ( formData, name, placeholder, type, handleChange, data){

    return(
            <input className="input"
            name = {name}
            value = {formData[data]}
            placeholder = {placeholder}
            onChange={(e) => handleChange(data, e.target.value)}
            type = {type}
            />
    )

}
export default Input;