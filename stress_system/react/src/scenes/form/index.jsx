import React from 'react'
import {Box,Button,TextField} from "@mui/material"
import { Formik } from 'formik'
import * as yup from "yup"
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'
const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    phone: "",
    address:"",
    age:"",
    access:"user"
}

const phoneRegExp =   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userScheme = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    phone: yup.string().matches(phoneRegExp,"Phone number is not valid").required("required"),
    address: yup.string().required("required"),
    age:yup.string().required("required"),
})
const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const handleFormSubmit = (values)=>{
        let newvar = {...values}
        newvar["name"]= `${values.firstName} ${values.lastName}`
        newvar["age"] = new Number(values.age)
        const storageval = JSON.parse(localStorage.getItem("team"))
        newvar["id"] = storageval[storageval.length-1].id +1
        localStorage.setItem("team",JSON.stringify([...storageval,newvar]))
    }
    
    return (
    <Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New Uer Profile"/>
        <Formik
            onSubmit={handleFormSubmit} 
            initialValues={initialValues}
            validationSchema={userScheme}   
        >
            {({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <Box 
                        display="grid" 
                        sx={{
                        "   & > div":{
                                gridColumn: isNonMobile ? undefined : "span 4"
                            }
                        }}
                        gap="30px" 
                        gridTemplateColumns="repeat(4,minmax(0,1fr))"
                    >
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            label="First Name" 
                            name="firstName"
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.firstName} 
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{
                                gridColumn:"span 2"
                            }} 
                        />
                        
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            label="Last Name"
                            name="lastName" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.lastName} 
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                            sx={{
                                gridColumn:"span 2"
                            }} 
                        />
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            name="email"
                            type="text" 
                            label="Email" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.email} 
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{
                                gridColumn:"span 4"
                            }} 
                        />
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            name="age"
                            type="text" 
                            label="Age" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.age} 
                            error={!!touched.age && !!errors.age}
                            helperText={touched.age && errors.age}
                            sx={{
                                gridColumn:"span 4"
                            }} 
                        />
                        <TextField 
                            fullWidth 
                            variant="filled"
                            name="phone" 
                            type="text" 
                            label="phone Number" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.phone} 
                            error={!!touched.phone && !!errors.phone}
                            helperText={touched.phone && errors.phone}
                            sx={{
                                gridColumn:"span 4"
                            }} 
                        />
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            name="address"
                            label="Address" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.address} 
                            error={!!touched.address && !!errors.address}
                            helperText={touched.address && errors.address}
                            sx={{
                                gridColumn:"span 4"
                            }} 
                        />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type='submit' variant='contained'color="secondary">Create New User</Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
  )
}

export default Form