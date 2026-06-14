export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/documents/:path*",
    "/upload/:path*",
    "/audit/:path*",
    "/settings/:path*",
    "/sign/:path*",
  ],
};
