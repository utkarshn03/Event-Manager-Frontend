import * as Yup from 'yup';

export const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*()_]{3,30}$/, 'Invalid password format').min(8, 'Password must be at least 8 characters').required('Password is required'),
});

export const SignupSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    name: Yup.string().min(1, 'Name is mandatory').required('Name is required'),
    password: Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*()_]{3,30}$/, 'Invalid password format').min(8, 'Password must be at least 8 characters').required('Password is required'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});

export const VerifySchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    otp: Yup.string().min(6, 'OTP must be at least 6 characters').required('OTP is required'),
});

export const ForgetSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
});

export const ResetSchema = Yup.object({
    password: Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*()_]{3,30}$/, 'Invalid password format').min(8, 'Password must be at least 8 characters').required('Password is required'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});
