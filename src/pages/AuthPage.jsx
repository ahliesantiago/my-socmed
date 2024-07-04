import { Authenticator, ThemeProvider, useTheme, View } from '@aws-amplify/ui-react'
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import '@aws-amplify/ui-react/styles.css'

const AuthPage = () => {
    const storedSession = JSON.parse(localStorage.getItem('session'))
    
    const handleSignOut = async (e) => {
        console.log('Signed out successfully.')
        e.preventDefault()
        await signOut()
        localStorage.clear()
    }

    /**
     * This will fetch the session details
     * and assign to state and local storage if needed.
    **/
    const fetchSession = async () => {
        try {
            const { username, userId } = await getCurrentUser()
            console.log(`The details: ${username}, ${userId}`)
            
            /**
             * This will add the user details to the local storage if it is empty;
             * otherwise, the data in local storage will remain as is.
            **/
            if(!storedSession){
                // Save user to local storage
                localStorage.setItem('session', JSON.stringify({
                    userId: userId,
                    username: username
                }))
            }
        } catch (err) {
            // console.log("Error", err)
        }
    }

    /** 
     * This is for styling the sign in / sign up form.
    **/
    const { tokens } = useTheme()
    const theme = {
        tokens: {
            components: {
                authenticator: {
                    form: {
                        padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
                    }
                },
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <View height="100vh" display="flex" justifyContent="center" alignItems="center">
                <Authenticator signUpAttributes={[
                    'email',
                    'given_name',
                    'family_name',
                    'birthdate',
                    'gender'
                ]} formFields={formFields}>
                    {({ user }) => {
                        fetchSession()
                        return (
                            <>
                                <h1>Hello {user.username}</h1>
                                <button onClick={handleSignOut}>Sign out</button>
                            </>
                        )
                    }}
                </Authenticator>
            </View>
        </ThemeProvider>
    )
}

const formFields = {
    signUp: {
        given_name: {
            order: 1,
            label: 'First name',
            placeholder: 'Enter your first name',
        },
        family_name: {
            order: 2,
            label: 'Last name',
            placeholder: 'Enter your last name',
        },
        birthdate: {
            order: 3,
            label: 'Birthdate'
        },
        gender: {
            order: 4,
            label: 'Gender',
            placeholder: 'Enter your gender',
        },
        email: {
            order: 5,
            label: 'Email address',
            placeholder: 'Enter your email address',
        },
        username: {
            order: 6,
            placeholder: 'Enter a unique username'
        },
        password: {
            order: 7,
            placeholder: 'Enter a 6-digit password',
        },
        confirm_password: {
            order: 8,
            placeholder: 'Confirm your password',
        }
    }
}

export default AuthPage