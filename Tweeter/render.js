const Render=function(posts){
  
  const renderPost = function()
   {
    $("#posts").empty() 
    let count=1
    for (post of posts) {
        $("#posts").append("<div class='post' data-id='p"+count+"' id='p"+count+"'> "+ post.text+"</div>")
        for(comment of post.comments){
                
            $("#p"+count).append("<div class='comments'  data-id='"+comment.id+"'><ul><li><button class='delete_comment' >x</button>"+comment.text+"</li></ul></div></div>")
          
        }
       
        $("#p"+count).append("<div> <input type='text' placeholder='enter your comment' class='commentinput'></input><button  class = 'addcomment' >comment</button></div>")
        $("#p"+count).append("<div class='delete' onclick= "+"delete1('"+post.id+"')"+">delete</div>")

        count++
    }
 
    $(".delete_comment").on("click", function() {
        delcomment($(this).closest(".post").data().id ,$(this).closest(".comments").data().id )
      
       });

       $(".addcomment").on("click", function() {
        addcomment($(this).closest(".post").data().id  ,$(this).siblings(".commentinput").val() )
       
       });





    

 
   }
   return{ renderPost:renderPost}
}

