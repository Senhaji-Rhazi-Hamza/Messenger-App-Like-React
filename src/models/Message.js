// @flow
class Message {

    idMessage: number ;
    idReceiver: number ;
    idSender: number ;
    msgTxt : string ;
    creationTimeStmp : Date;
    
    constructor(idMessage:number, idReceiver:number, idSender:number, msgTxt:string)
    {
        this.idMessage = idMessage
        this.idReceiver = idReceiver
        this.idSender = idSender
        this.msgTxt = msgTxt
        this.creationTimeStmp = new Date()
    }
}

export default Message;