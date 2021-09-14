import { UserProfile, userHandler } from '@lib/user-api/userservice'
export default userHandler((user: UserProfile, query: any) => {
    if (user) {
        user.delete()
    }
    return user
})