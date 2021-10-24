var setting = {
  style: null,
  init() {
    if (this.style === null) {
      this.style = document.createElement('style');
      this.style.type = 'text/css';
      document.body.append(this.style);
      setting.update();
    }
  },
  changeSettimgs(data) {
    settings.wasd = data
    setting.update()
    console.log('update settings', settings.wasd)
  },
  update() {
    let cssCode = ''

    cssCode += `.body-container { background: rgba(0,0,0,0)!important; }`

    if (settings.wasd.theme.toString() === '0') {
      cssCode += 'body{--wasd-color-black:#000000!important;--wasd-color-black--rgb:0,0,0!important;--wasd-color-white:#ffffff!important;--wasd-color-white--rgb:255,255,255!important;--wasd-color-corp-prime:#1A202C!important;--wasd-color-corp-prime--rgb:26,32,44!important;--wasd-color-corp-gray:#848CA0!important;--wasd-color-corp-gray--rgb:132,140,160!important;--wasd-color-dark-blue:#483cb8!important;--wasd-color-corp-blue:#258fe5!important;--wasd-color-corp-blue--rgb:37,143,229!important;--wasd-color-warning:#d85252!important;--wasd-color-warning--rgb:216,82,82!important;--wasd-color-success:#6ba131!important;--wasd-color-success--rgb:107,161,49!important;--wasd-color-event1:#913CA7!important;--wasd-color-event2:#5BC3C1!important;--wasd-color-event3:#F5A623!important;--wasd-color-xp:#9013fe!important;--wasd-color-bordo:#a5276d!important;--wasd-color-prime:#ffffff!important;--wasd-color-prime--rgb:255,255,255!important;--wasd-color-switch:#1A202C!important;--wasd-color-switch--rgb:26,32,44!important;--wasd-color-second:#f0f0f8!important;--wasd-color-third:#e0e0e8!important;--wasd-color-gray1:#848ca0!important;--wasd-color-gray2:#444858!important;--wasd-color-gray3:#242830!important;--wasd-color-text-prime:rgba(26, 32, 44, 1)!important;--wasd-color-text-second:rgba(26, 32, 44, 0.8)!important;--wasd-color-text-third:rgba(26, 32, 44, 0.64)!important;--wasd-color-text-fourth:rgba(26, 32, 44, 0.48)!important;--wasd-color-text-disabled:rgba(26, 32, 44, 0.24)!important;--wasd-color-bg-prime:#f0f0f8!important;--wasd-color-bg-second:#e0e0e9!important;--color-lowest-layer:rgba(198, 209, 225, 0.2)!important;--color-background:246,247,248!important;--color-first-layer:#FBFBFB!important;--color-second-layer:#FFFFFF!important;--color-upper-layer:#FFFFFF!important;--color-switch:20,24,32!important;--color-shadow:36,102,146!important;--color-system-blue:0,143,236!important;--color-system-dark-blue:13,110,200!important;--color-system-white:255,255,255!important;--color-system-black:0,0,0!important;--color-system-warning:252,77,100!important;--color-system-attention:243,173,56!important;--color-system-success:62,189,65!important;--color-system-xp:144,19,254!important;--color-additional-yellow-light:#F0DF47!important;--color-additional-yellow-dark:#DBC92A!important;--color-additional-yellow-orange:#F8B23E!important;--color-additional-orange:#E88021!important;--color-additional-red:#D03F3F!important;--color-additional-pink:#CD317C!important;--color-additional-lilac:#952BA7!important;--color-additional-violet:#6227E0!important;--color-additional-blue:#2264E3!important;--color-additional-blue-light:#27B4E0!important;--color-additional-aquamarine:#00CBBF!important;--color-additional-blue-green:#27E087!important;--color-additional-green-acid:#2BE027!important;--color-additional-green:#139520!important;--color-additional-green-light:#A6D323!important;--color-additional-gray:#898989!important}';
    } else if (settings.wasd.theme.toString() === '1') {
      cssCode += 'body{--wasd-color-black:#000000!important;--wasd-color-black--rgb:0,0,0!important;--wasd-color-white:#ffffff!important;--wasd-color-white--rgb:255,255,255!important;--wasd-color-corp-prime:#1A202C!important;--wasd-color-corp-prime--rgb:26,32,44!important;--wasd-color-corp-gray:#848CA0!important;--wasd-color-corp-gray--rgb:132,140,160!important;--wasd-color-dark-blue:#483cb8!important;--wasd-color-corp-blue:#258fe5!important;--wasd-color-corp-blue--rgb:37,143,229!important;--wasd-color-warning:#d85252!important;--wasd-color-warning--rgb:216,82,82!important;--wasd-color-success:#6ba131!important;--wasd-color-success--rgb:107,161,49!important;--wasd-color-event1:#913CA7!important;--wasd-color-event2:#5BC3C1!important;--wasd-color-event3:#F5A623!important;--wasd-color-xp:#9013fe!important;--wasd-color-bordo:#a5276d!important;--wasd-color-prime:#1A202C!important;--wasd-color-prime--rgb:26,32,44!important;--wasd-color-switch:#ffffff!important;--wasd-color-switch--rgb:255,255,255!important;--wasd-color-second:#141820!important;--wasd-color-third:#0c1014!important;--wasd-color-gray1:#242830!important;--wasd-color-gray2:#444858!important;--wasd-color-gray3:#848ca0!important;--wasd-color-text-prime:rgba(255, 255, 255, 1)!important;--wasd-color-text-second:rgba(255, 255, 255, 0.8)!important;--wasd-color-text-third:rgba(255, 255, 255, 0.64)!important;--wasd-color-text-fourth:rgba(255, 255, 255, 0.48)!important;--wasd-color-text-disabled:rgba(255, 255, 255, 0.24)!important;--wasd-color-bg-prime:#141820!important;--wasd-color-bg-second:#0c1014!important;--color-lowest-layer:rgba(0, 0, 0, 0.2)!important;--color-background:20,24,32!important;--color-first-layer:#1A212D!important;--color-second-layer:#1D2736!important;--color-upper-layer:#212D3F!important;--color-switch:246,247,248!important;--color-shadow:9,9,9!important;--color-system-blue:0,143,236!important;--color-system-dark-blue:13,110,200!important;--color-system-white:255,255,255!important;--color-system-black:0,0,0!important;--color-system-warning:252,77,100!important;--color-system-attention:243,173,56!important;--color-system-success:62,189,65!important;--color-system-xp:144,19,254!important;--color-additional-yellow-light:#F0DF47!important;--color-additional-yellow-dark:#DBC92A!important;--color-additional-yellow-orange:#F8B23E!important;--color-additional-orange:#E88021!important;--color-additional-red:#D03F3F!important;--color-additional-pink:#CD317C!important;--color-additional-lilac:#952BA7!important;--color-additional-violet:#6227E0!important;--color-additional-blue:#2264E3!important;--color-additional-blue-light:#27B4E0!important;--color-additional-aquamarine:#00CBBF!important;--color-additional-blue-green:#27E087!important;--color-additional-green-acid:#2BE027!important;--color-additional-green:#139520!important;--color-additional-green-light:#A6D323!important;--color-additional-gray:#898989!important}';
    }

    if (settings.wasd.mf) {
      cssCode += `wasd-chat-follower-message { display: none!important; }`;
    }

    if (!settings.wasd.simg) {
      cssCode += `.message__img { display: none!important; }`;
    }

    if (!settings.wasd.catm) {
      cssCode += `.chat-message-mention { color: rgba(var(--wasd-color-switch--rgb), .88)!important; }`;
    }

    if (!settings.wasd.fl) {
      cssCode += `div.message-text > span > a { color: rgba(var(--wasd-color-switch--rgb), .88)!important; pointer-events: none; }`;
    }

    if (settings.wasd.fcbc) {
      cssCode += `.zalgo { display: none; } .no-zalgo { display: inline; }`;
    } else {
      cssCode += `.no-zalgo { display: none; } .zalgo { display: inline; } `;
    }

    if (settings.wasd.ss.toString() === 'large') {
      cssCode += `[alt="sticker_medium"] { display: none!important; } [alt="sticker_small"] { display: none!important; }`;
    } else if (settings.wasd.ss.toString() === 'medium') {
      cssCode += `[alt="sticker_large"] { display: none!important; }  [alt="sticker_small"] { display: none!important; }`;
    } else if (settings.wasd.ss.toString() === 'small') {
      cssCode += `[alt="sticker_large"] { display: none!important; }  [alt="sticker_medium"] { display: none!important; }`;
    }

    if (!settings.wasd.stime) {
      cssCode += `.message__time { display: none!important; }`;
      cssCode += `.is-time { padding: 2px 12px!important; }`;
    } else {
      cssCode += `.message__time.${settings.wasd.fmst.toString().replace(/:/ig, '-')} {display: flex!important;}`
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
      cssCode += 'img.sticker { width: 28px!important; height: 28px!important; margin-top: 0px!important; display: inline; vertical-align: middle!important; margin: -.5rem 0!important; }';
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
      let setting = settings.wasd.list.highlightTermList[term]
      cssCode += `.block__messages__item[message*="${setting.term}"] {background-color: ${setting.color}!important;}`
    }

    for (let term in settings.wasd.list.blockTermList) {
      cssCode += `.block__messages__item[message*="${term}"] {display: none!important;}`
    }

    for (let user in settings.wasd.list.highlightUserList) {
      let setting = settings.wasd.list.highlightUserList[user]
      cssCode += `.block__messages__item[usernamelc="${setting.username.toLowerCase()}"] {background-color: ${setting.color}!important;}`
    }


    if (setting.style) {
      if (typeof setting.style.styleSheet !== 'undefined') {
        setting.style.styleSheet.cssText = cssCode;
      } else {
        setting.style.innerHTML = '';
        setting.style.appendChild(document.createTextNode(cssCode));
      }

      console.log('style inited')

    }
  }
}

