import Input from "../atoms/Input";

function Form({onChange, formData}) {

    return(
        <form className="form">

            <div className="username">
            <label>USERNAME</label>
            <Input
                name = "username"
                type = "text"
                placeholder = "inserisci un username.."
                value = {formData.username}
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}>
            </Input>
            </div>
        </form>
    )
}

export default Form;