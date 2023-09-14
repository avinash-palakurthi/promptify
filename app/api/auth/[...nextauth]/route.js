import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE.CLIENT.SECRET,
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      try {
      } catch (error) {
        console.log(error);
      }
    },
  },

  async session({ session }) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
});

export { authHandler as GET, authHandler as POST };