let spawner = {
  newMessage() {
    let data = list.users[spawner.randomNumber(1, 20)]
    let message = list.message[spawner.randomNumber(1, 38)]
    
    let div = document.createElement('div')
    div.setAttribute('_ngcontent-uer-c53', '')
    div.setAttribute('username', data['username'])
    div.setAttribute('usernamelc', data['username'].toLowerCase())
    div.setAttribute('message', message)
    div.setAttribute('role', data['role'])
    div.classList.add('block__messages__item')

    message = HelperWASD.textToURL(message);

    if (settings.wasd.fcbc) {
      message = stripCombiningMarks(message)
    }

    message = HelperTV7.replaceText(message)
    message = HelperBTTV.replaceText(message)
    message = HelperFFZ.replaceText(message)

    let isOwner  = data['role'].indexOf('owner')     != -1
    let isMod    = data['role'].indexOf('moderator') != -1
    let isSub    = data['role'].indexOf('sub')       != -1
    let isAdmin  = data['role'].indexOf('admin')     != -1
    let isModDev = data['role'].indexOf('modDEV')    != -1

    if (typeof settings.wasd.sbo == 'undefined') settings.wasd.sbo = true
    if (typeof settings.wasd.sbm == 'undefined') settings.wasd.sbm = true
    if (typeof settings.wasd.sbs == 'undefined') settings.wasd.sbs = true
    if (typeof settings.wasd.sba == 'undefined') settings.wasd.sba = true

    if (!settings.wasd.sbo) isOwner = false
    if (!settings.wasd.sbm) isMod   = false
    if (!settings.wasd.sbs) isSub   = false
    if (!settings.wasd.sba) isAdmin = false

    div.innerHTML = `<wasd-chat-message _ngcontent-uer-c53="" _nghost-uer-c51="">
      <div _ngcontent-uer-c51="" class="message is-time">
        <div _ngcontent-uer-c51=""style="display: none" class="message__time h-mm"> ${moment().format('h:mm')} </div>
        <div _ngcontent-uer-c51=""style="display: none" class="message__time h-mm-ss"> ${moment().format('h:mm:ss')} </div>
        <div _ngcontent-uer-c51=""style="display: none" class="message__time H-mm"> ${moment().format('H:mm')} </div>
        <div _ngcontent-uer-c51=""style="display: none" class="message__time H-mm-ss"> ${moment().format('H:mm:ss')} </div>
        <div _ngcontent-uer-c51=""style="display: none" class="message__time hh-mm"> ${moment().format('hh:mm')} </div>
        <div _ngcontent-uer-c51=""style="display: none" class="message__time hh-mm-ss"> ${moment().format('hh:mm:ss')} </div>
        <div _ngcontent-uer-c51=""style="display: none" class="message__time HH-mm"> ${moment().format('HH:mm')} </div>
        <div _ngcontent-uer-c51=""style="display: none" class="message__time HH-mm-ss"> ${moment().format('HH:mm:ss')} </div>
        <!---->
        <div _ngcontent-uer-c51="" class="message__img"><img _ngcontent-uer-c51="" wasdlazyvisibleclass="visible" alt="" src="https://static.wasd.tv/avatars/user/${data['icon']}.png" class="visible"></div>
        <!---->
        <!---->
        <div _ngcontent-uer-c51="" class="message__info">
          <div _ngcontent-uer-c51="" class="message__info__text">
            <div _ngcontent-uer-c51="" class="info__text__status">
              ${isModDev ? `<div ovg="" class="info__text__status-dev" style="background-color: ${HelperWASD.userColors[data['userid'] % (HelperWASD.userColors.length - 1)]};"><i badge="" class="icon wasd-icons-dev"></i></div>` : ``}
              ${isSub ? `<div _ngcontent-uer-c51="" class="info__text__status-paid" style="background-color: ${HelperWASD.userColors[data['userid'] % (HelperWASD.userColors.length - 1)]};"><i _ngcontent-uer-c51="" class="icon wasd-icons-star"></i></div>` : ``}
              <div _ngcontent-uer-c51="" username="${data['username']}" class="info__text__status__name ${isMod ? 'is-moderator' : ''}${isOwner ? 'is-owner' : ''}${isAdmin ? 'is-admin' : ''}" style="${isMod || isOwner || isAdmin ? '' : `color: ${HelperWASD.userColors[data['userid'] % (HelperWASD.userColors.length - 1)]}`}">${isMod ? '<i _ngcontent-eti-c54="" class="icon wasd-icons-moderator"></i>' : ''}${isOwner ? '<i _ngcontent-lef-c54="" class="icon wasd-icons-owner"></i>' : ''}${isAdmin ? '<i _ngcontent-lef-c54="" class="icon wasd-icons-dev"></i>' : ''} ${data['username']}</div>
            </div>

            <div _ngcontent-uer-c51="" class="message-text"><span _ngcontent-uer-c51=""> ${message} </span>
            </div>
            <!---->
          </div>
          <!---->
        </div>
      </div>
    </wasd-chat-message>`

    messages_div.appendChild(div)

    div.setAttribute('mention', this.get_user_color(div.querySelector('.message-text'), div))

    document.querySelector('.block').scrollTop = document.querySelector('.block').scrollHeight
  },
  start() {
    loader.updateStatus('Генирация сообщений') // log
    this.newMessage()
    setInterval(() => {
      this.newMessage()
    }, 1500)
  },
  randomNumber(min=0, max=100) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  },
  get_user_color(messageText, div) {
    let bl = ''
    if (messageText) {
      messageText.innerHTML = messageText.innerHTML.replace(/@[a-zA-Z0-9_-]+/ig, function($1) {
        return `<span style='color: ${HelperWASD.userColors[list.userid[$1.trim()] % (HelperWASD.userColors.length - 1)]};' class='chat-message-mention' username="${$1.toLowerCase()}">@${$1.trim().split('@').join('').trim()}</span>`;
      });

      div.querySelectorAll('.chat-message-mention').forEach(element => {
        bl += element.getAttribute('username').split('@').join('') + ' '
      });

    }
    return bl
  }
}

