let login_form= document.querySelector("#login-form")
let loginUsername= document.querySelector("#username")
let loginPassword= document.querySelector("#password")
let loginErr= document.querySelector("#error-message")
let dashboard= document.querySelector("#dashboard")
let loginContainer= document.querySelector("#login-container")
let signupbt= document.querySelector("#signup")
let formbt= document.querySelector("#formbt")
let formhead= document.querySelector("#formhead")
let formType=true;
let userdata,posts,cred;
let count

if(localStorage.getItem('idcount'))
    count=Number.parseInt(localStorage.getItem('idcount'))
else{
    count=99
    localStorage.setItem('idcount',count)
}

let postForm= document.querySelector("#post-form")
let postContent= document.querySelector("#post-content")
let postsContainer= document.querySelector("#posts-container")


postForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    let postobj={"id":++count,"username":userdata.username,"content":postContent.value,"likes":0,"time":Date().toLocaleString(),"comments":[]}
    posts=JSON.parse(localStorage.getItem('posts'))||[]
    posts.push(postobj)
    localStorage.setItem('posts',JSON.stringify(posts))
    postContent.value=""
    localStorage.setItem('idcount',count);
    loadcontent()    
})

const randCol=()=>{
    return Math.floor(20+Math.random()*220)
}

signupbt.addEventListener('click',()=>{
    if(formType){
        formhead.innerHTML=formbt.innerHTML="Sign Up";
        formType=false;
        signupbt.innerHTML="already have an account"
    }
    else{
        formhead.innerHTML=formbt.innerHTML="Login";
        formType=true;
        signupbt.innerHTML="Create a new account"
    }
})


login_form.addEventListener('submit',(event)=>{
    event.preventDefault();
    cred=JSON.parse(localStorage.getItem('cred'))||[]
    let username=loginUsername.value.trim()
    let password=loginPassword.value.trim()
    if(formType){
        userdata=cred.find(item=>(item.username==username&&item.password==password));
        if(!userdata){
            loginErr.classList.remove('hidden')
            return;
        }
        loginContainer.classList.add("hidden")
        dashboard.classList.remove("hidden")
        loginErr.classList.add('hidden')
        loadcontent()    
    }
    else{
        loginErr.classList.add('hidden')
        userdata={"username":username,"password":password,"likes":[]}
        cred.push(userdata)
        localStorage.setItem('cred',JSON.stringify(cred))
        loginContainer.classList.add("hidden")
        dashboard.classList.remove("hidden")
        loadcontent()    
    }
})

const loadcontent=()=>{
    posts=JSON.parse(localStorage.getItem('posts'))||[]
    postsContainer.innerHTML=""
    for(let post of posts){
        let div=document.createElement('div')
        let likeimg="./imgs/like.png"
        if(userdata.likes.find(item=>item==post.id))
            likeimg="./imgs/liked.png"
        div.classList="bg-white p-6 rounded-lg shadow-md"
        div.innerHTML=`<div class="flex items-center mb-4">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-[rgb(${randCol()},${randCol()},${randCol()})] flex items-center justify-center text-white font-bold">
                        ${post.username[0]}
                    </div>
                    <div class="ml-3">
                        <p id="pusername" class="text-gray-900 font-bold">${post.username}</p>
                        <p class="text-gray-600 text-sm">${post.time}</p>
                    </div>
                </div>
                <p class="text-gray-800 mb-4">
                    ${post.content}
                </p>
                <div class="flex space-x-4 items-center mb-4">
                    <button onclick="handleLike(this.firstElementChild,${post.id})" class="text-blue-500 hover:text-blue-600 flex items-center space-x-2">
                        <img class="w-6 h-6" src="${likeimg}" alt="Like Icon" >
                        <span id="like-count" class="text-gray-700">${post.likes} Likes</span>
                    </button>
                    <button onclick="showComments(${post.id},this.parentElement.nextElementSibling)" class="text-blue-500 hover:text-blue-600">Comment</button>
                </div>
                <div id="comment-section" class="space-y-4 hidden">
                </div>`
        postsContainer.appendChild(div);
    }
}


const handleLike=(obj,postid)=>{
    let indp=posts.findIndex(item=>item.id==postid)
    if(obj.getAttribute('src')=="./imgs/like.png"){
        obj.setAttribute('src',"./imgs/liked.png")
        userdata.likes.push(postid)
        posts[indp].likes++
    }
    else{
        obj.setAttribute('src',"./imgs/like.png")
        userdata.likes.splice(userdata.likes.findIndex(item=>item==postid))
        posts[indp].likes--
    }
    localStorage.setItem('posts',JSON.stringify(posts))
    let indu=cred.findIndex(item=>item.username==userdata.username)
    cred.splice(indu,1,userdata)
    localStorage.setItem('cred',JSON.stringify(cred))
    loadcontent()
}


const showComments=(postId,commentContainer)=>{
    if(commentContainer.classList.contains('hidden')){
        let comments =posts.find(item=>item.id==postId).comments;
        commentContainer.innerHTML=`<div class="flex items-center space-x-3">
            <input type="text"  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Write a comment...">
            <button onclick="addComment(${postId},this.previousElementSibling)" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Post</button>
         </div>`;
        for(let comment of comments){
            let div=document.createElement('div')
            div.classList="flex items-start space-x-3"
            div.innerHTML=`<div class="flex-shrink-0 h-8 w-8 rounded-full bg-[rgb(${randCol()},${randCol()},${randCol()})] flex items-center justify-center text-white font-bold">
                     ${comment.username[0]}
                </div>
                <div>
                    <p class="text-gray-900 font-bold">${comment.username}</p>
                    <p class="text-gray-700">${comment.content}</p>
                </div>`
            commentContainer.prepend(div);
        }
    }
    else{
        commentContainer.innerHTML=""
    }
    commentContainer.classList.toggle('hidden')
}



const addComment=(postId,newComment)=>{
    let index =posts.findIndex(item=>item.id==postId);
    let comment={"username":userdata.username,"content":newComment.value}
    posts[index].comments.push(comment)
    newComment.value=""
    localStorage.setItem('posts',JSON.stringify(posts))
    let x=newComment.parentElement.parentElement;
    x.classList.add('hidden')
    showComments(postId,x)
}