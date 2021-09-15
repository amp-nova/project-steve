import { userService, UserProfile } from '../../../lib/user-api/userservice'
export default userService.handle((user: UserProfile, query: any) => {
    if (query.attribute) {
        user = user.setAttribute(query.attribute, query.value, 10)
    }
    else if (query.interest) {
        user = user.updateInterest(query.interest, query.up === 'false' ? -10 : 10)
    }
    return user
})