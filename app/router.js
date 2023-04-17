require( 'dotenv' ).config()


function router(app){

    
    app.get('/api/portfolio', function (req, res)  {
        res.json({token: process.env.TOKEN})
   

    })

    // app.get('/api/qtrade', (req, res) => { 
    //     console.log(req)
    //    let x = req.url.split('=')[1]
       
    //     res.json({results: x})
   
    //     })

            app.get('/api/qtrade/:qtrade', (req, res) => { 
    console.log(req.params)
    // res.json({results: req.url})
    //     // let x = req.url.split('=')[1]
    //     // res.json({results: x})
    res.json({res: req.params})

    })


}

module.exports = router