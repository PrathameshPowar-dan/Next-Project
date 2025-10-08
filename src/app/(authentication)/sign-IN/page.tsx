'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import InputField from '@/components/forms/InputField';
import FooterLink from '@/components/forms/FooterLink';
// import {signInWithEmail, signUpWithEmail} from "@/lib/actions/auth.actions";
// import {toast} from "sonner";
// import {signInEmail} from "better-auth/api";
import { useRouter } from "next/navigation";

const SignIN = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      // const result = await signInWithEmail(data);
      // if(result.success) router.push('/');
    } catch (e) {
      // console.error(e);
      // toast.error('Sign in failed', {
      //     description: e instanceof Error ? e.message : 'Failed to sign in.'
      // })
    }
  }

  return (
    <>
      <p className="text-2xl font-bold text-center text-gray-100 mt-2.5 mb-5.5 border p-3 rounded-2xl">Sign In</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="contact@gmail.com"
          register={register}
          error={errors.email}
          validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/ }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: 'Password is required', minLength: 8 }}
        />

        <Button type="submit" disabled={isSubmitting} className="orange-btn w-full mt-5">
          {isSubmitting ? 'Signing In' : 'Sign In'}
        </Button>

        <FooterLink text="Don't have an account?" linkText="Create an account" href="/sign-UP" />
      </form>
    </>
  );
};
export default SignIN;