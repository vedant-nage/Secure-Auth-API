# JWT

what is json web token ?
 It is use prove that the user is anuthenticated. Instead of storing the sessions on server we give user a token , now users send the token with every request and it is verified every time whenever make a request and server verifies it. 

 for the token we have to give expirey time when it get expires then users need to logged in again.

 Sessions store user data on the server and require memory or database storage, which makes scaling harder. JWT is stateless, meaning the server doesn’t store session data. Instead, the token contains user information and is verified on each request, making it more scalable and efficient for modern applications.

 jwt = server independent
 session = server depentdent
 