require( 'dotenv' ).config()


function router(app){

    
    app.get('/api/portfolio', function (req, res)  {
        res.json({token: process.env.TOKEN})
   

    })



    app.get('/api/qtrade', (req, res) =>  {
        let x = req.url.split('=')[1]
        res.json({results: x})

    })
}

module.exports = router