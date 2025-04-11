import { createSubscription, getSubcription, updateSubscription, getSubcriptions, createSubscription, deleteSubscription } from '../controllers/subscription.controllers.js';
import { Router} from express;


const subscriptionRouter = Router()

subscriptionRouter.get('/', getSubcriptions)

subscriptionRouter.get('/:subscriptionId', getSubcription)

subscriptionRouter.post('/', createSubscription)

subscriptionRouter.update('/:subscriptionId', updateSubscription)

subscriptionRouter.post('/:subscriptionId' , deleteSubscription)




export default subscriptionRouter;