import { UserService, UserProfile, userHandler } from '@lib/user-api/userservice'
export default userHandler((user: UserProfile, query: any) => {
    return user || UserService.createUser(query.email)
})