import { WebSocketServer }  from "ws";
import url  from "url";

const wss = new WebSocketServer({port: 8085})

wss.on("connection",(ws,req)=>{

    const queryparam= url.parse(req.url,true).query;
    const username= queryparam.username
    const displayName= queryparam.displayname

    if(!username||!displayName){
        ws.close();
        return;
    }

    console.log(`User connected: ${username}, Display Name: ${displayName}`);
    ws.send(`Hello ${displayName}, you are connected!`);
    ws.send("I will be asking regularly how are you,is it fine?")

    ws.on("message",(data)=>{
        console.log("Client: %s",data)
    })

    ws.on('error',(err)=>{
        console.error(err)
    })

    setInterval(()=>{
        if (ws.readyState === ws.OPEN)
            ws.send("hi how are you??")
    },20000)
    
})