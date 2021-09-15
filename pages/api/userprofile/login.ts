import { userService, UserProfile } from '@lib/user-api/userservice'
export default userService.handle((user: UserProfile, query: any) => user)