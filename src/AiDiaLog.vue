<template>
  <div style="overflow-y: hidden; overflow-x: hidden;">
    <div>
      <t-row
          :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      ]"
      >
        <t-col :span="6" style="padding-right: 0;">
          <vue-advanced-chat
              height="calc(100vh - 440px)"
              :current-user-id="UserId1"
              :rooms="JSON.stringify(rooms1)"
              :rooms-loaded="true"
              :single-room="true"
              :room-id="1"
              theme="light"
              :messages="JSON.stringify(messages1)"
              :message-actions="JSON.stringify(messageActions)"
              :messages-loaded="messagesLoaded"
              @message-action-handler="messageActionHandler($event.detail[0])"
              @send-message="sendMessage1($event.detail[0])"
              @fetch-messages="fetchMessages($event.detail[0])"
          />
        </t-col>

        <t-col :span="6" style="padding-left: 0;">
          <vue-advanced-chat
              height="calc(100vh - 440px)"
              :current-user-id="UserId2"
              :rooms="JSON.stringify(rooms2)"
              :rooms-loaded="true"
              :single-room="true"
              :room-id="2"
              theme="dark"
              :messages="JSON.stringify(messages2)"
              :message-actions="JSON.stringify(messageActions)"
              :messages-loaded="messagesLoaded"
              @message-action-handler="messageActionHandler($event.detail[0])"
              @send-message="sendMessage2($event.detail[0])"
              @fetch-messages="fetchMessages($event.detail[0])"
          />
        </t-col>
      </t-row>
    </div>

    <div>
      <t-row
          :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      ]"
      >
        <t-col :span="6" style="padding-right: 0;">
          <vue-advanced-chat
              height="calc(100vh - 430px)"
              :current-user-id="UserId3"
              :rooms="JSON.stringify(rooms3)"
              :rooms-loaded="true"
              :single-room="true"
              :room-id="3"
              theme="dark"
              :messages="JSON.stringify(messages3)"
              :message-actions="JSON.stringify(messageActions)"
              :messages-loaded="messagesLoaded"
              @message-action-handler="messageActionHandler($event.detail[0])"
              @send-message="sendMessage3($event.detail[0])"
              @fetch-messages="fetchMessages($event.detail[0])"
          />
        </t-col>
        <t-col :span="6" style="padding-left: 0;">
          <vue-advanced-chat
              height="calc(100vh - 430px)"
              :current-user-id="UserId4"
              :rooms="JSON.stringify(rooms4)"
              :rooms-loaded="true"
              :single-room="true"
              :room-id="4"
              theme="light"
              :show-new-messages-divider="false"
              :messages="JSON.stringify(messages4)"
              :message-actions="JSON.stringify(messageActions)"
              :messages-loaded="messagesLoaded"
              @message-action-handler="messageActionHandler($event.detail[0])"
              @send-message="sendMessage4($event.detail[0])"
              @fetch-messages="fetchMessages($event.detail[0])"
          />

        </t-col>
      </t-row>
    </div>

    <t-dialog
        :visible.sync="visible"
        header="请写下您的反馈意见"
        body="保存中，请稍后"
        :confirmBtn="{
            content: '提交',
            theme: 'primary',
            loading,
          }"
        :onConfirm="onConfirm"
        :onClose="close"
    >
      <t-input></t-input>
    </t-dialog>
  </div>
</template>

<!--<template>-->
<!--  <div>-->
<!--    <vue-advanced-chat-->
<!--        height="calc(100vh - 200px)"-->
<!--        :current-user-id="currentUserId"-->
<!--        :rooms="JSON.stringify(rooms)"-->
<!--        :rooms-loaded="true"-->
<!--        :single-room="true"-->
<!--        :room-id="2"-->
<!--        theme="dark"-->
<!--        :messages="JSON.stringify(messages)"-->
<!--        :message-actions="JSON.stringify(messageActions)"-->
<!--        :messages-loaded="messagesLoaded"-->
<!--        @message-action-handler="messageActionHandler($event.detail[0])"-->
<!--        @send-message="sendMessage($event.detail[0])"-->
<!--        @fetch-messages="fetchMessages($event.detail[0])"-->
<!--    />-->

<!--    <t-dialog-->
<!--        :visible.sync="visible"-->
<!--        header="请写下您的反馈意见"-->
<!--        body="保存中，请稍后"-->
<!--        :confirmBtn="{-->
<!--        content: '提交',-->
<!--        theme: 'primary',-->
<!--        loading,-->
<!--      }"-->
<!--        :onConfirm="onConfirm"-->
<!--        :onClose="close"-->
<!--    >-->
<!--      <t-input></t-input>-->
<!--    </t-dialog>-->
<!--  </div>-->
<!--</template>-->

<script>
import {register} from 'vue-advanced-chat'
import axios from "axios";
// import { register } from '../../vue-advanced-chat/dist/vue-advanced-chat.es.js'
register()

