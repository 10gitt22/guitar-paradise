export type AuthFormProps = {
    setHasAccount: React.Dispatch<React.SetStateAction<boolean>>
}

export type AuthCredentials = {
    email: string
    password: string
}