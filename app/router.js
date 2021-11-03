require( 'dotenv' ).config()


function router(app){

    
    app.get('/api/portfolio', function (req, res)  {
        console.log('hey we are in router gettin process.env.TOKEN', process.env.TOKEN)
        res.json({token: process.env.TOKEN})
    })
}

module.exports = router