export default {
  data() {
    return {
      loading: false,
      visible: false,
      notification: null,
      messageActions: [],
      UserId1: 'a',
      UserId2: 'b',
      UserId3: 'c',
      UserId4: 'd',
      rooms1: [
        {
          roomId: '1',
          roomName: 'ChatGPT3.5',
          avatar: 'https://store-images.s-microsoft.com/image/apps.25192.5a0c3d65-1ad4-4359-a368-4a781967bb4a.1c8db6da-52bb-4fd4-84c8-527e90f86c91.d1ff0a4a-997c-4043-838c-69499f2e3c81',
          users: [
            {_id: 'a', username: 'John Snow1'},
            {_id: 'aa', username: 'John Snow3'},
          ]
        }],
      rooms2: [
        {
          roomId: '2',
          roomName: 'llama2',
          avatar: 'https://tws.twcc.ai/wp-content/uploads/2023/11/LLM-ICONS-05.png',
          users: [
            {_id: 'b', username: 'John Snow2'},
            {_id: 'bb', username: 'John Snow3'},
          ]
        }],
      rooms3: [
        {
          roomId: '3',
          roomName: '千义通问',
          avatar: 'data:image/png;base64,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',
          users: [
            {_id: 'c', username: 'John Snow3'},
            {_id: 'cc', username: 'John Snow3'},
          ]
        }],
      rooms4: [
        {
          roomId: '4',
          roomName: '防御模型',
          avatar: 'https://www.youpin66.net/wp-content/uploads/2023/09/20230907132643.jpg',
          users: [
            {_id: 'd', username: 'John Snow4'},
            {_id: 'dd', username: 'John Snoww'},
          ]
        }
      ],
      messages1: [],
      messages2: [],
      messages3: [],
      messages4: [],
      messages: [],
      messagesLoaded: false,

    }
  },

  methods: {
    close() {
      this.visible = false;
    },

    onConfirm() {
      this.loading = true;
      const timer = setTimeout(() => {
        this.loading = false;
        this.visible = false;
        if (!this.notification) {
          this.notification = this.$notify.success({
            title: 'success！',
            content: '反馈提交成功！',
            duration: 1500,
          });
        } else {
          // this.notification.then(ins => ins.close()); // 另一种关闭方法
          this.$notify.close(this.notification);
          this.notification = null;
        }
        clearTimeout(timer);
      }, 500);


    },

    fetchMessages({options = {}}) {
      setTimeout(() => {
        if (options.reset) {
          this.messagesLoaded = true
          this.messages = this.addMessages(false)
        } else {
          this.messages = [...this.addMessages(), ...this.messages]
          this.messagesLoaded = true
        }
        // this.addNewMessage()
      })
    },

    addMessages(reset) {
      const messages = []
      console.log(reset)
      return messages
    },

    sendMessage1(message) {
      this.messages1 = [
        ...this.messages1,
        {
          _id: message.roomId,
          content: message.content,
          senderId: 'a',
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString()
        }
      ]
      this.postMsg(message.content, message.roomId, 'aa')
    },

    sendMessage2(message) {
      this.messages2 = [
        ...this.messages2,
        {
          _id: message.roomId,
          content: message.content,
          senderId: this.UserId2,
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString()
        }
      ]
      this.postMsg(message.content, message.roomId, 'bb')
    },

    sendMessage3(message) {
      this.messages3 = [
        ...this.messages3,
        {
          _id: message.roomId,
          content: message.content,
          senderId: this.UserId3,
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString()
        }
      ]
      this.postMsg(message.content, message.roomId, 'cc')
    },

    sendMessage4(message) {
      this.messages4 = [
        ...this.messages4,
        {
          _id: message.roomId,
          content: message.content,
          senderId: this.UserId4,
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString()
        }
      ]
      this.postMsg(message.content, message.roomId, 'dd')
    },

    postMsg(content, id, senderId) {
      axios({
        url: '/model/process_msg',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          "msg": content,
          "id": id
        }
      }).then(response => {
        this.addNewMessage(response.data.data.content, id, senderId, response.data.data.illegal)
      }).catch(error => {
        console.error('请求失败:', error);
      });
    },

    addNewMessage(content, roomId, senderId, illegal) {
      switch (roomId) {
        case '1':
          setTimeout(() => {
            this.messages1 = [
              ...this.messages1,
              {
                _id: roomId,
                content: content,
                senderId: senderId,
                timestamp: new Date().toString().substring(16, 21),
                date: new Date().toDateString()
              }
            ];
          }, 2000);
          break;

        case '2':
          setTimeout(() => {
            this.messages2 = [
              ...this.messages2,
              {
                _id: roomId,
                content: content,
                senderId: senderId,
                timestamp: new Date().toString().substring(16, 21),
                date: new Date().toDateString()
              }
            ];
          }, 2000);
          break;

        case '3':
          setTimeout(() => {
            this.messages3 = [
              ...this.messages3,
              {
                _id: roomId,
                content: content,
                senderId: senderId,
                timestamp: new Date().toString().substring(16, 21),
                date: new Date().toDateString()
              }
            ];
          }, 2000);
          break;

        case '4':
          setTimeout(() => {
            console.log(illegal)
            this.messages4 = [
              ...this.messages4,
              {
                _id: roomId,
                content: content,
                senderId: senderId,
                timestamp: new Date().toString().substring(16, 21),
                date: new Date().toDateString(),
              }
            ]
          }, 1000);
          if (!illegal) {
            setTimeout(() => {
              console.log(illegal)
              this.messages4 = [
                ...this.messages4,
                {
                  _id: roomId,
                  content: "❌存在非法行为",
                  senderId: senderId,
                  timestamp: new Date().toString().substring(16, 21),
                  date: new Date().toDateString(),
                  system: true
                }
              ]
            }, 2000);
          }
          break;
      }

    },

    messageActionHandler({action}) {
      switch (action.name) {
        case 'tumbup':
          this.visible = true;
          break;
      }
    }
  },
  created() {
    this.messageActions.push({
      name: 'tumbup',
      title: '👎️'
    });
  }
}
</script>

<style scoped>

</style>
