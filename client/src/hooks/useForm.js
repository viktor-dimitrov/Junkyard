import { useEffect, useState } from "react";


export const useForm = (initialValues, onSubmitHandler, onEditSubmit, editComment, onEditClick) => {

    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();

       if(editComment) {
        onEditSubmit(values);
       } else {
        onSubmitHandler(values);
       }
       setValues(initialValues);
    }

    const changeValues = (newValues) => {   
        setValues(newValues);
        
    };

    useEffect(() => {
        if (typeof onEditClick === "function") {
          onEditClick(changeValues);
        }
      }, []);

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues
    }

}