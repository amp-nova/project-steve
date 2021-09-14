import { UserService } from '../../../lib/user-api/userservice'
export default function handler(req: any, res: any) {
    let user = UserService.getUser(req.body.email)
    if (user) {
        if (req.body.attribute) {
            user = user.setAttribute(req.body.attribute, req.body.value)
        }
        else if (req.body.interest) {
            user = user.updateInterest(req.body.interest, req.body.up)
        }
    }
    res.status(200).json(user)
}