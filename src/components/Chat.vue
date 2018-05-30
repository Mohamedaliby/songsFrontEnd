<template>
<v-layout pt-4 lang="ar" dir="rtl" align-center justify-center>
  <v-flex xs12 sm8 md4>
   <v-card>
     <div class="white elevation-2">
      <v-toolbar flat dense class="teal">
        <v-toolbar-title class="white--text">chat</v-toolbar-title>
        </v-toolbar>
        
            <!-- {{me}} -->
            <v-flex class="scrollable" >
                  <div class="chatList" :class="{mine: me === m.sender}" v-for="m in chatMessages" :key="m.m">
              <p  :class="{'darken-3': me === m.sender, 'grey lighten-2': me !== m.sender}" class="message teal" >{{m.m}}</p> 
                  </div>
            </v-flex>
              <v-container class="chat">
               <v-flex xs12 sm12 order-xs2 style="position: relative;">
                       <v-toolbar
                   dense flat class="white chatbar">
                   <v-text-field
                    placeholder="اكتب رسالة"
                    v-model="message"
                    @keyup.enter="send"
                    ></v-text-field>
                  <div class="error white--text" v-html="error"/>
                  <v-btn
                    color="teal darken-4"
                    dark
                    small
                    fab
                    v-if="message"
                    class="white"
                    @click="send">
                    send
                  </v-btn>
                </v-toolbar>
               </v-flex>
          </v-container>
        </div>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>

export default {
  name: "chat",
  data() {
    return {
      users:[],
      message: "",
      chatMessages:[{
        sender: 'a@a.com',
         m: 'a@a.com'
      },
      {
        sender:'msse',
        m: 'yedccccccccccccc cccccccccccccc cccccccccccccc ccccccccccccc ccccccccc ccccccs'
      },
      {
        sender: 'a@a.com',
        m: 's'
      },{
        sender:'uu',
        m: 'hi'
      }],
      error: null,
    };
  },
  computed:{
    me(){
      return this.$store.state.user.email;
    }
  },
  watch: {
    message(value) {  
          this.scrollToEnd()
      // console.log("email changed", value);
    }
  },
  methods: {
     scrollToEnd () {
        var container = this.$el.querySelector('.scrollable')
        container.scrollTop = container.scrollHeight
      },
     async send(){
        if (this.message !== null) {
            await this.chatMessages.push({
             m: this.message,
            sender:this.$store.state.user.email
            })
              this.message = null
              var container = this.$el.querySelector('.scrollable')
              container.scrollTop = container.scrollHeight 
        }
      }
  },
  created: () => {
  },
  updated(){
            this.scrollToEnd();
        }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .right {
  text-align: left !important;
} */
/* @media only screen and (max-width: 599px){
.chat {
 padding-right: 0 !important;
  padding-left: 0 !important;
}

} */

.mine {
  padding-right: 15px;
  padding: 10px;
  text-align: right;
}
.message {
  border-radius: 50% 50% 0 50%;
  border: 8px solid teal;
  display: inline-block;
  padding: 15px;
  max-width: 50%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;
}
.teal {
  color: white;
}
/* .chatList{
 padding: 10px; 
} */
.lighten-2 {
  border-radius: 50% 50% 50% 0;
  color: black;
}
.chatbar {
  /* position: absolute; */
  vertical-align: bottom;
}

.typer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 4.9rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -5px 10px -5px rgba(0, 0, 0, 0.2);
}

.typer input[type="text"] {
  position: absolute;
  padding: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
}
.scrollable {
  overflow-y: auto;
  height: 90vh;
}
</style>
