import _ from 'lodash'

class Interest {
    name: string
    points: number

    constructor(obj: any) {
        this.name = obj.name
        this.points = obj.points
    }

    addPoints(p: number) {
        this.points = this.points + p
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
        return this
    }

    updateInterest(name: string, points: number) {
        let interest = _.find(this.interests, i => i.name === name)
        if (!interest) {
            interest = new Interest({ name, points: 0 })
            this.interests.push(interest)
        }

        interest.addPoints(points)
        return this
    }

    toString() {
        return `user [ ${this.name} ] email [ ${this.email} ]`
    }
}

export { UserProfile }