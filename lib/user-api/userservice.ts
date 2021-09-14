import _ from 'lodash'
import fs from 'fs-extra'

let userdata: UserProfile[] = []
const refreshUserData = () => {
    userdata = _.map(fs.readJSONSync('./userdata/userdata.json'), user => new UserProfile(user))
}

const persistUserData = () => {
    fs.writeJSONSync('./userdata/userdata.json', userdata)
    refreshUserData()
}

class Interest {
    name: string
    level: number

    constructor(obj: any) {
        this.name = obj.name
        this.level = obj.level
    }
}

class Attribute {
    name: string
    value: string

    constructor(obj: any) {
        this.name = obj.name
        this.value = obj.value
    }
}

class UserProfile {
    email: string
    name: string
    attributes: Attribute[]
    interests: Interest[]

    constructor(obj: any) {
        this.email = obj.email
        this.name = obj.name
        this.attributes = _.map(obj.attributes, a => new Attribute(a)) || []
        this.interests = _.map(obj.interests, i => new Interest(i)) || []
    }

    setAttribute(name: string, value: string) {
        let attribute = _.find(this.attributes, i => i.name === name)
        if (!attribute) {
            attribute = { name, value }
            this.attributes.push(attribute)
        }

        attribute.value = value
        persistUserData()
        return this
    }

    updateInterest(name: string, up: string) {
        let interest = _.find(this.interests, i => i.name === name)
        if (!interest) {
            interest = { name, level: 0 }
            this.interests.push(interest)
        }

        interest.level = up === 'false' ? interest.level - 1 : interest.level + 1
        persistUserData()
        return this
    }
}

const UserService = {
    getUser: (email: string) => {
        console.log(`user service lookup email [ ${email} ]`)
        return _.find(userdata, user => user.email === email)
    }
}

let userHandler = (handler: any) => (req: any, res: any, next: any) => {
    let query = _.merge(req.body, req.query)
    let user = UserService.getUser(query.email)
    if (user) {
        user = handler(user, query)
        res.status(200).json(user)
    }
    else {
        res.status(401).json({ error: `user [ ${query.email} ] not found` })
    }
}

refreshUserData()
export { UserService, UserProfile, userHandler }