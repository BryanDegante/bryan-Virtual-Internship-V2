'use client';

type AuthenticationModalProps = {
	isOpen: boolean;
};

const AuthenticationModal = ({ isOpen }: AuthenticationModalProps) => {
    if (!isOpen) return null; 
	return (
		<div></div>
		
	);
};

export default AuthenticationModal;