let list = {
  users: {
    '1': {
      'icon': '5',
      'userid': '94252',
      'role': 'user owner modDEV',
      'username': 'Raspin',
    },
    '2': {
      'icon': '1501',
      'userid': '96510',
      'role': 'user moderator',
      'username': 'ParasiteTown',
    },
    '3': {
      'icon': '1681',
      'userid': '58556',
      'role': 'user',
      'username': 'Mildewed',
    },
    '4': {
      'icon': '75',
      'userid': '77632',
      'role': 'user moderator sub',
      'username': 'Gerbilator',
    },
    '5': {
      'icon': '1107',
      'userid': '68367',
      'role': 'user',
      'username': 'RustySilver',
    },
    '6': {
      'icon': '1036',
      'userid': '99669',
      'role': 'user sub',
      'username': 'NumbLeg',
    },
    '7': {
      'icon': '641',
      'userid': '101708',
      'role': 'user admin sub',
      'username': 'Pelfox',
    },
    '8': {
      'icon': '1074',
      'userid': '52688',
      'role': 'user',
      'username': 'ZetanChamp',
    },
    '9': {
      'icon': '1657',
      'userid': '99512',
      'role': 'user admin',
      'username': 'GilFrog',
    },
    '10': {
      'icon': '1506',
      'userid': '90357',
      'role': 'user sub',
      'username': 'Salamandrine',
    },
    '11': {
      'icon': '5',
      'userid': '103986',
      'role': 'user',
      'username': 'SlitherTuft',
    },
    '12': {
      'icon': '634',
      'userid': '62820',
      'role': 'user',
      'username': 'Gigadude',
    },
    '13': {
      'icon': '1095',
      'userid': '76905',
      'role': 'user sub',
      'username': 'Crazywar',
    },
    '14': {
      'icon': '1573',
      'userid': '57157',
      'role': 'user',
      'username': 'Scoundrella',
    },
    '15': {
      'icon': '890',
      'userid': '72260',
      'role': 'user',
      'username': 'oineIsm',
    },
    '16': {
      'icon': '476',
      'userid': '83073',
      'role': 'user',
      'username': 'Deadlight',
    },
    '17': {
      'icon': '1181',
      'userid': '102201',
      'role': 'user moderator',
      'username': 'Mayflower',
    },
    '18': {
      'icon': '556',
      'userid': '88221',
      'role': 'user',
      'username': 'Oblation',
    },
    '19': {
      'icon': '1480',
      'userid': '68559',
      'role': 'user moderator sub',
      'username': 'Absconcier',
    },
    '20': {
      'icon': '1424',
      'userid': '86784',
      'role': 'user',
      'username': 'KnuckleDust',
    },
  },
  message: {
    '1': 'f',
    '2': 'Pog',
    '3': 'а',
    '4': 'ооооооо',
    '5': 'какать ( ͡° ͜ʖ ͡°)',
    '6': 'ФРИК',
    '7': 'Амогус',
    '8': 'ахахахах',
    '9': '@Gigadude ✋',
    '10': 'Опять революционер пришел',
    '11': 'Здравствуйте',
    '12': '@Mayflower 🤡',
    '13': 'ЭТО ЛОВУШКА',
    '14': 'Оно того не стоит',
    '15': 'Толкько зашел',
    '16': 'D:',
    '17': 'KEKW',
    '18': 'да',
    '19': 'Забавный факт',
    '20': 'Они тоже умеют закидывать гранатами Pog',
    '21': 'BOOBA ?',
    '22': 'ммм',
    '23': '@OMFBot Здравствуй товарищ бот',
    '24': 'APEX',
    '25': 'F',
    '26': 'чек google.com или https://google.com',
    '27': 'уффффффффф ля',
    '28': '!help',
    '29': '+5кк, сюда',
    '30': 'чел',
    '31': 'OMEGALUL',
    '32': 'упади',
    '33': 'бб',
    '34': 'кинь рейд мне',
    '35': '<img _ngcontent-sjn-c51="" alt="sticker" class="sticker" src="https://st.wasd.tv/upload/stickers/c6933181-d4e5-4ea2-8c07-d3eda51cd8f3/original.png">',
    '36': '<img _ngcontent-sjn-c51="" alt="sticker" class="sticker" src="https://st.wasd.tv/upload/stickers/e2fae7dd-214b-4293-ad25-0fb8c256280e/original.png">',
    '37': '<img _ngcontent-sjn-c51="" alt="sticker" class="sticker" src="https://st.wasd.tv/upload/stickers/4376d926-0353-42ec-9985-1a5dac7f2704/original.png">',
    '38': 'Agakakskagesh Agakakskagesh Agakakskagesh Agakakskagesh Agakakskagesh Agakakskagesh Agakakskagesh Agakakskagesh'
  },
  userid: {
    '@Gigadude': '62820',
    '@Mayflower': '102201',
    '@OMFBot': '90357',
  }
}

const loader = {
  div: document.querySelector('#loader_div'),
  create() {

  },
  updateStatus(title='', description='') {
    if (loader.div) loader.div.querySelector('.block__item__text').textContent = `${title} ${description ? `(${description})` : ''}`
  },
  end() {
    if (loader.div) setTimeout(() => {
      loader.div.style['animation']         = 'animation: fadeOut 0.5s ease 30000ms forwards;'
      loader.div.style['-webkit-animation'] = 'animation: fadeOut 0.5s ease 30000ms forwards;'
    }, 1500)
  }
}