let btnDownload1 = document.getElementById("downld-btn1");
let btnDownload2 = document.getElementById("downld-btn2");
let img1 = document.querySelector('meme');
let img2 = document.querySelector("meme1");

$.getJSON("https://meme-api.herokuapp.com/gimme", function (data) {
    

    var meme = data.preview[1];

    $(".meme").attr("src", meme);

    btnDownload1.addEventListener('click', () => {
        let imagePath = data.preview[1];
        let fileName = "memeFromMemeWars";
        saveAs(imagePath, fileName);
    });
     
     
  


});

$.getJSON("https://meme-api.herokuapp.com/gimme/2", function (data) {


    var meme1 = data.memes[0].preview[1];

    $(".meme1").attr("src", meme1);

    btnDownload2.addEventListener('click', () => {
        let imagePath = data.memes[0].preview[1];
        let fileName = "memeFromMemeWars";
        saveAs(imagePath, fileName);
    });
});






