
const Tweeter= function(){

        let posts = [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]
    

const getPosts = function(){
    return posts
}

const addPost = function(text)
{
    posts.push({
        text:text ,
        id:"p" + (posts.length+1),
        comments:[]
        
    })    

} 


const removePost = function(postId)
{
    console.log("removepost");


   const remove = posts.filter(post => post.id !== postId);
        posts = remove
    
}


const addComment = function(postId , text)
{
 
        let count=0
    for (post of posts) {
        count += post.comments.length 
    }
    for(post of posts)
    {
        if (post.id == postId) {
            post.comments.push({
                id: "c" + (count+1),
                text: text
            })
        }
    }
}

const removeComment = function(postID , commentId){
    for (post of posts)
    {
        if(postID == post.id)
        {
            for(comment of post.comments)
            {
                if(commentId == comment.id)
                {
                   
                    const remove = post.comments.filter(comment => comment.id !== commentId)
                    post.comments = remove
                }
            }
        }
    }




}


return{
    addPost:addPost,
    getPosts:getPosts,
    removePost:removePost,
    addComment:addComment,
    removeComment:removeComment
    
}
}


