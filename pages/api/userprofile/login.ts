import { UserService } from '../../../lib/user-api/userservice'
export default function handler(req: any, res: any) {
    const user = UserService.getUser(req.query.email)

    if (user) {
        res.status(200).json(user)
    }
    else {
        res.status(401).json({ error: `user [ ${req.query.email} ] not found` })
    }
}