import { UserProfile, userHandler } from '@lib/user-api/userservice'
export default userHandler((user: UserProfile, query: any) => user)