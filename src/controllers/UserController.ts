import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const data = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
    const { id } = req.params
    const user = await User.findOneAndUpdate({ _id: id }, data)

    return res.json(user)
  }

  public async remove (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const user = await User.remove({ _id: id })

    return res.json(user)
  }

  public async getUserById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const user = await User.findOne({ _id: id })

    return res.json(user)
  }
}

export default new UserController()
