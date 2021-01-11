
import express from 'express';
import costumersController from './controllers/customers.controller';
export default function setRoutes(app:any) {

    const router = express.Router();
    
    router.route('/costumer').post(costumersController.create);
    router.route('/costumer').get(costumersController.getAll);
    router.route('/costumer/:id').get(costumersController.get);
    router.route('/costumer/:id').put(costumersController.put);
    router.route('/costumer/:id').delete(costumersController.delete);

app.use('/', router);
}