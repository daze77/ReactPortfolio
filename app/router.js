require( 'dotenv' ).config()


function router(app){

    
    app.get('/api/portfolio', function (req, res)  {
        res.json({token: process.env.TOKEN})
    })
}

module.exports = router