let btnExpand1 = document.getElementById("expand-btn1");
let btnExpand2 = document.getElementById("expand-btn2");
let likeBtn1 = document.getElementById("like-btn1");
let likeBtn2 = document.getElementById("like-btn2");
let img1 = document.querySelector("meme1");
let img2 = document.querySelector("meme2");


let url1 = "https://meme-api.herokuapp.com/gimme";
let url2 = "https://meme-api.herokuapp.com/gimme/2";


// For the first meme Box
fetch(url1)
    .then(response => response.json())
    .then((data) => {
        console.log(data);

        var meme1 = data.preview[1];


        // To show the meme
        $(".meme1").attr("src", meme1);


        //To download the meme

        btnExpand1.addEventListener('click', () => {

            let imagePath = data.url;
            
            $("#expand-btn1").prop("href", imagePath)
        });

    });


// For the second meme Box
fetch(url2)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        var meme2 = data.memes[0].preview[1];


        // To show the meme
        $(".meme2").attr("src", meme2);


        //To download the meme
        btnExpand2.addEventListener('click', () => {
            let imagePath = data.memes[0].url;

             $("#expand-btn2").prop("href", imagePath)
        });

    });



//EventListeners for both the buttons
likeBtn1.addEventListener('click', () => {
    window.location.reload();
});
likeBtn2.addEventListener('click', () => {
    window.location.reload();
});