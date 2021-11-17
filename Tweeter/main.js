const tweeter = Tweeter()
const render = Render(tweeter.getPosts())
render.renderPost()

const post1 = () => {
    tweeter.addPost($("input").val())
    $("input").val("")
    render.renderPost()
}


const delete1 = function (postid) {
    tweeter.removePost("" + postid)
    const renderPost = Render(tweeter.getPosts())
    renderPost.renderPost()


}

const addcomment = (postId,text) => {
    tweeter.addComment(postId, text)
    const renderPost = Render(tweeter.getPosts())
    renderPost.renderPost()


}



const delcomment = (postid, commentid) => {
tweeter.removeComment(postid,commentid)
const renderPost = Render(tweeter.getPosts())
    renderPost.renderPost()
}