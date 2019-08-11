module.exports = {
    PORT: process.env.PORT || 8000,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "https://threeaday-server.herokuapp.com/api",
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'threeaday-client-auth-token'
};