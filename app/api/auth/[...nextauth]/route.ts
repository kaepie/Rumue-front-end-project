import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      token: string;
    }
  }
}
  

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ทำการ request ไปยัง back-end เพื่อรับ JWT
        const res = await fetch("http://localhost:3001/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const data = await res.json();

        if (res.ok && data?.token) {
          const token = data.token;
          if (!process.env.NEXTAUTH_SECRET) {
            throw new Error("NEXTAUTH_SECRET is not defined");
          }
          const decoded = jwtDecode(data.token);
          const { id , role } :any = decoded;
          const user = { 
            id: id, 
            role: role,
            token: token
          };

          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }:any) => {
      if (user) {
        // ในกรณีที่ response มี id และ role โดยตรง
        token.id = user.id;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    session: async ({ session, token }:any) => {
      // ดึง id และ role จาก token และเพิ่มเข้า session
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role; // เพิ่ม role เข้าไป
        session.user.token = token.token;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
