//configuração do Express antes de executá-lo

// const express = require('express');
// const consign = require('consign');

// module.exports = () => {
//     const app = express();

//     app.use(express.urlencoded({ extended: true }));
//     app.use(express.json());

//     consign()
//         .include('controllers')
//         .into(app)

//     return app;
// }


//Parte1
const express = require('express');
const consign = require('consign');
//const bodyParser = require('body-parser');//foi descontinuado, por isso utilizamos o middleware do express

module.exports = () => {
    const app = express();

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    consign()
        .include('controllers')
        .into(app)
    
    return app;
}

