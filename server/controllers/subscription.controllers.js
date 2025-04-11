import asyncMiddleware from "../middleware/asyncMiddleware.js";


// GET ALL SUBSCRIPTIONS: /api/subscriptions
export const getSubcriptions = asyncMiddleware ( async (req, res) =>{

});
// GET SUBSCRIPTION: /api/subscriptions/subscriptionId
export const getSubcription = asyncMiddleware ( async (req, res) =>{

});
// CREATE SUBSCRIPTION: /api/subscriptions
export const createSubscription = asyncMiddleware ( async (req, res) =>{

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