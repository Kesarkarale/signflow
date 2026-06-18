import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized: ({ token }) => {
      return !!token;
    },
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/documents/:path*",
    "/upload/:path*",
    "/audit/:path*",
    "/settings/:path*",
  ],
};
