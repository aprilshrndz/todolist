import Auth from "../components/Auth/authForm"
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'

const AuthPage = () => {
    return <div id='auth-Background' className=" w-screen h-screen  flex justify-center items-center bg-waves-vertical bg-bottom sm:bg-waves bg-no-repeat sm:bg-cover">
        <div id='auth-Container' className=' 2xl:w-1/4 h-2/3 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 sm:bg-white rounded-lg sm:shadow-xl flex flex-col items-center justify-center mb-24 sm:mb-0 overflow-auto'>
            <img id='auth-appLogo' className="h-[4.5rem] w-auto drop-shadow-lg hidden sm:block" src={logoDark} alt="logo" />
            <img id='auth-appLogo' className="h-16 w-auto drop-shadow-lg sm:hidden " src={logoLight} alt="logo" />
            <Auth />
        </div>
    </div>
}

export default AuthPage