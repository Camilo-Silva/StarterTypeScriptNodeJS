import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.getUserById)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.remove)

export default routes
