'use client';
import { IoPerson } from 'react-icons/io5';
import styles from '@/components/Home/Auth Modal/AuthenticationModal.module.css';
import { IoMdClose } from 'react-icons/io';
type AuthenticationModalProps = {
	isOpen: boolean;
};

const AuthenticationModal = ({ isOpen }: AuthenticationModalProps) => {
	if (!isOpen) return null;
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex justify-center items-center flex-col  z-10">
			<div className="relative w-full max-w-100 bg-white rounded-lg shadow-lg">
				<div className="pt-12 pb-6 px-8">
					<div className="text-center text-xl font-bold text-[#032b41] mb-6">
						Log in to Summarist
					</div>
					<button className="relative flex bg-[#3a579d] text-white justify-center w-full h-10 rounded-sm text-base transition-colors duration-200 items-center min-w-45 hover:bg-[#25496b]">
						<figure className="flex items-center justify-center w-9 h-9 rounded-sm absolute left-0.5">
							<IoPerson className="w-6 h-6" />
						</figure>
						<p>Login as a Guest</p>
					</button>
					<div className={styles.auth__separator}>
						<span className="text-sm text-[#394547] font-medium mx-6 ">
							or
						</span>
					</div>
					<button className="relative flex bg-[#4285f4] text-white justify-center w-full h-10 rounded-sm text-base items-center min-w-45 transition-colors duration-200 hover:bg-[#3367d6]">
						<figure className="flex items-center justify-center w-9 h-9 rounded-sm absolute left-0.5 bg-white">
							<img
								src="/assets/google.png"
								alt=""
								className="w-6 h-6"
							/>
						</figure>
						<p>Login with Google</p>
					</button>
					<div className={styles.auth__separator}>
						<span className="text-sm text-[#394547] font-medium mx-6 ">
							or
						</span>
					</div>
					<form className="flex flex-col gap-4">
						<input
							className="h-10 rounded-sm text-[#394547] px-3 border-2 border-[#bac8ce] transition-colors focus:border-[#2bd97c] focus:outline-none"
							type="email"
							name="Email"
							placeholder="Email Address"
						/>
						<input
							className="h-10 rounded-sm text-[#394547] px-3 border-2 border-[#bac8ce] transition-colors focus:border-[#2bd97c] focus:outline-none"
							type="password"
							name="Password"
							placeholder="Password"
						/>
						<button className="btn">
							<span>Login</span>
						</button>
					</form>
				</div>
				<div className="text-center text-[#116be9] font-light text-sm w-fit mx-auto mb-4 cursor-pointer hover:text-[#124a98]">
					Forgot your Password?
				</div>
				<button className="h-10 text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-b-sm font-light text-base hover:bg-[#e1e9e8] transition-transform active:scale-95 ">
					Dont have an account?
				</button>
				<div className='absolute top-3 right-3 flex cursor-pointer transition-opacity duration-200 hover:opacity-50'>
					<IoMdClose className='w-7 h-7'/>
				</div>
			</div>
		</div>
	);
};

export default AuthenticationModal;
