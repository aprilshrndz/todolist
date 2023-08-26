import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import InputField from '../.common/inputField'
import Button from '../.common/button'

const AuthForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pass2, setPass2] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [showError, setShowError] = useState(false)
    const [isLoadingAPI, setIsLoadingAPI] = useState(false)

    const navigate = useNavigate()

    const currentPath = window.location.pathname.replace('/', '')
    const isLogin = currentPath === 'login'
    const isRegister = currentPath === 'register'

    const showPassIcon = <svg className="h-4 text-gray-400 absolute cursor-pointer right-[0.7rem] top-[0.7rem]" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path fill="currentColor"
            d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
        </path>
    </svg>

    const showPassIcon2 = <svg className="h-4 text-gray-400 absolute cursor-pointer right-[0.7rem] top-[0.7rem]" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor"
        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
        </path>
    </svg>

    const clearState = () => {
        setUsername('')
        setPassword('')
        setPass2('')
        setShowPass(false)
        setShowPass2(false)
        setShowError(false)
        setIsLoadingAPI(false)
    }

    //Clear state when path changes
    useEffect(() => {
        clearState()
    }, [currentPath])

    const login = async () => {
        try{
            setIsLoadingAPI(true)
            const res = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()

            if (data) {
                setIsLoadingAPI(false)
                alert('User Logged In Successfully')
                navigate('/')
            }
        } catch(e) {
            setIsLoadingAPI(false)
            alert("User login Error!" + e)
        }
    }

    const register = async () => {
        if (password !== pass2) {
            setShowError(true)
        } else {
            try{
                setIsLoadingAPI(true)
                const res = await fetch('http://localhost:3001/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                })
    
                const data = await res.json()
    
                if (data) {
                    setIsLoadingAPI(false)
                    alert('New User Added!')
                    navigate('/login')
                }
            } catch(e) {
                setIsLoadingAPI(false)
                alert("Registration Error:" + e)
            }
        }
    }

    const spinner = () => {
        return <>
            <svg className="animate-spin h-[1.5rem] text-white m-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </>
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (isLogin) {
            login()
        } else {
            register()
        }
    }

    const disableSubmitButton = () => {
        if (isLogin) {
            return !username || !password || isLoadingAPI
        } else {
            return !username || !password || !pass2 || pass2 !== password || isLoadingAPI
        }
    }

    const onChangePass2 = (pass: string) => {
        if (pass !== password && !showError) {
            setShowError(true)
        } else if (pass === password && showError) {
            setShowError(false)
        }
        setPass2(pass)
    }

    return <form id='auth-form' onSubmit={(e) => onSubmit(e)} className=' flex flex-col items-center space-y-6 pt-16'>
            <InputField
                name="username"
                type="text"
                value={username}
                placeHolder='username'
                onChange={(e) => setUsername(e.target.value)}
                required={true}
                tabIndex={1}
            />
            <InputField
                name='password'
                type={showPass ? "text" : "password"}
                value={password}
                placeHolder='password'
                onChange={(e) => setPassword(e.target.value)}
                required={true}
                toggleBtn={showPass ? showPassIcon : showPassIcon2}
                toggleOnClick={() => setShowPass(!showPass)}
                tabIndex={2}
            />
            {isLogin ? <a href='#' aria-label='forgot password' className='mt-2 block hover:text-white hover:sm:text-c-blue-4 text-custom-lightpink sm:text-c-blue-3'>Forgot Password?</a> : null}
            {isRegister ?
                <InputField
                    name="confirm"
                    type={showPass2 ? "text" : "password"}
                    value={pass2}
                    placeHolder='confirm password'
                    required={true}
                    message={showError ? "password doesn't match" : ''}
                    messageType='error'
                    onChange={(e) => onChangePass2(e.target.value)}
                    toggleBtn={showPass2 ? showPassIcon : showPassIcon2}
                    toggleOnClick={() => setShowPass2(!showPass2)}
                    tabIndex={3}
                /> 
            : null}
            <Button label={isLoadingAPI ? spinner() : (isLogin ? 'Sign in' : 'Sign Up')} formType='submit' disabled={disableSubmitButton()} tabIndex={4}/>
            <div className=' text-white sm:text-gray-800 font-medium text-center'>
                {isLogin ?
                    <>
                        Don't have an account?
                        <Link to="/register" className='block hover:text-custom-pink hover:sm:text-c-blue-4 sm:text-c-blue-3 text-custom-lightpink'>Create a new account</Link>
                    </>
                :
                    <>
                        Already have an account?
                        <Link to="/login" className=' hover:text-custom-pink hover:sm:text-c-blue-4 sm:text-c-blue-3 text-custom-lightpink '> Sign in</Link> here.
                    </>
                }
            </div>
        </form>

}

export default AuthForm