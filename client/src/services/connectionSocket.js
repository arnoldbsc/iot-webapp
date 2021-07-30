export default class Socket {
    constructor(endpoint, onOpen, onMessage, onClose, onError){
        this.endpoint = endpoint
        this.webSocket = ''
        this.onOpen = onOpen
        this.onMessage = onMessage
        this.onClose = onClose
        this.onError = onError
        this.state = 0
    }
    
    init() {
        this.webSocket = new WebSocket(this.endpoint)
        this.webSocket.addEventListener('open', (event) => {
            this.state = event.target.readyState
            this.onOpen()
        })
        this.webSocket.addEventListener('message', (event) => {
            this.state = event.target.readyState
            this.onMessage(JSON.parse(event.data))
        })
        this.webSocket.addEventListener('close', (event) => {
            this.state = event.target.readyState
            this.onClose()
        })
        this.webSocket.addEventListener('error', (event) => {
            this.state = event.target.readyState
            this.onError(event.type + '\nState: ' + this.state)
        })
    }

    sendData(data) {
        if(this.state === 1){
            this.webSocket.send(JSON.stringify(data))
        }
        else{
            console.log('No se tiene conexion con el servidor, state: ' + this.state)
        }
    }

    closeConnection() {
        if(this.state === 1){
            this.webSocket.close()
        }
    }
}