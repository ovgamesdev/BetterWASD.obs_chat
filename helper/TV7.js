const HelperTV7 = {
	items: {},
  isBusy: false,
  emotes: {},
  async loadEmotesUsers(users) {
  	let u = users.split(';')
  	let index = 0
	  console.log('load 7tv', u)
    loader.updateStatus('Загрузка 7TV эмоций') // log
  	return new Promise((resolve) => {
	  	for (let username of u) {
	  		HelperTV7.tryAddUser(username).finally(() => {
	  			index ++
          loader.updateStatus('Загрузка 7TV эмоций', `${index}/${u.length}`) // log
	  			if (index == u.length) {
  					resolve()
	  			}
	  		})
	  	}
	  })
  },
  fetchGlobalEmotes(items) {
    return new Promise((resolve) => {
      let tv7Emotes = items.tv7Emotes || {};
      let tv7Users = items.tv7Users || {};
      if (typeof tv7Users.global === 'undefined' || Date.now() - tv7Users.global.lastUpdate > 604800000) {

        new Promise((resolve, reject) => {
          $.ajax(`https://api.7tv.app/v2/emotes/global`).always(function(out, textStatus, xhr) {
            if (xhr.status === 200) {
              return resolve(out);
            } else {
              return reject();
            }
          })
        }).then((data) => {
          tv7Emotes.global = {};
          for (let emote of data) {
            tv7Emotes.global[emote.name] = emote.id;
          }
        }).finally(() => {
          tv7Users.global = {
            lastUpdate: Date.now()
          };
          items.tv7Users = tv7Users;
          items.tv7Emotes = tv7Emotes;
          resolve();
        });
      } else {
        resolve();
      }
    });
  },
  update() {
    return new Promise((resolve) => {
      let items = HelperTV7.items
      HelperTV7.fetchGlobalEmotes(items).finally(() => {
        tv7Emotes = items.tv7Emotes;
        tv7Users = items.tv7Users;
        let emotes = {};

        for (let userID in items.tv7Emotes) {
          if (items.tv7Emotes.hasOwnProperty(userID)) {
            for (let emoteCode in items.tv7Emotes[userID]) {
              if (items.tv7Emotes[userID].hasOwnProperty(emoteCode)) {
                emotes[emoteCode] = items.tv7Emotes[userID][emoteCode];
              }
            }
          }
        }
        HelperTV7.emotes = emotes;
        resolve();
      });
      
    });
  },
  replaceText(text) {
    let split = text.split(' ');
    let newText = [];
    for (let word of split) {
      size = Number(settings.wasd.bes) + 1;
      if (typeof size === 'undefined') {
        size = 2
      };
      if (size == 3) size = 4

      if (HelperTV7.emotes[word]) {
        let user
        for (let userID in tv7Emotes) {
          if (typeof tv7Emotes[userID][word] == 'string') {
            user = userID
            break;
          }
        }
        word = `<div class="bttv-emote tooltip-wrapper"> <img class="stickerovg tv7 small" style="vertical-align: middle; width: auto!important;" src="https://cdn.7tv.app/emote/${this.emotes[word]}/${size}x" alt="${word}" /> ${!settings.wasd.hoverTooltipEmote ? "" : `<ovg-tooltip><div class="tooltip tooltip_position-top tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Смайл:&nbsp;${word} <br> ${typeof tv7Users[user].username == 'string' ? `Канал: ${tv7Users[user].username} <br> Эмоции на канале 7TV` : 'Общедоступный 7TV'} </div></div></ovg-tooltip>`} <span class="chat-message-text stickertext stickerovg_text">Стикер</span> </div>`;
      }

      newText.push(word);
    }
    return newText.join(' ');
  },
  getUserEmotes(username) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: `https://api.7tv.app/v2/users/${username}/emotes`,
        success: function(out) {
          resolve(out)
        },
        error: function(out) {
          reject(out.message)
        }
      });
    });
  },
  updateUserChannelEmotes(userID, username) {
    return HelperTV7.getUserEmotes(username).then((tv7Data) => {
      return HelperTV7.updateEmotes(userID, tv7Data);
    }).then(() => {
      return HelperTV7.addUser(userID, username);
    }).catch((err) => {
      return Promise.reject('У пользователя нет TV7.');
    });
  },
  updateEmotes(userID, tv7Data) {
    tv7Emotes[userID] = {};
    let emoteList = [];
    if (Array.isArray(tv7Data)) {
      emoteList = emoteList.concat(tv7Data);
    }
    /*if (Array.isArray(tv7Data.sharedEmotes)) {
        emoteList = emoteList.concat(tv7Data.sharedEmotes);
    }*/
    for (let emote of emoteList) {
      tv7Emotes[userID][emote.name] = emote.id;
    }
  },
  addUser(userID, username) {
    if (typeof userID === 'string') userID = parseInt(userID);
    return new Promise((resolve) => {
      let addUser = typeof tv7Users[userID] === 'undefined';
      tv7Users[userID] = {
        username,
        lastUpdate: Date.now()
      };
      resolve();
    });
  },
  tryAddUser(username) {
    return new Promise((resolve) => {
	    if (!username.length) {
        resolve()
        return;
      }
	    // if (HelperTV7.isBusy) return;
	    HelperTV7.isBusy = true;
	    let beforeEmotes = Object.keys(HelperTV7.emotes).length;
	    let userID;
	    HelperTwitch.getUserID(username).then((data) => {
	      if (data.length) {
	        userID = data[0]._id;
	        username = data[0].display_name;
	        if (typeof tv7Users[userID] !== 'undefined') return Promise.reject('Пользователь уже в списке');
	        return HelperTV7.updateUserChannelEmotes(userID, data[0].display_name);
	      } else {
	        return Promise.reject(`Пользователь Twitch не найден: ${username}`);
	      }
	    }).then(() => {
	      return HelperTV7.update();
	    }).then(() => {
	      let newEmotes = Object.keys(HelperTV7.emotes).length - beforeEmotes;
	      console.log(`Пользователь ${username} и ${newEmotes} уникальные эмоции добавлены.`);
	    }).catch((err) => {
	      console.log(err);
	    }).finally(() => {
	      HelperTV7.isBusy = false;
	      resolve()
	    });
	   });
  }
}