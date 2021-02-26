import { Router, Request, Response } from 'express';
import { getUser } from '../mock-db/users';
const user = Router();

const path = require('path')

user.get('/:userId', (request: Request, response: Response) => {
    const user = getUser(request.params.userId);
    user ?
        response.send(user) :
        response.status(404).send({});
});

user.get('/:userId/avatar', (request: Request, response: Response) => {
    const { userId } = request.params;
    const imagePath = `${path.resolve(__dirname, '..')}/pictures/${userId}.png`;
    response.sendFile(imagePath);
});

export default user;
