import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'


console.log('clientId', process.env.GOOGLE_CLIENT_ID)

const authHandler = NextAuth({

    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })],
    callbacks: {
        async signIn({profile}) {
            try {

            } catch (err) {
                console.log(err)
            }
        },

        async session({session}) {
            try {

            } catch(err) {
                console.log(err)
            }
        }
    }
})

export { authHandler as GET, authHandler as POST }