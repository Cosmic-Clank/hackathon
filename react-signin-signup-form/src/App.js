import React from "react";
import * as Components from './Components';

function redirect() {
    window.location.href = "http://localhost:3000";
}

function App() {
    const [signIn, toggle] = React.useState(true);
    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Input type='number' placeholder='Age' />
                    <Components.Input type='text' placeholder='Location' />
                    <Components.Input type='text' placeholder='3 Hobbies (comma-separated)' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' placeholder='Username' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button onClick={redirect}>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            Enter you login credentials and continue your journey
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, There!</Components.Title>
                        <Components.Paragraph>
                            Enter your personal details and get started with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sigin Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    )
}

export default App;