import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDatabase } from "@utils/database";
import User  from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({ session }) {
        const sessionUser = await User.findOne({ email: session.user.email });

        session.user.id = sessionUser._id.toString();
    },
    async signIn({ profile }) {

        try {
            //serverless -> lambda -> opens when call so dynamic
            await connectToDatabase();

            //Check if a user already exists
            const user = await User.findOne({ email: profile.email });

            // If not, create a new user in the database
            if (!user) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").tolowercase(),
                    image: profile.picture,
                });
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }

    }
})

export { handler as GET, handler as POST }
