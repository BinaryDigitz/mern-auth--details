

// Return messages for User controller
export function userSuccess(message, statusCode = 200, user = null) {
  return { success: true, statusCode, message, user };
}
export function userFail(message, statusCode = 400) {
  return { success: false, statusCode, message, };
}

// Return messages for Auth controller
export function authSuccess(message, statusCode = 200, data=nulll) {
  return { success: true, statusCode, message, data };
}
export function authFail(message, statusCode = 400) {
  return { success: false, statusCode, message, };
}

// Return messages for Subcription controller
export function subcriptionSuccess(message, statusCode = 200, subcription = null) {
  return { success: true, statusCode, message, subcription };
}
export function subscriptionFail(message, statusCode = 400) {
  return { success: false, statusCode, message, };
}
