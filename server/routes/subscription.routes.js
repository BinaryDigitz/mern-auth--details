import { createSubscription, getSubcription, upcomingRenewals, getUserSubscription, cancelSubscription, updateSubscription, getSubcriptions, createSubscription, deleteSubscription } from '../controllers/subscription.controllers.js';
import { Router} from express;


const subscriptionRouter = Router()

subscriptionRouter.get('/', getSubcriptions)

subscriptionRouter.get('/:subscriptionId', getSubcription)

subscriptionRouter.post('/', createSubscription)

subscriptionRouter.put('/:subscriptionId', updateSubscription)

subscriptionRouter.delete('/:subscriptionId' , deleteSubscription)


subscriptionRouter.get('/user/:userId' , getUserSubscription)

subscriptionRouter.put('/:id/cancel' , cancelSubscription)

subscriptionRouter.get('/upcoming-renewals' , upcomingRenewals)




export default subscriptionRouter;