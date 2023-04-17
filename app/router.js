require( 'dotenv' ).config()


function router(app){

    let x = 

    app.get('/api/portfolio', function (req, res)  {
        res.json({token: process.env.TOKEN})
   
    })

    //this code is for the qtrade app - redirect to pass a value back to qtrade app server via params
     app.get('/api/qtrade/:qtrade', (req, res) => { 
                 x = req.params

        res.json({res: req.params})

    })

    // this will take the params pushed to x and pass to new api route for access
    app.get('/api/qtrade',(req,res) => {
            console.log('did this work', x)
            res.json(x)
        })




}

module.exports = router