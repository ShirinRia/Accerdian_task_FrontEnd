import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import crypto from "crypto-js";

import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";

import useAxiospublic from "../../../Hooks/useAxios/useAxiospublic";

import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({

    typo: {
        marginBottom: '16px',
        textAlign: 'center',
        fontSize: '32px'

    },
    typo2: {
        marginBottom: '16px',
        textAlign: 'center',
        fontSize: '16px'


    },
    typo3: {
        marginBottom: '8px',
        textAlign: 'center',
        fontSize: '14px'

    }
}));
const Signup = () => {
    const { setuser } = useAuth()
    const axiosPublic = useAxiospublic()
    const classes = useStyles();
    const navigate = useNavigate()
    const url = '/user'

    const mutation = useMutation({
        mutationFn: (newTodo) => {
            return axiosPublic.post(url, newTodo)
                .then(response => {
                    console.log(response);
                    if (response.data === 'record inserted') {
                        reset()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Registered with email Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        setuser(true)
                        navigate("/");

                    }
                    else{
                        Swal.fire({
                            title: 'Something Wrong!',
                            
                            icon: 'error',
                            confirmButtonText: 'OK'
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);

                });
        },
    })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const name = data.name
        const email = data.email
        const password = crypto.SHA512(data.password).toString()
        const confpassword = crypto.SHA512(data.confpassword).toString()
        if (password != confpassword) {
            Swal.fire({
                title: 'Error!',
                text: 'Password does not match',
                icon: 'error',
                confirmButtonText: 'Type Correctly'
            })
        }
        else {
            const newuserdata = { name, email, password }
            console.log(newuserdata);

            mutation.mutate(newuserdata)

            
            reset();
        }


    }

    return (
        <Box sx={{ width: '100vw', mx: 'auto', my: 4 }}>
            <Container maxWidth="lg" >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography className={classes.typo}>Sign up and start exploring</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        alignItems: 'center',

                        bgcolor: 'background.paper',

                    }}
                    >
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="UserName"
                            variant="outlined"
                            type="text"

                            {...register("name", { required: true })}
                        />

                        {errors.name && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Name is required</span>}

                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Email"
                            variant="outlined"
                            type="email"

                            {...register("email", { required: true })}
                        />
                        {errors.email && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Email is required</span>}
                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Password"
                            variant="outlined"
                            type="password"

                            {...register("password", {
                                required: true, minLength: 6,
                                maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                        />
                        {/* {errors.password && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password is required</span>} */}
                        {errors.password?.type === 'required' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must be 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must be less than 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must have one Uppercase one lower case, one number and one special character.</span>}

                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Confirm Password"
                            variant="outlined"
                            type="password"

                            {...register("confpassword", {
                                required: true, minLength: 6,
                                maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                        />
                        {/* {errors.password && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password is required</span>} */}
                        {errors.password?.type === 'required' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must be 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must be less than 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must have one Uppercase one lower case, one number and one special character.</span>}


                        <button
                            style={{ padding: "15px 0px", marginBottom: "15px", width: "50%", background: grey[900], outline: '0', color: "white" }}

                            // variant="outlined"

                            type="submit"

                        >Sign Up</button>
                    </Box>


                </form>
                <Divider style={{ padding: "5px 0px", marginBottom: "5px" }} />
                <Typography className={classes.typo2}>Already have an account?<Link to={'/login'}>Log in</Link></Typography>


            </Container>
        </Box>
    );
};

export default Signup;