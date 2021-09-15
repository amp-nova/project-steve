import _ from 'lodash'
import fs from 'fs-extra'
import NextCors from 'nextjs-cors'

import logger from '@lib/utils/logger'
import config from '@lib/utils/config'
import { UserProfile } from './domain'

class UserService {
    userdata: UserProfile[]

    constructor() {
        this.userdata = []
        this.refreshUserData()
        let interestInterval = config.get('interestInterval')
        logger.info(`[ UserService ] started successfully with [ ${this.userdata.length} ] users; interestInterval is [ ${interestInterval}ms ]`)
        setInterval(_.bind(this.diminishInterest, this), interestInterval)
    }

    diminishInterest() {
        _.each(this.userdata, user => {
            _.each(user.interests, interest => {
                interest.points > 0 && interest.addPoints(-1)
            })
            user.interests = user.interests.filter(item => item.points > 0);
        })
        logger.debug('[ UserService ] diminishInterest')
        this.persistUserData()
    }

    refreshUserData() {
        this.userdata = _.map(fs.readJSONSync('./userdata/userdata.json'), user => new UserProfile(user))
    }

    persistUserData() {
        logger.debug('[ UserService ] persisted user data')
        fs.writeJSONSync('./userdata/userdata.json', this.userdata)
        this.refreshUserData()
    }

    getUser(email: string) {
        logger.debug(`[ UserService ] lookup email [ ${email} ]`)
        let user = _.find(this.userdata, user => user.email === email)
        logger.debug(`[ UserService ] found [ ${user} ]`)
        return user
    }

    createUser(email: string) {
        this.userdata.push(new UserProfile({ email }))
        this.persistUserData()
        return this.getUser(email)
    }

    handle(handler?: any) {
        let h = handler || ((user: UserProfile, query: any) => user)
        return async (req: any, res: any, next: any) => {
            // await NextCors(req, res, {
            //     // Options
            //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            //     origin: '*',
            //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
            //  });

            res.setHeader('Access-Control-Allow-Credentials', true)
            res.setHeader('Access-Control-Allow-Origin', '*')
            // another common pattern
            // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
            res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
            res.setHeader(
              'Access-Control-Allow-Headers',
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
            )
            if (req.method === 'OPTIONS') {
              res.status(200).end()
              return
            }
            
            let query = _.merge(req.body, req.query)
            let user = this.getUser(query.email)

            user = h(user, query)

            if (user) {
                res.status(200).json(user)
            }
            else {
                res.status(401).json({ error: `user [ ${query.email} ] not found` })
            }
        }
    }

    delete(user: UserProfile) {
        if (user) {
            _.remove(this.userdata, x => user.email === x.email)
            this.persistUserData()
        }
        return user
    }
}

let userService = new UserService()
export { userService, UserProfile }