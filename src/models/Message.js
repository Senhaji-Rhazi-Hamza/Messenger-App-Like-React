// @flow
import { users } from "./User";
import { gql } from "apollo-boost";

class Message {
  idMessage: number;
  idReceiver: number;
  idSender: number;
  msgTxt: string;
  creationTimeStmp: Date;

  constructor(
    idMessage: number,
    idReceiver: number,
    idSender: number,
    msgTxt: string
  ) {
    this.idMessage = idMessage;
    this.idReceiver = idReceiver;
    this.idSender = idSender;
    this.msgTxt = msgTxt;
    this.creationTimeStmp = new Date();
  }
}
export let messagesUsers: Array<Array<Message>> = [];

for (let i: number = 0; i < users.length; i++) {
    messagesUsers.push([])
  for (let j: number = 0; j < users.length; j++) {
    messagesUsers[i].push(new Message(parseInt(`${i}${j}`), i, j, (`Message from user ${j} to user ${i}`)));
  }
}

export default Message;


export function getUserMessagesQuery(idUser : number) {

return gql`
    query {
    messages(where: {id_receiver: {_eq: ${idUser}}}, order_by: {creation_time_stmp: desc}) {
    creation_time_stmp
    id_message
    id_receiver
    id_sender
    msg_txt
  }
}
`
    
}