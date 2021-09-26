import { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';


const useForm = (validate) => {

    const [emailErr, setEmailErr] = useState('');
    
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })

    }

    const history = useHistory();
    
    
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);

        
        if (Object.keys(errors).length === 0 && isSubmitting) {

            
            axios.post(`/api/user/register`, values)
            .then(() => {
                history.push('/');
            })
            .catch((err) => {
                setEmailErr(err.response.data.msg)
            })
        }
    }
    
    return{ handleChange , values, handleSubmit, errors, isSubmitting, emailErr};
}

export default useForm;
