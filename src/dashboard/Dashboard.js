import React, { Component } from 'react';
import ChatList from '../chatlist/chatList'
import {Button, withStyles} from '@material-ui/core'
import styles from './styles'
import ChatView from '../chatview/chatview'
const firebase = require('firebase')


class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedChat: null,
            newChatFormVisible: false,
            email: null,
            chats: []
        }
    }

    render() {
        const {classes} = this.props
        return(
            <div>
            <ChatList history={this.props.history}
            newChatBtnFn={this.newChatBtnClicked}
            selectChatFn={this.selectChat}
            chats={this.state.chats}
            userEmail={this.state.email}
            selectedChatIndex={this.state.selectedChat}></ChatList>
            {
                this.state.newChatFormVisible ? null : <ChatView user={this.state.email}
                chat={this.state.chats[this.state.selectedChat]}></ChatView>
            }
            <Button onClick={this.signOut} className={classes.signOutBtn}>Sign Out</Button>
            </div>
            
        )
    }
   
}

export default withStyles(styles)(Dashboard)