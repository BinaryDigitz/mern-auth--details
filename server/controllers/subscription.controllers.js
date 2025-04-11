import { subcriptionSuccess } from "../config/returnMessage.js";
import asyncMiddleware from "../middleware/asyncMiddleware.js";
import Subscription from '../models/subscription.model.js'


// GET ALL SUBSCRIPTIONS: /api/subscriptions
export const getSubcriptions = asyncMiddleware ( async (req, res) =>{

});

// GET SUBSCRIPTION: /api/subscriptions/user/subscriptionId
export const getSubcription = asyncMiddleware ( async (req, res) =>{
  //    Check if the user is thesame as the one in the token
  
if (req.user.id !== req.params.subscriptionId){
    return res.json(subcriptionSuccess('Unauthorized', 401))
}
const subcription = await Subscription.findById(req.user._id)
return res.json(subcriptionSuccess('Fetch successfull', 200, subcription))
});

// CREATE SUBSCRIPTION: /api/subscriptions
export const createSubscription = asyncMiddleware ( async (req, res) =>{
  let subcription = await Subscription.create({...req.body,
    user: req.user._id
  });
  await subcription.save()
  res.json(subcriptionSuccess('Created successfully', 202, subcription  ))
});

// UPDATE SUBSCRIPTION: /api/subscriptions/subscriptionId
export const updateSubscription = asyncMiddleware ( async (req, res) =>{

});

// DELETE SUBSCRIPTION: /api/subscriptions/subscriptionId
export const deleteSubscription = asyncMiddleware ( async (req, res) =>{

});

// GET USER SUBSCRIPTION: /api/user/:userId
export const getUserSubscription = asyncMiddleware ( async (req, res) =>{

});

// CANCEL SUBSCRIPTION: /api/subscriptions/:subcriptionId/cancel
export const cancelSubscription = asyncMiddleware ( async (req, res) =>{

});

// UPCOMING RENEWALS SUBSCRIPTION: /api/subscriptions/upcoming-renewals
export const upcomingRenewals = asyncMiddleware ( async (req, res) =>{

});