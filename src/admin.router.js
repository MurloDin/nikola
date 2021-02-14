const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express')
const argon2 = require('argon2');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const User = require('./models/users/user.data');

const buildAdminRouter = (admin) => {
    const router = AdminBroExpress.buildAuthenticatedRouter(admin, {
        cookieName: 'admin-bro',
        cookiePassword: 'superlongandcomplicatedname',
        authenticate: async (email, password) => {
            return true
        },
    }, null, {
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    });
    return router;
};


module.exports = buildAdminRouter;

