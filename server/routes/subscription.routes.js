import { Router} from 'express';
import { createSubscription, getSubcription,
     upcomingRenewals, getUserSubscription,
      cancelSubscription, updateSubscription,
       getSubcriptions, deleteSubscription } from '../controllers/subscription.controllers.js';
import authrize from '../middleware/auth.middleware.js';


const subscriptionRouter = Router()

subscriptionRouter.get('/', getSubcriptions)

subscriptionRouter.get('/user/:subscriptionId', authrize, getSubcription)

subscriptionRouter.post('/', authrize, createSubscription)

subscriptionRouter.put('/:subscriptionId', updateSubscription)

subscriptionRouter.delete('/:subscriptionId' , deleteSubscription)


subscriptionRouter.get('/user/:userId' , getUserSubscription)

subscriptionRouter.put('/:id/cancel' , cancelSubscription)

subscriptionRouter.get('/upcoming-renewals' , upcomingRenewals)




export default subscriptionRouter;