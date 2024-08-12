import { NextResponse } from 'next/server'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const {isAuthenticated} = getKindeServerSession();
    if (!(await isAuthenticated())) {
        // Protecting the "/detail" route such that only authenticated users can access that particular route.
        // "Post_login": once they have logged in they will be redirected back to the protected page which they should now have access to. 
        return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/', request.url))
      }

}
 
// Matching Path
export const config = {
  matcher: ['/details/:path*'],
}