require( 'dotenv' ).config()


function router(app){

    let x = 

    app.get('/api/portfolio', function (req, res)  {
        res.json({token: process.env.TOKEN})
   
    })

    //this code is for the qtrade app - redirect to pass a value back to qtrade app server via params
     app.get('/api/qtradeCode/qtrade', (req, res) => { 
        const code = req.query
        console.log('hello are you there', req.query)
        x = code

                 
        res.json({code: code})
        console.log('thisisxcode',x.code)

    })

    app.get('/api/qtrade', (req, res) => {
        console.log('we got code', x.code)

        x.code === undefined? res.json({code:'no code received'}) : res.json(x)
        

    })


 







}

module.exports = router