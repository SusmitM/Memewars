$.getJSON("https://meme-api.herokuapp.com/gimme", function(data){



var meme=data.preview[1];

$(".meme").attr("src",meme);
});

$.getJSON("https://meme-api.herokuapp.com/gimme/2", function(data){


console.log(data)
var meme1=data.memes[0].preview[1];

$(".meme1").attr("src",meme1);
});