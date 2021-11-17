 
//  const myQuery = function (selector) {
//      if (selector[0] == "#") {
//          const elementId = selector.split("#")[1] //will return everything after the # in selector 
//      return document.getElementById(elementId)
//          }
//      }

    
//  console.log(myQuery("#yourElementID"))

//  const sayHi = function(){
//      console.log("Hi!")
//    }
  
//    const $ = sayHi
  
//    $() //prints "Hi!"

//    $("h4")
  
// $("h4").css("color", "red") 

// $("h1").css("background-color", "blue")
// $(".red-div").css("background-color", "red")
// $("li:first-child").css("background-color", "green")
// $("li:last-child").css("background-color", "pink")
// $("#brown-div").css("background-color", "brown")

// $("#b1").addClass("box")
// $("#b2").addClass("box")

// $('#my-input').val()

// const color = $("div").data().color  
// console.log(color) //prints #2980b9

$("button").on("click", function () {
    alert($("#my-input").val())
})

// $('button').on('click', function () {
//     alert('clicked!')
//   })

//   $('button').click(function () {
//     alert('clicked!')
//   })

//   const clicked = function () {
//     alert('clicked!')
//   }
  
//   $('button').click(clicked)

// $(".box").hover(function()
// {
//     $(this).css("background-color","green")
// });

$(".box").hover(function(){
    $(this).css("background-color", "blue")
})

  $("#b1").hover(function () {
    $("#b1").css("background-color", "blue")
})

const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)
$("body").append(elem)

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')


// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item)

const text = "Banana"
const item = $(`<div class=fruit>${text}</div>`)

console.log(item) //the same

//oce we click on santance feed me more it well append another santance under it with new div 
$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    
    $("body").append(divCopy)
  })

  const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

for(let name of names){
  $("body").append(`<div>${name}</div>`)
}

const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]
  
  for (let name of names) {
    $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
  }

  //this code will remove all paragraphs in the code 
  //$("p").remove()

  //this remove specific things 
  $("p").remove(".brown")

  $(".box").hover(function(){
    $(".box").remove()
})

$("#plague").hover(function(){
    $("#plague").remove()
})

// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })
  
//   $("#blogs").on("click", ".blog", function(){
//     $(".blog").text("blargh") 
//   })

  $("button").on("click", function(){
      $("#blogs").append("<div class='blog'>cool blog </div>")

  })

  $("blogs").on("click" , function(){
      $(".blog").text("blargh")
  })



//   const addDiv = function() {
//     $("body").append("<div class=box></div>");
    
//     $(".box").on("click", function() {
//       alert("hi");
//     });
//   };
  
//   $("button").on("click", function() {
//     addDiv();
//   });

  const addDiv = function() {
    $("body").append("<div class=box></div>");
  };
  
  $("button").on("click", function() {
    addDiv();
  });
  
  $("body").on("click", ".box", function() {
    alert("hi");
  });



  $("button").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
  })
  
  $("#blogs").on("click", ".blog", function(){
    $(this).text("uncool blog") 
  })

  // dal al jquery execrcises

  
