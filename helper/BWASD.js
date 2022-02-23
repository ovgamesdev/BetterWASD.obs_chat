const HelperBWASD = {
	items: { bwasdEmotes: {}, bwasdUsers: {} },
  isBusy: false,
  emotes: {},
  host: 'https://betterwasd.herokuapp.com',
  // host: 'https://localhost:5000',
  async loadEmotes(user_login) {

	  console.log('load bwasd')
    loader.updateStatus('Загрузка BWASD эмоций') // log
  	return new Promise((resolve) => {
	  	$.ajax({
        url: `https://wasd.tv/api/v2/broadcasts/public?channel_name=${new URL(document.URL).searchParams.get('channel_name')}`,
        headers: { 'Access-Control-Allow-Origin': 'https://wasd.tv' },
        success: function(out) {
          if (!out.result.channel.channel_owner) return
            
      		HelperBWASD.tryAddUser(out.result.channel.channel_owner.user_id, out.result.channel.channel_owner.user_login).finally(() => {
            loader.updateStatus('Загрузка BWASD эмоций', '1/1') // log
    				resolve()
      		})

        },
        error: function(err) {
        	console.log(err)//.statusText
        	loader.updateStatus(err.responseText) // log
        }
      })
	  	
	  })
  },
  update() {
    return new Promise((resolve) => {
    	let items = HelperBWASD.items

      let emotes = {};

      for (let userID in items.bwasdEmotes) {
        if (items.bwasdEmotes.hasOwnProperty(userID)) {
          for (let emoteCode in items.bwasdEmotes[userID]) {
            if (items.bwasdEmotes[userID].hasOwnProperty(emoteCode)) {
              emotes[emoteCode] = items.bwasdEmotes[userID][emoteCode];
            }
          }
        }
      }

      HelperBWASD.emotes = emotes;
      resolve();

    });
  },
  replaceText(text) {
    let split = text.split(' ');
    let newText = [];
    for (let word of split) {
      size = Number(settings.wasd.bes) + 1;


      let link = `${HelperBWASD.host}/cached/emote/${HelperBWASD.emotes[word]}/${size}x`
      // if (settings.wasd.staticGifEmotes.toString() === '0') link = `https://cache.ffzap.com/${link}`

      if (HelperBWASD.emotes[word]) {
        let user
        for (let userID in HelperBWASD.items.bwasdEmotes) {
          if (typeof HelperBWASD.items.bwasdEmotes[userID][word] == 'string') {
            user = userID
            break;
          }
        }
        let title = ` Смайл:&nbsp;${word} <br> ${typeof HelperBWASD.items.bwasdUsers[user].username == 'string' ? `Канал: ${HelperBWASD.items.bwasdUsers[user].username} <br> Эмоции на канале BWASD` : 'Общедоступный BWASD'} `
        word = `<div class="bttv-emote tooltip-wrapper" tooltip="${title}" title="${title}"> <img class="stickerovg bwasd small" style="vertical-align: middle; width: auto!important;" src="${link}" alt="${word}" /> <span class="chat-message-text stickertext stickerovg_text">Стикер</span> </div>`;
      }

      newText.push(word);
    }
    return newText.join(' ');
  },
  getUserEmotes(userID) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${HelperBWASD.host}/api/v1/emote/userwithglobal/${userID}`,
        success: (out) => {
          resolve(out)
        },
        error: (out) => {
          reject(out.message)
        }
      });
    });
  },
  updateUserChannelEmotes(userID, username) {
    return HelperBWASD.getUserEmotes(userID).then((bwasdData) => {
      return HelperBWASD.updateEmotes(userID, bwasdData);
    }).then(() => {
      return HelperBWASD.addUser(userID, username);
    }).catch((err) => {
      return Promise.reject('У пользователя нет BetterWASD.');
    });
  },
  updateEmotes(userID, bwasdData) {
    HelperBWASD.items.bwasdEmotes[userID] = {};
    HelperBWASD.items.bwasdEmotes.global = {};
    HelperBWASD.items.bwasdUsers.global = { lastUpdate: Date.now() };
    let emoteList = [];
    let globalList = [];
    if (Array.isArray(bwasdData.channelEmotes)) {
      emoteList = emoteList.concat(bwasdData.channelEmotes);
    }
    if (Array.isArray(bwasdData.sharedEmotes)) {
      emoteList = emoteList.concat(bwasdData.sharedEmotes);
    }
    if (Array.isArray(bwasdData.global)) {
      globalList = globalList.concat(bwasdData.global);
    }
    for (let emote of emoteList) {
      HelperBWASD.items.bwasdEmotes[userID][emote.code] = emote._id;
    }
    for (let emote of globalList) {
      HelperBWASD.items.bwasdEmotes.global[emote.code] = emote._id;
    }
  },
  addUser(userID, username) {
    if (typeof userID === 'string') userID = parseInt(userID);
    return new Promise((resolve) => {
      let addUser = typeof HelperBWASD.items.bwasdUsers[userID] === 'undefined';
      HelperBWASD.items.bwasdUsers[userID] = {
        username,
        lastUpdate: Date.now()
      };
      resolve();
    });
  },
  tryAddUser(user_id, user_login) {
  	return new Promise((resolve) => {
	    if (HelperBWASD.isBusy) return

	    HelperBWASD.isBusy = true;
	    let beforeEmotes = Object.keys(HelperBWASD.emotes).length;

	    HelperBWASD.updateUserChannelEmotes(user_id, user_login).then(() => {
	      return HelperBWASD.update();
	    }).then(() => {
	      let newEmotes = Object.keys(HelperBWASD.emotes).length - beforeEmotes;
	      console.log(`Пользователь ${user_login} и ${newEmotes} эмоции добавлены.`);
	    }).catch((err) => {
	      console.log(err);
	    }).finally(() => {
	      HelperBWASD.isBusy = false;
	      resolve()
	    });
	  });
  }
}