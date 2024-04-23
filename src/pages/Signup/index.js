import React, { useState } from 'react';
import loginBg from '../../assets/login-bg.svg';
import rightCardSignup from '../../assets/RightCard-signup.svg';
import logo from '../../assets/logo.svg';
import { FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import CommonButton from '../../components/CommonButton';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import CommonInput from '../../components/CommonInput';
import whiteLogo from '../../assets/white-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { updateName, updateUserEmail } from '../../actions';
import { connect } from 'react-redux';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-background h-screen flex justify-center items-center relative">
            <img className="absolute inset-0 w-full h-full object-cover" src={loginBg} alt='' />
            <div className="absolute flex flex-wrap min-h-screen w-full lg:content-center content-end justify-center">
                <div className="flex shadow-md lg:w-auto w-full">
                    <div className='grid lg:grid-cols-2 w-full'>
                        <div className='py-9 px-10 lg:hidden flex flex-col items-center gap-3 '>
                            <img src={whiteLogo} alt='logo' />
                            <p className='text-3xl font-bold text-[#FDFDFD]'>Asatera</p>
                        </div>
                        <div className="lg:rounded-l-3xl bg-white h-auto">
                            <div className='py-9 px-10 lg:flex hidden items-center gap-3'>
                                <img src={logo} alt='logo' />
                                <p className='text-3xl font-bold text-blue'>Asatera</p>
                            </div>
                            <div className="pt-8 lg:px-[65px] px-7">
                                <h1 className="text-[#1E1F20] font-medium text-[22px] leading-[30px]">Create an account</h1>
                                <p className="text-lightGray font-medium text-sm leading-5 pt-2.5">Sign up to continue </p>
                                <form className="lg:mt-8 mt-3">
                                    <CommonInput placeholder="Davin Wong" label="Name" type="text"/>
                                    <CommonInput label="Email" placeholder="davin.wong@mail.com" icon={IoCheckmarkCircleOutline} iconColor="#62CA76"/>
                                    <CommonInput
                                        label="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        icon={showPassword ? MdRemoveRedEye : IoMdEyeOff}
                                        togglePasswordVisibility={togglePasswordVisibility}
                                        iconColor="dark"
                                    />
                                    <div className="my-6 lg:block hidden">
                                        <div>
                                            <input id="remember" type="checkbox" className="mr-2 checked:bg-purple-700" />
                                            <label htmlFor="remember" className="mr-auto text-sm text-[#1C1D21] font-semibold">This is a Business Account</label>
                                        </div>
                                        <div>
                                            <input id="remember" type="checkbox" className="mr-2 checked:bg-purple-700" />
                                            <label htmlFor="remember" className="mr-auto text-sm text-[#1C1D21] font-semibold">I agree with terms & conditions</label>
                                        </div>
                                    </div>
                                    <div className='lg:mb-10'>
                                        <CommonButton onClick={() => navigate('/reset-password')} className="bg-warning">Create an account</CommonButton>
                                    </div>
                                </form>
                                <div className="mb-3.5 mt-[18px] lg:hidden flex flex-wrap justify-center">
                                    <Link to="/" className='text-sm font-bold text-lightGray'>Already have an account? Login</Link>
                                </div>
                                <div className='flex gap-3 justify-center items-center'>
                                    <div className='flex gap-1.5'>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaTwitter /></div>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaGoogle /></div>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaGithub /></div>
                                    </div>
                                    <p className='text-[#8181A5] sm:text-sm text-xs font-semibold cursor-pointer'>Or sign in with</p>
                                </div>
                                <div className='flex w-full justify-center pt-5 pb-2.5 lg:hidden'>
                                    <div className='bg-[#000000] rounded-md w-full max-w-36 h-[5px] flex justify-center'></div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex flex-wrap content-center justify-center h-auto hidden">
                            <img className="w-full h-full bg-center bg-no-repeat bg-cover" src={rightCardSignup} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;



