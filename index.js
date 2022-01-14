var chat = {
  style: document.querySelector('style.setting'),
  init() {
    chat.update();
  },
  update() {
    let cssCode = ''

    if (settings.wasd.theme.toString() === '0') {
      cssCode += 'body{--wasd-color-black:#000000!important;--wasd-color-black--rgb:0,0,0!important;--wasd-color-white:#ffffff!important;--wasd-color-white--rgb:255,255,255!important;--wasd-color-corp-prime:#1A202C!important;--wasd-color-corp-prime--rgb:26,32,44!important;--wasd-color-corp-gray:#848CA0!important;--wasd-color-corp-gray--rgb:132,140,160!important;--wasd-color-dark-blue:#483cb8!important;--wasd-color-corp-blue:#258fe5!important;--wasd-color-corp-blue--rgb:37,143,229!important;--wasd-color-warning:#d85252!important;--wasd-color-warning--rgb:216,82,82!important;--wasd-color-success:#6ba131!important;--wasd-color-success--rgb:107,161,49!important;--wasd-color-event1:#913CA7!important;--wasd-color-event2:#5BC3C1!important;--wasd-color-event3:#F5A623!important;--wasd-color-xp:#9013fe!important;--wasd-color-bordo:#a5276d!important;--wasd-color-prime:#ffffff!important;--wasd-color-prime--rgb:255,255,255!important;--wasd-color-switch:#1A202C!important;--wasd-color-switch--rgb:26,32,44!important;--wasd-color-second:#f0f0f8!important;--wasd-color-third:#e0e0e8!important;--wasd-color-gray1:#848ca0!important;--wasd-color-gray2:#444858!important;--wasd-color-gray3:#242830!important;--wasd-color-text-prime:rgba(26, 32, 44, 1)!important;--wasd-color-text-second:rgba(26, 32, 44, 0.8)!important;--wasd-color-text-third:rgba(26, 32, 44, 0.64)!important;--wasd-color-text-fourth:rgba(26, 32, 44, 0.48)!important;--wasd-color-text-disabled:rgba(26, 32, 44, 0.24)!important;--wasd-color-bg-prime:#f0f0f8!important;--wasd-color-bg-second:#e0e0e9!important;--color-lowest-layer:rgba(198, 209, 225, 0.2)!important;--color-background:246,247,248!important;--color-first-layer:#FBFBFB!important;--color-second-layer:#FFFFFF!important;--color-upper-layer:#FFFFFF!important;--color-switch:20,24,32!important;--color-shadow:36,102,146!important;--color-system-blue:0,143,236!important;--color-system-dark-blue:13,110,200!important;--color-system-white:255,255,255!important;--color-system-black:0,0,0!important;--color-system-warning:252,77,100!important;--color-system-attention:243,173,56!important;--color-system-success:62,189,65!important;--color-system-xp:144,19,254!important;--color-additional-yellow-light:#F0DF47!important;--color-additional-yellow-dark:#DBC92A!important;--color-additional-yellow-orange:#F8B23E!important;--color-additional-orange:#E88021!important;--color-additional-red:#D03F3F!important;--color-additional-pink:#CD317C!important;--color-additional-lilac:#952BA7!important;--color-additional-violet:#6227E0!important;--color-additional-blue:#2264E3!important;--color-additional-blue-light:#27B4E0!important;--color-additional-aquamarine:#00CBBF!important;--color-additional-blue-green:#27E087!important;--color-additional-green-acid:#2BE027!important;--color-additional-green:#139520!important;--color-additional-green-light:#A6D323!important;--color-additional-gray:#898989!important}';
    } else if (settings.wasd.theme.toString() === '1') {
      cssCode += 'body{--wasd-color-black:#000000!important;--wasd-color-black--rgb:0,0,0!important;--wasd-color-white:#ffffff!important;--wasd-color-white--rgb:255,255,255!important;--wasd-color-corp-prime:#1A202C!important;--wasd-color-corp-prime--rgb:26,32,44!important;--wasd-color-corp-gray:#848CA0!important;--wasd-color-corp-gray--rgb:132,140,160!important;--wasd-color-dark-blue:#483cb8!important;--wasd-color-corp-blue:#258fe5!important;--wasd-color-corp-blue--rgb:37,143,229!important;--wasd-color-warning:#d85252!important;--wasd-color-warning--rgb:216,82,82!important;--wasd-color-success:#6ba131!important;--wasd-color-success--rgb:107,161,49!important;--wasd-color-event1:#913CA7!important;--wasd-color-event2:#5BC3C1!important;--wasd-color-event3:#F5A623!important;--wasd-color-xp:#9013fe!important;--wasd-color-bordo:#a5276d!important;--wasd-color-prime:#1A202C!important;--wasd-color-prime--rgb:26,32,44!important;--wasd-color-switch:#ffffff!important;--wasd-color-switch--rgb:255,255,255!important;--wasd-color-second:#141820!important;--wasd-color-third:#0c1014!important;--wasd-color-gray1:#242830!important;--wasd-color-gray2:#444858!important;--wasd-color-gray3:#848ca0!important;--wasd-color-text-prime:rgba(255, 255, 255, 1)!important;--wasd-color-text-second:rgba(255, 255, 255, 0.8)!important;--wasd-color-text-third:rgba(255, 255, 255, 0.64)!important;--wasd-color-text-fourth:rgba(255, 255, 255, 0.48)!important;--wasd-color-text-disabled:rgba(255, 255, 255, 0.24)!important;--wasd-color-bg-prime:#141820!important;--wasd-color-bg-second:#0c1014!important;--color-lowest-layer:rgba(0, 0, 0, 0.2)!important;--color-background:20,24,32!important;--color-first-layer:#1A212D!important;--color-second-layer:#1D2736!important;--color-upper-layer:#212D3F!important;--color-switch:246,247,248!important;--color-shadow:9,9,9!important;--color-system-blue:0,143,236!important;--color-system-dark-blue:13,110,200!important;--color-system-white:255,255,255!important;--color-system-black:0,0,0!important;--color-system-warning:252,77,100!important;--color-system-attention:243,173,56!important;--color-system-success:62,189,65!important;--color-system-xp:144,19,254!important;--color-additional-yellow-light:#F0DF47!important;--color-additional-yellow-dark:#DBC92A!important;--color-additional-yellow-orange:#F8B23E!important;--color-additional-orange:#E88021!important;--color-additional-red:#D03F3F!important;--color-additional-pink:#CD317C!important;--color-additional-lilac:#952BA7!important;--color-additional-violet:#6227E0!important;--color-additional-blue:#2264E3!important;--color-additional-blue-light:#27B4E0!important;--color-additional-aquamarine:#00CBBF!important;--color-additional-blue-green:#27E087!important;--color-additional-green-acid:#2BE027!important;--color-additional-green:#139520!important;--color-additional-green-light:#A6D323!important;--color-additional-gray:#898989!important}';
    }

    if (settings.wasd.mf) {
      cssCode += `wasd-chat-follower-message { display: none!important; }`;
    }

    if (settings.wasd.ms) {
      cssCode += `wasd-chat-system-message { display: none!important; }`;
    }

    if (settings.wasd.st.toString() === '0') {
      if (settings.wasd.frs.toString() === '0') {
        cssCode += '.message__info img.sticker { display: block; height: 128px!important; width: 128px!important; margin-top: 8px; }'
      } else if (settings.wasd.frs.toString() === '1') {
        cssCode += '.message__info img.sticker { display: block; height: 56px!important; width: 56px!important; margin-top: 8px; }'
      }
    } else if (settings.wasd.st.toString() === '1') {
      cssCode += 'img.sticker { width: 28px!important; height: 28px!important; margin-top: 0px!important; display: inline!important; vertical-align: middle!important; margin: -.5rem 0!important; }';
    } else if (settings.wasd.st.toString() === '2') {
      cssCode += '.block__messages__item[sticker] { display: none!important; }';
    } else if (settings.wasd.st.toString() === '3') {
      cssCode += 'img.sticker { display: none!important; }';
      cssCode += '.sticker_text { display: inline!important; }';
    }

    if (!settings.wasd.anim) settings.wasd.anim = '0'
    if (!settings.wasd.nma) settings.wasd.nma = '15000'
    if (settings.wasd.anim.toString() === '0') {
      let anim0 = `.block__messages__item {animation: fadeOut 0s ease ${settings.wasd.nma.toString()}ms forwards;-webkit-animation: fadeOut 0s ease ${settings.wasd.nma.toString()}ms forwards;}`
      cssCode += `${settings.wasd.nma.toString() == '0' ? '' : `${anim0}`}`
    } else if (settings.wasd.anim.toString() === '1') {
      let anim1 = `${settings.wasd.nma.toString() == '0' ? '' : `, fadeOut 0.5s ease ${settings.wasd.nma.toString()}ms forwards`}`
      cssCode += `.block__messages__item {animation: fadeInRight .3s ease forwards${anim1};-webkit-animation: fadeInRight .3s ease forwards${anim1};}`
    }

    if (settings.wasd.hmb) {
      cssCode += '.chat-message-mention { font-weight: 700!important; }';
    }

    if (settings.wasd.can) {
      cssCode += '.info__text__status:after {content: ":";color: var(--yt-live-chat-primary-text-color, rgba(var(--wasd-color-switch--rgb),.88));margin-left: -7px;padding-right: 7px;}'
    }

    cssCode += `div.message-text > span > a { color: ${settings.wasd.lc != '#000000' ? settings.wasd.lc : 'inherit'}; }`;

    if (!settings.wasd.mtc) settings.wasd.mtc = 'rgba(var(--wasd-color-switch--rgb), .88)'
    cssCode += `.message__info__text {color: ${settings.wasd.mtc};}`

    if (typeof settings.wasd.mentionSelf != 'boolean') settings.wasd.mentionSelf = true
    if (typeof settings.wasd.cms != 'string') settings.wasd.cms = 'rgba(var(--wasd-color-switch--rgb), .08)'

    cssCode += `.message.has-mention {background-color: ${settings.wasd.cms}!important}`

    if (typeof settings.wasd.mtsc != 'string') settings.wasd.mtsc = '#000'
    if (settings.wasd.mts) {
      cssCode += `.message__info__text {text-shadow: 0 0 1px ${settings.wasd.mtsc}, 0 0 2px ${settings.wasd.mtsc};}`
    }

    if (typeof settings.wasd.list == 'undefined') settings.wasd.list = {
      blockUserList: {},
      blockTermList: {},
      highlightUserList: {},
      highlightTermList: {},
      blockRoleList: {}
    }
    if (typeof settings.wasd.rMBL == 'undefined') settings.wasd.rMBL = true
    for (let user in settings.wasd.list.blockUserList) {
      cssCode += `.block__messages__item[usernamelc="${user.toLowerCase()}"] {display: none!important;}`
      if (settings.wasd.rMBL) {
        cssCode += `.block__messages__item[mention*="${user.toLowerCase()}"] {display: none!important;}`
      }
    }
    for (let term in settings.wasd.list.highlightTermList) {
      let s = settings.wasd.list.highlightTermList[term]
      cssCode += `.block__messages__item[message*="${s.term}"] {background-color: ${s.color}!important;}`
    }

    for (let term in settings.wasd.list.blockTermList) {
      cssCode += `.block__messages__item[message*="${term}"] {display: none!important;}`
    }

    for (let user in settings.wasd.list.highlightUserList) {
      let s = settings.wasd.list.highlightUserList[user]
      cssCode += `.block__messages__item[usernamelc="${s.username.toLowerCase()}"] {background-color: ${s.color}!important;}`
    }

    if (chat.style) {

      chat.style.innerHTML = '';
      chat.style.appendChild(document.createTextNode(cssCode));

      console.log('style inited')

    }
  }
}


