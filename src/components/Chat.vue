<template>
  <div class="chat container">
      <h2 class="center teal-text">Awesome Chat</h2>
      <p class="center teal-text">Random people chatting</p>
      <div class="card">
          <div class="card-content">
              <ul class="messages" v-chat-scroll>
                  <li v-for="message in messages" :key="message.id" class="message"> 
                      <span class="teal-text name">{{ message.name }}</span>
                      <br>
                      <span class="grey-text text-darken-3 content">{{ message.content }}</span>
                      <span class="grey-text time">{{ message.timestamp }}</span>
                  </li>
              </ul>
          </div>
          <div class="card-action">
              <NewMessage :name="name" />
          </div>
      </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style>
.chat h2{
    font-size: 2.6em;
    margin: 30px;
}
.chat span{
    
}
.chat .name{
font-size: 0.8em;
}
.chat .time{
    display: block;
    font-size: 0.8em;
}
.messages{
    max-height: 300px;
    overflow: auto;
}
.message {
    background-color: #e5e2e2;
    padding: 5px;
    margin: 10px;
}
.content{
    font-size: 1.3em;
}
.messages::-webkit-scrollbar-thumb{
    background-color: #aaa;
}
</style>