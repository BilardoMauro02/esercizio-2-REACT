import Button from "../atoms/Button";
import Input from "../atoms/Input";

function Form({handleChange, formData, handleSubmit}) {

    return(
        <form className="form">

            <div className="username">
            <label>USERNAME</label>
            <Input
                name = "username"
                type = "text"
                placeholder = "inserisci un username.."
                value = {formData.username}
                handleChange={handleChange}
            >
            </Input>
            </div>

            <div className="email">
            <label>EMAIL</label>
            <Input
                name = "email"
                type = "email"
                placeholder = "inserisci un email.."
                value = {formData.email}
                handleChange={handleChange}
                >

            </Input>
            </div>

            <div className="password">
            <label>PASSWORD</label>
            <Input 
                name = "password"
                type = "password"
                placeholder = "inserisci una password.."
                value = {formData.password}
                handleChange={handleChange}>
            </Input>
            </div>

            <Button onClick={handleSubmit} >invia</Button>
        </form>
    )
}

export default Form;