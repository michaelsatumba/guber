import React from 'react'
import tw from "tailwind-styled-components"

const Login = () => {
    return (
        <Wrapper>
        <SignInButton>
            Sign In with Google
        </SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`

`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full transform hover:scale-105 transition
`