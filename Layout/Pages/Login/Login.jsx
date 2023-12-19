import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import crypto from "crypto-js";
import useAxiospublic from "../../../Hooks/useAxios/useAxiospublic";

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

        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '16px',
    },
    typo2: {
        marginBottom: '16px',
        textAlign: 'center',
        fontSize: '16px'


    },
}));
const Login = () => {
    const { setuser } = useAuth()


    const classes = useStyles();
    // react-hook-form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const axiosPublic = useAxiospublic()
    const navigate = useNavigate()


    const onSubmit = async (data) => {
        console.log(data)
        const email = data.email
        const password = crypto.SHA512(data.email+data.password).toString()

        // Signed in 

        const url = `/users/${email}/${password}`
        axiosPublic.get(url)
            .then(response => {
                console.log(response);
                if (response.data === 'found') {
                    reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    setuser(true)
                    navigate('/')
                }
                else if (response.data === 'User Credentials does not match') {
                    reset();
                    Swal.fire({
                        title: 'Error!',
                        text: 'User Credentials does not match',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
            })
            .catch(function (error) {
                console.log(error);

            });
    }

    return (
        <Container sx={{ width: '100vw', mx: "auto", my: '45px' }}>
            <Box >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography className={classes.typo}>Log in to your Lernen account</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        alignItems: 'center',

                        bgcolor: 'background.paper',

                    }}
                    >

                        {/* register your input into the hook by invoking the "register" function */}

                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: '50%' }}
                            label="Email"
                            variant="outlined"
                            {...register("email")}
                        />
                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: '50%' }}
                            label="Password"
                            variant="outlined"
                            {...register("password")}
                            type="password"
                        />

                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <button
                            style={{ padding: "15px 0px", marginBottom: "15px", width: "50%", background: grey[900], outline: '0', color: "white" }}

                            // variant="outlined"

                            type="submit"

                        >
                            Login
                        </button>
                    </Box>

                </form>
                <Divider style={{ padding: "15px 0px", marginBottom: "15px" }} />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Typography className={classes.typo2}> Don't have an account?<Link to={'/signup'}>Sign up</Link></Typography>
            </Box>

        </Container>
    );
};

export default Login;