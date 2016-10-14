/**
 * Created by championswimmer on 12/10/16.
 */
const express = require('express');
const app = express();

const routes = {
    users: require('./routes/users'),
    products: require('./routes/products'),
    vendors: require('./routes/vendors')
};

app.use('/users', routes.users)
app.use('/products', routes.products)
app.use('/vendors', routes.vendors)


app.listen(3000, () => {
    console.log('http://localhost:3000');
});