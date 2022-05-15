export interface FirestoreUser {
    id: string
    displayName: string | null
    role?: "user" | "admin"
    photoUrl: string | null
}