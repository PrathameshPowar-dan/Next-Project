"use server"

import { connectToDatabase } from "@/database/mongoose"

export const getAllUsersForNewsEmail = async () => {
    try {
        const mongoose = await connectToDatabase();
        const DB = mongoose.connection.db;

        if (!DB) {
            throw new Error("MongoDB not connected in User_Actions")
        }

        const users = await DB.collection('user').find(
            { email: { $exists: true, } },
            { projection: { _id: 1, id: 1, email: 1, name: 1, country: 1 } }
        ).toArray()

        return users.filter((user) => user.email && user.name).map((user) => ({
            id: user._id || user._id || '',
            email: user.email,
            name: user.name
        }));
    } catch (error) {
        console.error("Error in User_Actions", error)
        return []
    }
}