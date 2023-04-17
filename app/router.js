require( 'dotenv' ).config()


function router(app){

    let x = 

    app.get('/api/portfolio', function (req, res)  {
        res.json({token: process.env.TOKEN})
   
    })

    //this code is for the qtrade app - redirect to pass a value back to qtrade app server via params
     app.get('/api/qtradeCode/qtrade', (req, res) => { 
        const code = req.query.code
        console.log('hello are you there', req.query.code)
        x = code

                 
        res.json({code: code})

    })

    app.get('/api/qtrade', (req, res) => {
        console.log('we got code', x)
        res.json(x)
    })

    // this will take the params pushed to x and pass to new api route for access
    // app.get('/api/qtrade',(req,res) => {
    //         console.log('did this work', code)
    //         res.json(code)
    //     })




}

module.exports = router