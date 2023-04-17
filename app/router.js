require( 'dotenv' ).config()


function router(app){

    let x = []

    app.get('/api/portfolio', function (req, res)  {
        res.json({token: process.env.TOKEN})
   
    })

    //this code is for the qtrade app - redirect to pass a value back to qtrade app server via query of URL
     app.get('/api/qtrade', (req, res) => { 
        const code = req.query.code
        console.log('hello are you there', req.query.code)
                 
        res.json(code)

    })

 




}

module.exports = router