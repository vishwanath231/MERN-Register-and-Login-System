import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const useForm = (validate) => {

    const [isValid, setIsValid] = useState("");

    const [values, setValues] = useState({
        email:'',
        password: ''
    });

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]:value
        })
    }
    
    const history = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values))

        let emailStr = values.email;
        let emailSplit = emailStr.split("@")

        localStorage.setItem('username', emailSplit[0]);

        axios.post(`/api/user/login`, values)
        .then(() => {
            history.push('/home')
        }).catch((err) => {
            setIsValid(err.response.data.err)
        })
    }

    return { handleChange, values, handleSubmit, errors, isValid };
}

export default useForm;
