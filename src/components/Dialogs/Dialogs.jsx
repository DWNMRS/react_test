import React from "react";
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={Style.user}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={Style.dialogItem}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let messagesElement = props.state.messages.map(ms => <Message message={ms.message} />);
  let dialogsElement = props.state.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);


  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }


  return (
    <div className={Style.container}>
      <div className={Style.users}>
        {dialogsElement}
      </div>

      <div className={Style.dialog}>
        <div className={Style.messages}>
          {messagesElement}
        </div>

        <div className={Style.messageArea}>
          <textarea ref={newMessageElement} className={Style.message}></textarea>
          <button onClick={addMessage} className={Style.addMessage}>Send</button>
        </div>
      </div>

    </div>
  )
}

export default Dialogs