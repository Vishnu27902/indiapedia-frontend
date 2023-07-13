import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons"
import { Zoom } from "react-awesome-reveal"
import { useSelector, useDispatch } from "react-redux"
import { login, register } from "../features/accountOptionSlice"
import { validateUsername, validateEmail, validatePhNumber, validatePassword, validateConfirmPassword, validateSignUp, usernameFocused, emailFocused, phNumberFocused, passwordFocused, confirmPasswordFocused } from "../features/signUpSlice"
import { validateSignIn, validateSignInUsername, validateSignInPassword } from "../features/SignInSlice"
import { getAccessToken } from "../features/authSlice"
import { registerUser } from "../features/signUpSlice"
import { useEffect } from "react"

function SignInSignUp() {
    const doLogin = useSelector((state) => state.accountOption.login)
    const doRegister = useSelector((state) => state.accountOption.register)
    const signUpStates = useSelector((state) => state.signUp)
    const signInStates = useSelector((state) => state.signIn)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(validateSignUp())
        dispatch(validateSignIn())
    }, [dispatch,signUpStates,signInStates])

    const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(getAccessToken({
            username: signInStates.username,
            password: signInStates.password
        }))
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        dispatch(registerUser({
            name: signUpStates.name,
            email: signUpStates.email,
            phNumber: signUpStates.phNumber,
            password: signUpStates.password
        }))
    }

    return (
        <div
            className='absolute w-full h-full z-20 flex items-center justify-center scroll-hide overflow-y-auto'
            style={{ "backgroundColor": "rgba(0,0,0,0.2)" }}
        >
            {doLogin &&
                (<Zoom>
                    <div
                        className='rounded-3xl gap-5 justify-center flex flex-col text-white p-7 bg-blue-900 w-80 left-[40%] z-30 shadow-2xl shadow-black'
                    >
                        <button
                            onClick={() => dispatch(login())}
                            className="self-start  bg-indigo-600 p-2 rounded-md hover:bg-indigo-400 shadow-sm shadow-black hover:shadow-md hover:shadow-black transition-all active:scale-50"
                        >
                            <FontAwesomeIcon
                                icon={faClose}
                            />
                        </button>
                        <h1
                            className=' items-start font-medium text-4xl text-blue-100 text-center'
                        >
                            Sign In
                        </h1>
                        <form
                            className='gap-5 flex-grow flex flex-col'
                        >
                            <input
                                type="text"
                                value={signInStates.username}
                                onChange={(e) => dispatch(validateSignInUsername(e.target.value))}
                                className=' rounded-full px-3 py-1 text-gray-700 outline-orange-500 flex-1'
                                required
                                placeholder='Enter the Username'
                            />
                            <input
                                type="password"
                                value={signInStates.password}
                                onChange={(e) => dispatch(validateSignInPassword(e.target.value))}
                                className='rounded-full px-3 py-1 text-gray-700 outline-orange-500'
                                required
                                placeholder='Enter the password'
                            />
                            <button
                                disabled={!(signInStates.validSignIn)}
                                className='cursor-pointer bg-indigo-600 w-28 self-center h-10 rounded-full shadow-sm shadow-black hover:shadow-md hover:shadow-black hover:bg-indigo-400 transition-all active:scale-50'
                                onClick={(e) => handleSignIn(e)}
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </Zoom>)
            }
            {doRegister &&
                (<Zoom>
                    <div
                        className='rounded-3xl gap-5 justify-center flex flex-col text-white p-7 bg-blue-900 w-80 h-max z-30 '
                    >
                        <button
                            onClick={() => dispatch(register())}
                            className="self-start  bg-indigo-600 p-2 rounded-md hover:bg-indigo-400 shadow-sm shadow-black hover:shadow-md hover:shadow-black transition-all active:scale-50"
                        >
                            <FontAwesomeIcon
                                icon={faClose}
                            />
                        </button>
                        <h1 className=' items-start font-medium text-4xl text-blue-100 text-center'>Sign Up</h1>
                        <form className='gap-5 flex-grow flex flex-col' >
                            <div className="flex items-center gap-2">
                                <input
                                    value={signUpStates.username}
                                    onChange={(e) => dispatch(validateUsername(e.target.value))}
                                    onFocus={() => dispatch(usernameFocused(true))}
                                    onBlur={() => dispatch(usernameFocused(false))}
                                    type='text'
                                    className='flex-grow rounded-full px-3 py-1 text-gray-700 outline-orange-500 shadow-sm shadow-black'
                                    placeholder='Enter the Username'
                                    required
                                />
                                {
                                    signUpStates.validUsername ?
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className=" text-green-700 text-xl"
                                        /> :
                                        <FontAwesomeIcon
                                            icon={faClose}
                                            className="text-red-700 text-xl"
                                        />
                                }
                            </div>
                            {
                                signUpStates.usernameFocus &&
                                !signUpStates.validUsername &&
                                (<div className="text-xs">
                                    <p className="text-red-600">Username must contain minimum of 3 characters</p>
                                </div>)
                            }
                            <div className="flex items-center gap-2">
                                <input
                                    type='email'
                                    value={signUpStates.email}
                                    onChange={(e) => dispatch(validateEmail(e.target.value))}
                                    onFocus={() => dispatch(emailFocused(true))}
                                    onBlur={() => dispatch(emailFocused(false))}
                                    className='flex-grow rounded-full px-3 py-1 text-gray-700 outline-orange-500 shadow-sm shadow-black'
                                    placeholder='Enter the Email ID'
                                    required
                                />
                                {
                                    signUpStates.validEmail ?
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className=" text-green-700 text-xl"
                                        /> :
                                        <FontAwesomeIcon
                                            icon={faClose}
                                            className="text-red-700 text-xl"
                                        />
                                }
                            </div>
                            {
                                signUpStates.emailFocus &&
                                !signUpStates.validEmail &&
                                (<div className="text-xs">
                                    <p className="text-red-600">Email ID must be valid</p>
                                </div>)
                            }
                            <div className="flex items-center gap-2">
                                <input
                                    value={signUpStates.phNumber}
                                    onChange={(e) => dispatch(validatePhNumber(e.target.value))}
                                    onFocus={() => dispatch(phNumberFocused(true))}
                                    onBlur={() => dispatch(phNumberFocused(false))}
                                    type='number'
                                    className='flex-grow rounded-full px-3 py-1 text-gray-700 outline-orange-500 shadow-sm shadow-black'
                                    placeholder='Enter the Phone Number'
                                    required
                                />
                                {
                                    signUpStates.validPhNumber ?
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className=" text-green-700 text-xl"
                                        /> :
                                        <FontAwesomeIcon
                                            icon={faClose}
                                            className="text-red-700 text-xl"
                                        />
                                }
                            </div>
                            {
                                signUpStates.phNumberFocus &&
                                !signUpStates.validPhNumber &&
                                (<div className="text-xs">
                                    <p className="text-red-600">Phone Number must contain 10 digits (Numeric only)</p>
                                </div>)
                            }
                            <div className="flex items-center gap-2">
                                <input
                                    value={signUpStates.password}
                                    onChange={(e) => {
                                        dispatch(validatePassword(e.target.value))
                                        dispatch(validateConfirmPassword(signUpStates.confirmPassword))
                                    }}
                                    onFocus={() => dispatch(passwordFocused(true))}
                                    onBlur={() => dispatch(passwordFocused(false))}
                                    className='flex-grow rounded-full px-3 py-1 text-gray-700 outline-orange-500 shadow-sm shadow-black'
                                    type='password'
                                    placeholder='Enter the Password'
                                    required
                                />
                                {
                                    signUpStates.validPassword ?
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className=" text-green-700 text-xl"
                                        /> :
                                        <FontAwesomeIcon
                                            icon={faClose}
                                            className="text-red-700 text-xl"
                                        />
                                }
                            </div>
                            {
                                signUpStates.passwordFocus &&
                                !signUpStates.validPassword &&
                                (<div className="text-xs">
                                    <p className="text-red-600">Password must contain a minimum of 6-20 Characters<br />Must contain a Capital letter, Number and a Special Character </p>
                                </div>)
                            }
                            <div className="flex items-center gap-2">
                                <input
                                    value={signUpStates.confirmPassword}
                                    onChange={(e) => dispatch(validateConfirmPassword(e.target.value))}
                                    onFocus={() => dispatch(confirmPasswordFocused(true))}
                                    onBlur={() => dispatch(confirmPasswordFocused(false))}
                                    className='flex-grow rounded-full px-3 py-1 text-gray-700 outline-orange-500 shadow-sm shadow-black'
                                    type='password'
                                    placeholder='Confirm Password'
                                    required
                                />
                                {
                                    signUpStates.validConfirmPassword ?
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className=" text-green-700 text-xl"
                                        /> :
                                        <FontAwesomeIcon
                                            icon={faClose}
                                            className="text-red-700 text-xl"
                                        />
                                }
                            </div>
                            {
                                signUpStates.confirmPasswordFocus &&
                                !signUpStates.validConfirmPassword &&
                                (<div className="text-xs">
                                    <p className=" text-red-600">Password doesn't Match</p>
                                </div>)
                            }
                            <button
                                disabled={!(signUpStates.validSignUp)}
                                className='cursor-pointer bg-indigo-600 w-28 self-center h-10 rounded-full hover:bg-indigo-400 shadow-sm shadow-black hover:shadow-md hover:shadow-black transition-all active:scale-50'
                                onClick={(e) => handleSignUp(e)}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </Zoom>)
            }
        </div>
    )
}

export default SignInSignUp