/**
 * Are we running on Google App Engine?
 */
export default (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production');