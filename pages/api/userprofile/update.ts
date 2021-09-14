import { UserService } from '../../../lib/user-api/userservice'
export default function handler(req: any, res: any) {
    let user = UserService.getUser(req.query.email)
    if (user) {
        if (req.query.attribute) {
            user = user.setAttribute(req.query.attribute, req.query.value)
        }
        else if (req.query.interest) {
            user = user.updateInterest(req.query.interest, req.query.up)
        }
    }
    res.status(200).json(user)
}