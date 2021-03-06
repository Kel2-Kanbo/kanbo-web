import React, { useEffect, useState } from 'react';
import Logo from '../../Components/Logo';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Axios from "axios";
import FormInput from '../../Components/FormInput';
import Button from '../../Components/Button';
import Background from '../../Assets/Admin.png'
import styled from '@emotion/styled';
import Swal from "sweetalert2";
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [isEmptyEmail, setIsEmptyEmail] = useState(true);
    const [isEmptyPassword, setIsEmptyPassword] = useState(true);
    const [inputs, setInputs] = useState([
        {
            id: 0,
            type: 'email',
            placeholder: 'Email',
            value: '',
            pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
            err: 'Email must be valid',
        },
        {
            id: 1,
            type: 'password',
            placeholder: 'Password',
            value: '',
            pattern: "^[A-Za-z0-9]{6,12}$",
            err: 'Must contain at least 6 or more characters',
        },
    ]);
    const [msg, setMsg] = useState("");
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const handleClickPassword = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    const handleChange = (value, index) => {
        const newInputs = { ...inputs[index], value };
        // console.log(newInputs);
        const newInputsArr = [...inputs];
        newInputsArr[index] = newInputs;
        setInputs(newInputsArr);
    }
    const onLogin = async (e) => {
        e.preventDefault();
        if (inputs[0].value && inputs[1].value) {
            const data = {
                password: inputs[1].value,
                username: inputs[0].value,
            }
            try {
                await Axios.post("http://3.88.14.239/api/auth/signin", data).then(response => console.log(response));
            }
            catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg)
                }
            }
            finally {
                Swal.fire({
                    title: "Login Success",
                    // text: `You `,
                    confirmButtonColor: "#4C35E0",
                    // confirmButtonText: "Ok!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/dashboard");
                    }
                });
            }
        } else {
            setIsEmptyEmail(true);
            setIsEmptyPassword(true);
        }
    }

    const backgroundImage = {
        backgroundImage: `url(${Background})`,
        backgroundSize: "100% 100%",
    };
    useEffect(() => {
        if (!inputs[0].value) {
            setIsEmptyEmail(false);
        } else {
            setIsEmptyEmail(true);
        }
        if (!inputs[1].value) {
            setIsEmptyPassword(false);
        } else {
            setIsEmptyPassword(true);
        }

    }, [inputs]);
    // console.log(isEmptyEmail);
    return (
        <LoginWrap style={backgroundImage}>
            <div className='flex h-screen'>
                <form
                    onSubmit={onLogin}
                    className="max-w-xl w-full m-auto bg-current bg-secondary-softblue rounded-lg shadow-lg shadow-primary-gray3 p-10 ">
                    <div className='flex justify-center mb-4'>
                        <Logo />
                    </div>
                    <div>
                        <h1 style={{
                            textAlign: 'start',
                        }} className="py-2 text-primary-gray">login as admin!</h1>
                    </div>

                    <div>
                        {
                            inputs.map((input, inputIdx) => (
                                <div
                                    key={inputIdx}
                                >
                                    <FormInput
                                        className='peer'
                                        {...input}
                                        value={input.value}
                                        type={input.type === 'password' ? isPasswordShown ? 'text' : 'password' : input.type}
                                        required
                                        onChange={(e) => handleChange(e.target.value, inputIdx)}
                                    />
                                    {
                                        input.type === "email" ? <p className={`my-2 ${isEmptyEmail ? "peer-invalid:visible text-primary-red invisible" : "invisible"}  text-sm`}>
                                            {input.err}
                                        </p> : null
                                    }
                                    {
                                        input.type === "password" ? <p className={`my-2 ${isEmptyPassword ? "peer-invalid:visible text-primary-red invisible" : "invisible"} text-sm`}>
                                            {input.err}
                                        </p> : null
                                    }

                                </div>
                            ))
                        }
                        {/* <button
                            className='show-password -mt-12 h-8 lg:-mr-72 md:-mr-32 sm:-mr-56'
                            onClick={handleClickPassword}>
                            {isPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </button> */}

                        <div style={{
                            textAlign: 'end',
                        }} className="py-2">
                            <a href='/forgot'>Forgot password?</a>
                        </div>

                        <Button className='rounded
                                w-full
                                border-1
                                bg-stone-500'
                            type='submit'
                        >
                            Login
                        </Button>

                        <div style={{
                            textAlign: 'center',
                        }} className="mt-4">
                            <p className='text-sm'>Don't have an account? <a className='text-primary-blue' href='/register'>Register</a></p>
                        </div>

                    </div>

                </form>

            </div >

        </LoginWrap >
    );
}

const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;