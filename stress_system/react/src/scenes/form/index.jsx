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
    contact: "",
    address:""
}

const phoneRegExp =   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userScheme = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    contact: yup.string().matches(phoneRegExp,"Phone number is not valid").required("required"),
    address: yup.string().required("required")
})
const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const handleFormSubmit = (values)=>{
        console.log(values);
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
                            name="contact" 
                            type="text" 
                            label="Contact Number" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.contact} 
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
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