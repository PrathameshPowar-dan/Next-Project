'use server';

import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/Inngest/client";
import { headers } from "next/headers";


export const signUpWithEmail = async ({ fullName, email, password, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({
            body: { email, password, name: fullName }
        })

        if (response) {
            await inngest.send({
                name: 'app/user.created',
                data: {
                    email,
                    name: fullName,
                    country,
                    investmentGoals,
                    riskTolerance,
                    preferredIndustry
                }
            })
        }

        return { success: true, data: response }
    } catch (error) {
        console.log('Sign up Failed', error)
        return { success: false, error: 'Sign Up Failed' }
    }
}

export const signOut = async () => {
    try {
        await auth.api.signOut({ headers: await headers() })
    } catch (error) {
        console.log("Sign Out Failer", error)
        return { success: false, error: "Sign Out Failed" }
    }
}

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
    try {
        const response = await auth.api.signInEmail({
            body: { email, password }
        })

        return { success: true, data: response }
    } catch (error) {
        console.log('Sign IN Failed', error)
        return { success: false, error: 'Sign IN Failed' }
    }
}