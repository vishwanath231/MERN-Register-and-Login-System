
const validateInfo = (values) => {

    let errors = {}

    if (!values.email) {
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if (!values.password) {
        errors.password = "Password required"
    }
    // }else if(values.password.length < 6){
    //     errors.password = "Incorrect password"
    // }


    return errors;
    
}

export default validateInfo;
