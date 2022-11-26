let btnDownload1 = document.getElementById("downld-btn1");
let btnDownload2 = document.getElementById("downld-btn2");
let likeBtn1 = document.getElementById("like-btn1");
let likeBtn2 = document.getElementById("like-btn2");
let img1 = document.querySelector("meme");
let img2 = document.querySelector("meme1");


let url1 = "https://meme-api.herokuapp.com/gimme";
let url2 = "https://meme-api.herokuapp.com/gimme/2";


// For the first meme Box
fetch(url1)
    .then(response => response.json())
    .then((data) => {
        console.log(data);

        var meme = data.preview[1];


        // To show the meme
        $(".meme").attr("src", meme);


        //To download the meme

        btnDownload1.addEventListener('click', () => {

            let imagePath = data.url;
            let fileName = "memeFromMemeWars.jpg";
            saveAs(imagePath, fileName);
        });

    });


// For the second meme Box
fetch(url2)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        var meme1 = data.memes[0].preview[1];


        // To show the meme
        $(".meme1").attr("src", meme1);


        //To download the meme
        btnDownload2.addEventListener('click', () => {
            let imagePath = data.memes[0].url;
            let fileName = "memeFromMemeWars.jpg";
            
             saveAs(imagePath, fileName);
        });

    });



//EventListeners for both the buttons
likeBtn1.addEventListener('click', () => {
    window.location.reload();
});
likeBtn2.addEventListener('click', () => {
    window.location.reload();
});