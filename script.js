// the meme fetching APIs
const url1 = "https://meme-api.com/gimme";
const url2 = "https://api.pymeme.repl.co/";



// For the first meme Box
const setMemeOne = async (url1) => {
    try {
        const response = await fetch(url1);
        const data = await response.json();
        const meme1 = await data.url;

        // To show the meme
        $(".meme1").attr("src", meme1);
        $(".meme1").attr("alt", "Random Meme");

        //To Expand the meme
        $("#expand-btn1").click(() => {
            $("#expand-btn1").prop("href", meme1)

        });
    } catch (error) {
        alert("Sorry, Unable to get the image right now. Please try again later!!!")
        console.log(error);
    }
}


// For the second meme Box
const setMemeTwo = async (url2) => {
    try {
        const response = await fetch(url2);
        const data = await response.json();
        const meme2 = await data.meme["image url"];

        // To show the meme
        $(".meme2").attr("src", meme2);
        $(".meme2").attr("alt", "Random Meme");

        //To Expand the meme
        $("#expand-btn2").click(() => {
            $("#expand-btn2").prop("href", meme2)

        });
    } catch (error) {
        alert("Sorry, Unable to get the image right now. Please try again later!!!")
        console.log(error);
    }

}

//Invoking both the meme showing functions
setMemeOne(url1);
setMemeTwo(url2);

//EventListeners for both the Like buttons
$("#like-btn1").click(() => {
    window.location.reload();
});

$("#like-btn2").click(() => {
    window.location.reload();
});