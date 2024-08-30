const messagesDiv = document.getElementById('messages');
const input = document.getElementById('messageInput');
const state = document.querySelector("#state");
const sendButton = document.querySelector("#sendButton");
const connect_form=document.querySelector("#connect-form")
const disconnect=document.querySelector("#disconnect")
const username=document.querySelector("#username")
const displayName=document.querySelector("#displayName")
let socket,retry=false,un,dn,timeout;

const connect=()=>{
    socket = new WebSocket(`ws://localhost:8085?username=${un}&displayname=${dn}`);
    
    socket.addEventListener('open', () => {
        connect_form.classList.add("hidden")
        disconnect.classList.remove("hidden") 
        console.log('Connected to the WebSocket server');
        state.innerHTML="Connected"
        state.style.backgroundColor='green'
    });
    
    
    socket.addEventListener('message', (event) => {
        const messageElement = document.createElement('p');
        messageElement.textContent ="Server: "+event.data;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
    
    socket.addEventListener('close', () => {
        console.log('Disconnected from the WebSocket server');
        state.innerHTML="Disconnected"
        connect_form.classList.remove("hidden") 
        disconnect.classList.add("hidden") 
        state.style.backgroundColor='red'
        if(retry)
            timeout=setTimeout(connect, 5000);
    });
    
    socket.addEventListener('error',(err)=>{
        console.log(err);
        socket.close()
    })

}

sendButton.addEventListener('click',()=>{
    const message = input.value.trim();
    if (message) {
        console.log("ok")
        const messageElement= document.createElement('p');
        messageElement.textContent=`${dn}: `+message;
        messagesDiv.appendChild(messageElement)
        socket.send(message);
        input.value = ' ';
        messagesDiv.scrollTop=messagesDiv.scrollHeight;
    }
})


connect_form.addEventListener('submit',(event)=>{
    event.preventDefault()
    retry=true;
    un=username.value;
    dn=displayName.value;
    clearTimeout(timeout);
    connect()
    
})

disconnect.addEventListener('click',()=>{
    if(socket.readyState===WebSocket.OPEN){
        socket.close()
    }
    retry=false;
})

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});