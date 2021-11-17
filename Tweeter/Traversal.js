$("button").on("click", function(){
    console.log($(this).closest("div").find("span").text());
});

$("button").on("click",function(){
    console.log($(".container").find("p").text());
})

//dal 3lae al exe