const socket = {
  socketd: null,
  streamId: 0,
  channelId: 0,
  intervalcheck: null,
  current: null,
  stream_url: null,
  isLiveInited: false,
  intervals: [],
  initChat() {
    loader.updateStatus('Получаем данные пользователя', new URL(document.URL).searchParams.get('channel_name')) // log
    $.ajax({
      url: `https://wasd.tv/api/v2/broadcasts/public?channel_name=${new URL(document.URL).searchParams.get('channel_name')}`,
      headers: { 'Access-Control-Allow-Origin': 'https://wasd.tv' },
      success: function(out) {
        socket.current = out.result
        document.title = `WASD CHAT | ${socket.current.channel.channel_owner.user_login}`

        if (!document.querySelector('.hidden.info__text__status__name')) {
          let dd = document.createElement('div')
          dd.classList.add('info__text__status__name')
          dd.classList.add('hidden')
          dd.setAttribute('username', '@' + socket.current.channel.channel_owner.user_login.toLowerCase())
          dd.style.color = HelperWASD.userColors[socket.current.channel.channel_owner.user_id % (HelperWASD.userColors.length - 1)]
          dd.style.display = 'none'
          document.body.append(dd)
        }

        if (!socket.isLiveInited && out.result.channel.channel_is_live) {
          socket.isLiveInited = true
          socket.start()
          console.log('chat inited to channel')
        } else if (socket.isLiveInited && !out.result.channel.channel_is_live) {
          socket.isLiveInited = false
          socket.stop(1000, 'LIVE_CLOSED')
          console.log('chat not inited to channel') //-
        } else if (socket.isLiveInited && out.result.channel.channel_is_live) {
          console.log('chat worked')
        } else {
          console.log('chat not worked')
          loader.updateStatus('Ожидаем начало стрима', socket.current.channel.channel_owner.user_login) // log
        }
        setTimeout(() => {
          socket.initChat()
        }, 30000)
      },
      error: function(err) {
        loader.updateStatus(err?.responseJSON?.error?.details, `channel_name -> ${err?.responseJSON?.error?.code}`) // log
        setTimeout(() => {
          socket.initChat()
        }, 30000)
      }
    });
  },
  start() {
    let channel_name = new URL(document.URL).searchParams.get('channel_name')
    this.socketd = new WebSocket("wss://chat.wasd.tv/socket.io/?EIO=3&transport=websocket");

    this.socketd.onopen = function(e) {
      loader.updateStatus('Получение чата-токена') // log
      $.ajax({
        url: `https://wasd.tv/api/auth/chat-token`,
        headers: { 'Access-Control-Allow-Origin': 'https://wasd.tv' },
        success: function(out) {
          socket.jwt = out.result
          new Promise((resolve, reject) => {
            socket.stream_url = `https://wasd.tv/api/v2/broadcasts/public?channel_name=${channel_name}`
            $.ajax({
              url: `https://wasd.tv/api/v2/broadcasts/public?channel_name=${channel_name}`,
              headers: { 'Access-Control-Allow-Origin': 'https://wasd.tv' },
              success: function(out) {

                socket.channelId = out.result.channel.channel_id

                loader.updateStatus('Загрузка истории сообщений') // log

                $.ajax({
                  url: `https://wasd.tv/api/v2/media-containers?limit=1&offset=0&media_container_status=RUNNING&channel_id=${out.result.channel.channel_id}`,
                  headers: { 'Access-Control-Allow-Origin': 'https://wasd.tv' },
                  success: function(out) {
                    // console.log(out)
                    if (out.result[0] && out.result[0].media_container_streams[0]) {
                      resolve(out.result[0])
                      // console.log(out.result[0])
                    } else {

                      $.ajax({
                        url: `https://wasd.tv/api/v2/broadcasts/closed/${new URL(document.URL).searchParams.get('private_link')}`,
                        headers: { 'Access-Control-Allow-Origin': 'https://wasd.tv' },
                        success: function(out) {
                          if (out.result.media_container != null) {
                            resolve(out.result)
                            // console.log(out.result)
                          }
                        }
                      });

                    }
                  }
                });

              }
            });

          }).then((out) => {
            if (out) {
              // console.log(out)
              if (typeof out.media_container == "undefined") {
                socket.streamId = out.media_container_streams[0].stream_id
              } else {
                socket.streamId = out.media_container.media_container_streams[0].stream_id
              }

              $.ajax({
                url: `https://wasd.tv/api/chat/streams/${socket.streamId}/messages?limit=49&offset=0`,
                headers: { 'Access-Control-Allow-Origin': 'https://wasd.tv' },
                success: function(out) {
                  for (let date of out.result.reverse()) {
                    if (date.type == "MESSAGE") {
                      socket.onMessage(['message', date.info, date.id])
                    }
                    if (date.type == "STICKER") {
                      socket.onSticker(['sticker', date.info, date.id])
                    }
                  }

                  loader.updateStatus('Подключение к WebSocket') // log
                  var data = `42["join",{"streamId":${socket.streamId},"channelId":${socket.channelId},"jwt":"${socket.jwt}","excludeStickers":true}]`;
                  try {
                    socket.socketd.send(data);
                  } catch (err) {
                    console.log('[catch]', err)
                  }
                  socket.intervalcheck = setInterval(() => {
                    if (socket.socketd) {
                      try {
                        socket.socketd.send('2')
                      } catch (err) {
                        clearInterval(socket.intervalcheck)
                        socket.socketd = null
                        console.log('[catch]', err)
                        // setTimeout(() => { socket.start() }, 10000)
                      }
                    }
                  }, 2000)
                }
              });

            }

          })
        }
      });
    };

    this.socketd.onclose = function(e) {
      clearInterval(socket.intervalcheck)
      socket.socketd = null
      socket.isLiveInited = false
      // setTimeout(() => { socket.start() }, 10000)
      if (e.code == 404) {
        console.log(`[close] Соединение закрыто чисто, код= ${e.code} причина= ${e.reason}`);
        loader.updateStatus('Соединение закрыто', "код= " + e.code, true)
      } else if (e.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код= ${e.code} причина= ${e.reason}`);
        socket.systemMessage('Соединение закрыто')
      } else {
        console.log('[close] Соединение прервано', "код= " + e.code);
        loader.updateStatus('Соединение прервано', "код= " + e.code, true) // log
      }
    };

    this.socketd.onmessage = function(e) {
        
      if (messages_div.children.length >= 51) {
        messages_div.firstElementChild.remove()
      }

      if (e.data != 3) {
        var JSData;
        if (e.data.indexOf('[') != -1 && e.data.indexOf('[') < e.data.indexOf('{')) {
          code = e.data.slice(0, e.data.indexOf('['));
          data = e.data.slice(e.data.indexOf('['), e.data.length);
          JSData = JSON.parse(data);
        } else if (e.data.indexOf('{') != -1) {
          code = e.data.slice(0, e.data.indexOf('{'));
          data = e.data.slice(e.data.indexOf('{'), e.data.length);
          JSData = JSON.parse(data);
        } else {
          JSData = null;
          code = e.data;
        }
        if (JSData) {
          switch (JSData[0]) {
            case "joined":
              console.log(`[${JSData[0]}] ${JSData[1].user_channel_role}`, JSData);
              loader.updateStatus('WebSocket подключен', JSData[1].user_channel_role) // log
              break;
            case "system_message":
              console.log(`[${JSData[0]}] ${JSData[1].message}`, JSData);
              socket.systemMessage(JSData[1].message)
              break;
            case "message":
              console.log(`[${JSData[0]}] ${JSData[1].user_login}: ${JSData[1].message}`, JSData)
              socket.onMessage(JSData, true)
              break;
            case "sticker":
              console.log(`[${JSData[0]}] ${JSData[1].user_login}: ${JSData[1].sticker.sticker_alias}`, JSData);
              socket.onSticker(JSData, true)
              break;
            case "viewers":
              console.log(`[${JSData[0]}] anon: ${JSData[1].anon} auth: ${JSData[1].auth} total: ${JSData[1].total}`, JSData);
              break;
            case "event":
              console.log(`[${JSData[0]}] ${JSData[1].event_type} - ${JSData[1].payload.user_login} ${JSData[1].message}`, JSData);
              if (JSData[1].event_type == 'NEW_FOLLOWER' && !document.querySelector(`NEW_FOLLOWER.history [user_login="${JSData[1].payload.user_login}"]`)) {
                  
                let div = document.createElement('div')
                div.classList.add('block__messages__item')

                let style = `${settings.wasd.cma ? `color: ${HelperWASD.userColors[JSData[1].payload.user_id % (HelperWASD.userColors.length - 1)]};` : ``}`
                let username = JSData[1].payload.user_login
                let text = 'Добавляет канал в избранное'

                div.innerHTML = 
                `<wasd-chat-follower-message style="margin-right: 36px;">
                  <div class="message-follower">
                    <div class="message-follower__name chat-message-mention" style="${style}" username="${username}">${username}</div>
                    <div class="message-follower__text"><span>${text}</span></div>
                  </div>
                </wasd-chat-follower-message>`

                let user = document.createElement('div')
                user.setAttribute('user_login', JSData[1].payload.user_login)
                document.querySelector(`NEW_FOLLOWER.history`).append(user)
                
                messages_div.append(div)
                document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight
              }
              break;
            case "giftsV1":
              console.log(`[${JSData[0]}] ${JSData[1].gift_name}`, JSData);
              break;
            case "yadonat":
              console.log(`[${JSData[0]}] ${JSData[1].donator} - ${JSData[1].donation} - ${JSData[1].msg}`, JSData);
              break;
            case "messageDeleted":
              console.log(`[${JSData[0]}] ${JSData[1].ids}`, JSData);
              for (let id of JSData[1].ids) {
                let message = document.querySelector(`[message_id="${id}"]`)
                if (!settings.wasd.sdm) settings.wasd.sdm = '0'
                if (message) {
                  if (settings.wasd.sdm.toString() === '0') {
                    message.remove()
                  } else if (settings.wasd.sdm.toString() === '1') {
                    message.setAttribute('deleted', '1')
                  } else if (settings.wasd.sdm.toString() === '2') {
                    message.setAttribute('deleted', '2')
                  } else if (settings.wasd.sdm.toString() === '3') {
                    message.setAttribute('deleted', '3')
                  }
                }
              }
              break;
            case "subscribe":
              console.log(`[${JSData[0]}] ${JSData[1].user_login} - ${JSData[1].product_name}`, JSData);
              // if (settings.eventSub[1][1]) {
              //     let text = settings.eventSub[1][0].replace('{user_login}', '@'+JSData[1].user_login);
              //     prname = `${(JSData[1].product_name == '30') ? '1 месяц' : ''}${(JSData[1].product_name == '60') ? '2 месяца' : ''}`
              //     text.replace('{product_name}', prname);
              //     socket.send(text)
              // }

                let div = document.createElement('div')
                div.classList.add('block__messages__item')

                let style = `${settings.wasd.cma ? `color: ${HelperWASD.userColors[JSData[1].user_id % (HelperWASD.userColors.length - 1)]};` : ``}`
                let username = JSData[1].user_login
                let text = `${JSData[1].product_name == 60 ? 'Оформляет подписку на 2 месяца' : 'Оформляет подписку на 1 месяц' }`

                div.innerHTML = 
                `<wasd-chat-follower-message style="margin-right: 36px;">
                  <div class="message-follower">
                    <div class="message-follower__name chat-message-mention" style="${style}" username="${username}">${username}</div>
                    <div class="message-follower__text"><span>${text}</span></div>
                  </div>
                </wasd-chat-follower-message>`
                messages_div.append(div)
                document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight
                break;
            case "_system":
              console.log(`[${JSData[0]}] ${JSData[1]}`, JSData);
              break;
            case "leave":
              console.log(`[${JSData[0]}] ${JSData[1].streamId}`, JSData);
              break;
            case "user_ban":
              console.log(`[${JSData[0]}] ${JSData[1].payload.user_login}`, JSData);
              if (JSData[1].payload.keep_messages == false) {
                let messages = document.querySelectorAll(`[user_id="${JSData[1].payload.user_id}"]`)
                if (!settings.wasd.sdm) settings.wasd.sdm = '0'
                  
                for (let message of messages) {
                  if (settings.wasd.sdm.toString() === '0') {
                    message.style.display = "none"
                  } else if (settings.wasd.sdm.toString() === '1') {
                    message.setAttribute('deleted', '1')
                  } else if (settings.wasd.sdm.toString() === '2') {
                    message.setAttribute('deleted', '2')
                  } else if (settings.wasd.sdm.toString() === '3') {
                    message.setAttribute('deleted', '3')
                  }
                }

              }
              break;
            case "settings_update":
              console.log(`[${JSData[0]}] ${JSData[1]}`, JSData);
              break
            default:
              console.log('def', code, JSData);
              break;
          }
        }

      }
    };

    this.socketd.onerror = function(error) {
      clearInterval(socket.intervalcheck)
      socket.socketd = null
      console.log(`[error]`, error);
      loader.updateStatus('Соединение прервано', 'error', true) // log
      // socket.start()
    };
  },
  stop(code, reason) {
    clearInterval(socket.intervalcheck)
    this.socketd = null
    this.streamId = 0
    this.channelId = 0
    this.current = null
    this.stream_url = null
  },
  hash(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) { result += characters.charAt(Math.floor(Math.random() * charactersLength)); }
    return result;
  },
  onMessage(JSData, isNew=false) {
    // console.log(JSData[1].user_login+':', JSData[1].message)

    let message_text = JSData[1].message

    if (true) { // settings.wasd.fl
      message_text = HelperWASD.textToURL(message_text);
    }

    if (settings.wasd.fcbc) {
      message_text = stripCombiningMarks(message_text)
    }


    message_text = HelperTV7.replaceText(message_text)
    message_text = HelperBTTV.replaceText(message_text)
    message_text = HelperFFZ.replaceText(message_text)


    let div = document.createElement('div')
    div.setAttribute('username', JSData[1].user_login)
    div.setAttribute('usernamelc', JSData[1].user_login.toLowerCase())
    div.setAttribute('message', JSData[1].message)
    div.setAttribute('user_id', JSData[1].user_id)

    if (JSData[2]) div.setAttribute('message_id', JSData[2])
    if (JSData[1].id) div.setAttribute('message_id', JSData[1].id)

    let isOwner, isMod, isSub, isAdmin, role = 'user'
    if (parser.isOwner(JSData)) {
      role += ' owner'
      isOwner = true
    }
    if (parser.isMod(JSData)) {
      role += ' moderator'
      isMod   = true
    }
    if (parser.isSub(JSData)) {
      role += ' sub'
      isSub   = true
    }
    if (parser.isAdmin(JSData)) {
      role += ' admin'
      isAdmin = true
    }
    div.setAttribute('role', role)

    if (typeof settings.wasd.sbo == 'undefined') settings.wasd.sbo = true
    if (typeof settings.wasd.sbm == 'undefined') settings.wasd.sbm = true
    if (typeof settings.wasd.sbs == 'undefined') settings.wasd.sbs = true
    if (typeof settings.wasd.sba == 'undefined') settings.wasd.sba = true

    if (!settings.wasd.sbo) isOwner = false
    if (!settings.wasd.sbm) isMod   = false
    if (!settings.wasd.sbs) isSub   = false
    if (!settings.wasd.sba) isAdmin = false

    div.classList.add('block__messages__item')

    let _class = `class="message${settings.wasd.stime ? ` is-time` : ''}"`
    let time = `${settings.wasd.stime ? `<div class="message__time"> ${parser.time(JSData)} </div>` : ''}`
    let avatar = `${settings.wasd.simg ? `<div class="message__img"><img wasdlazyvisibleclass="visible" alt="" src="${parser.avatar(JSData)}" class="visible"></div>` : '' }`
    let sub = `${isSub ? `<div class="info__text__status-paid" style="background-color: ${parser.color(JSData)};"><i class="icon wasd-icons-star"></i></div>` : ``}`
    let username = `<div username="${JSData[1].user_login.toLowerCase()}" u_color="${parser.color(JSData)}" class="info__text__status__name ${isMod ? 'is-moderator' : ''}${isOwner ? 'is-owner' : ''}${isAdmin ? 'is-admin' : ''}" style="${isMod || isOwner || isAdmin ? '' : `color: ${parser.color(JSData)}`}">${isMod ? '<i _ngcontent-eti-c54="" class="icon wasd-icons-moderator"></i>' : ''}${isOwner ? '<i _ngcontent-lef-c54="" class="icon wasd-icons-owner"></i>' : ''}${isAdmin ? '<i _ngcontent-lef-c54="" class="icon wasd-icons-dev"></i>' : ''} ${JSData[1].user_login}</div>`

    div.innerHTML = `<wasd-chat-message>
      <div ${_class}>
        ${time}
        ${avatar}
        <div class="message__info">
          <div class="message__info__text">
            <div class="info__text__status">
              ${sub}
              ${username}
            </div>
            <div class="message-text"><span> ${message_text} </span>
            </div>
          </div>
        </div>
      </div>
    </wasd-chat-message>`
    messages_div.append(div)

    if (settings.wasd.mentionSelf && socket.current && message_text.indexOf(socket.current.channel.channel_owner.user_login) != -1) {
      div.querySelector('.message').classList.add('has-mention')
    }

    document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight
    var messageText = div.querySelector('.message-text > span')

    div.setAttribute('mention', HelperWASD.get_user_color(messageText, div))

    if (!settings.wasd.acd) settings.wasd.acd = 0
    if (isNew) {
      if (settings.wasd.acd.toString() == '0') {
        div.style.display = 'block';
      } else {
        div.style.display = 'none'
        setTimeout(() => {
          div.style.display = 'block';
          document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight
        }, parseInt(settings.wasd.acd))
      }
    } else {
      div.style.display = 'block';
    }

    let badge = HelperWASD.badges[div.getAttribute('username')]
    if (badge && badge.user_role == 'DEV') {
      div.querySelector('.info__text__status').insertAdjacentHTML("afterbegin", `<div ovg="" class="info__text__status-dev" style="background-color: ${HelperWASD.userColors[badge.user_id % (HelperWASD.userColors.length - 1)]};"><i badge="" class="icon wasd-icons-dev"></i></div>`) 
    }

  },
  onSticker(JSData, isNew=false) {
    // console.log(JSData[1].user_login+':', JSData[1].message)


    let div = document.createElement('div')
    div.setAttribute('username', JSData[1].user_login)
    div.setAttribute('usernamelc', JSData[1].user_login.toLowerCase())
    div.setAttribute('sticker', JSData[1].sticker.sticker_image[settings.wasd.ss])
    div.setAttribute('user_id', JSData[1].user_id)
    
    if (JSData[2]) div.setAttribute('message_id', JSData[2])
    if (JSData[1].id) div.setAttribute('message_id', JSData[1].id)
    
    let isOwner, isMod, isSub, isAdmin, role = 'user'
    if (parser.isOwner(JSData)) {
      role += ' owner'
      isOwner = true
    }
    if (parser.isMod(JSData)) {
      role += ' moderator'
      isMod   = true
    }
    if (parser.isSub(JSData)) {
      role += ' sub'
      isSub   = true
    }
    if (parser.isAdmin(JSData)) {
      role += ' admin'
      isAdmin = true
    }
    div.setAttribute('role', role)

    if (typeof settings.wasd.sbo == 'undefined') settings.wasd.sbo = true
    if (typeof settings.wasd.sbm == 'undefined') settings.wasd.sbm = true
    if (typeof settings.wasd.sbs == 'undefined') settings.wasd.sbs = true
    if (typeof settings.wasd.sba == 'undefined') settings.wasd.sba = true

    if (!settings.wasd.sbo) isOwner = false
    if (!settings.wasd.sbm) isMod   = false
    if (!settings.wasd.sbs) isSub   = false
    if (!settings.wasd.sba) isAdmin = false

    div.classList.add('block__messages__item')

    let _class = `class="message ${settings.wasd.stime ? ` is-time` : ''}"`
    let time = `${settings.wasd.stime ? `<div class="message__time"> ${parser.time(JSData)} </div>` : ''}`
    let avatar = `${settings.wasd.simg ? `<div class="message__img"><img wasdlazyvisibleclass="visible" alt="" src="${parser.avatar(JSData)}" class="visible"></div>` : '' }`
    let sub = `${isSub ? `<div class="info__text__status-paid" style="background-color: ${parser.color(JSData)};"><i class="icon wasd-icons-star"></i></div>` : ``}`
    let username = `<div username="${JSData[1].user_login.toLowerCase()}" u_color="${parser.color(JSData)}" class="info__text__status__name ${isMod ? 'is-moderator' : ''}${isOwner ? 'is-owner' : ''}${isAdmin ? 'is-admin' : ''}" style="${isMod || isOwner || isAdmin ? '' : `color: ${parser.color(JSData)}`}">${isMod ? '<i _ngcontent-eti-c54="" class="icon wasd-icons-moderator"></i>' : ''}${isOwner ? '<i _ngcontent-lef-c54="" class="icon wasd-icons-owner"></i>' : ''}${isAdmin ? '<i _ngcontent-lef-c54="" class="icon wasd-icons-dev"></i>' : ''} ${JSData[1].user_login}</div>`
    let sticker = `<img alt="sticker" class="sticker" src="${JSData[1].sticker.sticker_image[settings.wasd.ss]}"> <span class="chat-message-text stickertext sticker_text">Стикер</span>`
    div.innerHTML = `<wasd-chat-message>
      <div ${_class}>
        ${time}
        ${avatar}
        <div class="message__info">
          <div class="message__info__text">
            <div class="info__text__status">
              ${sub}
              ${username}
            </div>
            <div class="message-text"><span> </span>
              ${sticker}
            </div>
          </div>
        </div>
      </div>
    </wasd-chat-message>`

    messages_div.append(div)
    document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight

    var messageText = div.querySelector('.message-text > span')

    div.setAttribute('mention', HelperWASD.get_user_color(messageText, div))

    if (!settings.wasd.acd) settings.wasd.acd = 0
    if (isNew) {
      if (settings.wasd.acd.toString() == '0') {
        div.style.display = 'block';
      } else {
        div.style.display = 'none'
        setTimeout(() => {
          div.style.display = 'block';
          document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight
        }, parseInt(settings.wasd.acd))
      }
    } else {
      div.style.display = 'block';
    }

    let badge = HelperWASD.badges[div.getAttribute('username')]
    if (badge && badge.user_role == 'DEV') {
      div.querySelector('.info__text__status').insertAdjacentHTML("afterbegin", `<div ovg="" class="info__text__status-dev" style="background-color: ${HelperWASD.userColors[badge.user_id % (HelperWASD.userColors.length - 1)]};"><i badge="" class="icon wasd-icons-dev"></i></div>`) 
    }

  },
  systemMessage(text) {
    let message = document.createElement('div')
    message.classList.add('block__messages__item')
    message.innerHTML = `<wasd-chat-system-message>
        <div class="block">
          <div class="block__item">
            <div class="block__item__text"> ${text} </div>
          </div>
        </div>
      </wasd-chat-system-message>`
    messages_div.append(message)
    document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight
  }
}

const parser = {
  color(JSData) {
    return HelperWASD.userColors[JSData[1].user_id % (HelperWASD.userColors.length - 1)]
  },
  avatar(JSData) {
    return JSData[1].user_avatar.small
  },
  time(JSData) {
    return moment(JSData[1].date_time).format(settings.wasd.fmst)
  },
  isMod(JSData) {
    if (JSData) {
      let role = JSData[1].user_channel_role == 'CHANNEL_MODERATOR'
      if (!role) role = JSData[1].user_channel_role == 'CHANNEL_MODERATOR'
      return role
    } else {
      return false
    }
  },
  isSub(JSData) {
    if (JSData) {
      let role = false
      for (let rol of JSData[1].other_roles) { if (rol == 'CHANNEL_SUBSCRIBER') role = true } //?
      if (!role) role = JSData[1].user_channel_role == 'CHANNEL_SUBSCRIBER'
      return role
    } else {
      return false
    }
  },
  isOwner(JSData) {
    if (JSData) {
      let role = false
      for (let rol of JSData[1].other_roles) { if (rol == 'CHANNEL_OWNER') role = true } //?
      if (!role) role = JSData[1].user_channel_role == 'CHANNEL_OWNER'
      return role
    } else {
      return false
    }
  },
  isAdmin(JSData) {
    if (JSData) {
      let role = false
      for (let rol of JSData[1].other_roles) { if (rol == 'WASD_ADMIN') role = true } //?
      if (!role) role = JSData[1].user_channel_role == 'WASD_ADMIN'
      return role
    } else {
      return false
    }
  },

}

const loader = {
  div: document.querySelector('#loader_div'),
  updateStatus(title='', description='', top=false) {
    console.log(title, description)
    if (messages_div.lastElementChild.id == 'loader_div') {
      loader.div.style['animation'] = ''
      loader.div.style['-webkit-animation'] = ''

      messages_div.lastElementChild.querySelector('.block__item__text').textContent = `${title} ${description ? `(${description})` : ''}`

      loader.div.style['animation'] = 'fadeOut 0s ease 15000ms forwards'
      loader.div.style['-webkit-animation'] = 'fadeOut 0s ease 15000ms forwards'
    } else if (top) {
      loader.div = document.createElement('div')
      loader.div.id = 'loader_div'
      loader.div.innerHTML = `<wasd-chat-system-message>
        <div class="block">
          <div class="block__item">
            <div class="block__item__text"> ${title} ${description ? '(' + description + ')' : `` } </div>
          </div>
        </div>
      </wasd-chat-system-message>`
      messages_div.append(loader.div)
      document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight
    }
  }
}