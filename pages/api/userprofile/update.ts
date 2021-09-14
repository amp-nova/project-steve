import { UserProfile, userHandler } from '@lib/user-api/userservice'
export default userHandler((user: UserProfile, query: any) => {
    if (query.attribute) {
        user = user.setAttribute(query.attribute, query.value)
    }
    else if (query.interest) {
        user = user.updateInterest(query.interest, query.up)
    }
    return user
})