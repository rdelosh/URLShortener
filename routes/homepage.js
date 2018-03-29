var express =require('express')
var router = express.Router()
var arrayofurls = []

router.get('/*',function(req,res){

	if(req.url==='/'){
		res.render('index')
	}else if(req.url.length===5){
		
		var refnumber = req.url.substring(1,req.url.length)
		console.log(refnumber)
		var foundlink=false;
		arrayofurls.map(function(url){
			if(url.ref==refnumber){
				foundlink=true
				res.redirect(url.link)
			}
		})
		if(!foundlink){
			res.send(JSON.stringify(
						{error:'invalid url'}))
		}
		

		
	}else{
		console.log(req.url)
		var randomnumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
		var link = req.url.substring(5,req.url.length)
		arrayofurls.push({ref:randomnumber,link:link})
		res.send(JSON.stringify(
						{ref:link,link:"https://mysterious-journey-64175.herokuapp.com/"+randomnumber}))
		// res.send(randomnumber+"")
		//return json
	}
	
})


module.exports = router