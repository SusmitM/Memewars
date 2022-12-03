let url1 = "https://meme-api.com/gimme";
let url2 = "https://api.pymeme.repl.co/";


// For the first meme Box
fetch(url1)
    .then(response => response.json())
    .then((data) => {
        console.log(data.url);

        var meme1 = data.url;


        // To show the meme
        $(".meme1").attr("src", meme1);


        //To download the meme

        $("#expand-btn1").click(() => {


            $("#expand-btn1").prop("href", meme1)


        });

    });


// For the second meme Box
fetch(url2)
    .then(response => response.json())
    .then((data) => {

        var secondKey = Object.keys(data.meme)[2];
        var meme2 = data.meme[secondKey];


        // To show the meme
        $(".meme2").attr("src", meme2);


        //To download the meme
        $("#expand-btn2").click(() => {

            $("#expand-btn2").prop("href", meme2)

        });



    });



//EventListeners for both the buttons
$("#like-btn1").click(() => {
    window.location.reload();
});

$("#like-btn2").click(() => {
    window.location.reload();
});