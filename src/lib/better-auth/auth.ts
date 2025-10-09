import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
    if (authInstance) {
        return authInstance
    };

    const mongoose = await connectToDatabase();
    const DB = mongoose.connection.db;

    if (!DB) {
        throw new Error("Database Connection not found")
    }

    authInstance = betterAuth({
        database: mongodbAdapter(DB as any),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 6,
            maxPasswordLength: 12,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
    });

    return authInstance;
};

export const auth = await getAuth();