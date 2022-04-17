const HelperBTTV = {
	items: {},
  isBusy: false,
  emotes: {},
  async loadEmotesUsers(users) {
  	let u = users.split(';')
  	let index = 0
	  console.log('load bttv', u)
    loader.updateStatus('Загрузка BTTV эмоций') // log
  	return new Promise((resolve) => {
	  	for (let username of u) {
	  		HelperBTTV.tryAddUser(username).finally(() => {
	  			index ++
          loader.updateStatus('Загрузка BTTV эмоций', `${index}/${u.length}`) // log
	  			if (index == u.length) {
  					resolve()
	  			}
	  		})
	  	}
	  })
  },
  fetchGlobalEmotes(items) {
    return new Promise((resolve) => {
      let bttvEmotes = items.bttvEmotes || {};
      let bttvUsers = items.bttvUsers || {};
      if (typeof bttvUsers.global === 'undefined' || Date.now() - bttvUsers.global.lastUpdate > 604800000) {

        new Promise((resolve, reject) => {
          $.ajax(`https://api.betterttv.net/3/cached/emotes/global`).always(function(out, textStatus, xhr) {
            if (xhr.status === 200) {
              return resolve(out);
            } else {
              return reject();
            }
          })
        }).then((data) => {
          bttvEmotes.global = {};
          for (let emote of data) {
            bttvEmotes.global[emote.code] = {
              id: emote.id,
              zeroWidth: false
            };
          }
        }).finally(() => {
          bttvUsers.global = {
            lastUpdate: Date.now()
          };
          items.bttvUsers = bttvUsers;
          items.bttvEmotes = bttvEmotes;
          resolve();
        });
      } else {
        resolve();
      }
    });
  },
  update() {
    return new Promise((resolve) => {
      let items = HelperBTTV.items
	    HelperBTTV.fetchGlobalEmotes(items).finally(() => {
	      bttvEmotes = items.bttvEmotes;
	      bttvUsers = items.bttvUsers;
	      let emotes = {};

	      for (let userID in items.bttvEmotes) {
	        if (items.bttvEmotes.hasOwnProperty(userID)) {
	          for (let emoteCode in items.bttvEmotes[userID]) {
	            if (items.bttvEmotes[userID].hasOwnProperty(emoteCode)) {
	              emotes[emoteCode] = items.bttvEmotes[userID][emoteCode];
	            }
	          }
	        }
	      }
	      HelperBTTV.emotes = emotes;
	      resolve();
	    });

    });
  },
  replaceText(text) {
    let split = text.split(' ');
    let newText = [];
    for (let word of split) {
      size = Number(settings.wasd.bes) + 1;
      let link = `https://cdn.betterttv.net/emote/${HelperBTTV.emotes[word]?.id}/${size}x`
      // if (settings.wasd.staticGifEmotes.toString() === '0') link = `https://cache.ffzap.com/${link}`



      if (HelperBTTV.emotes[word]) {
        let user
        for (let userID in bttvEmotes) {
          if (typeof bttvEmotes[userID][word] == 'string') {
            user = userID
            break;
          }
        }
        word = `<div data-code="${word}" class="bttv-emote tooltip-wrapper"> <img class="stickerovg bttv small" style="vertical-align: middle; width: auto!important;" src="${link}" alt="${word}" /> ${!settings.wasd.hoverTooltipEmote ? "" : `<ovg-tooltip><div class="tooltip tooltip_position-top tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Смайл:&nbsp;${word} <br> ${typeof bttvUsers[user].username == 'string' ? `Канал: ${bttvUsers[user].username} <br> Эмоции на канале BTTV` : 'Общедоступный BTTV'} </div></div></ovg-tooltip>`} <span class="chat-message-text stickertext stickerovg_text">Стикер</span> </div>`;
      }

      newText.push(word);
    }
    return newText.join(' ');
  },
  getUserEmotes(userID) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: `https://api.betterttv.net/3/cached/users/twitch/${userID}`,
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
    return HelperBTTV.getUserEmotes(userID).then((bttvData) => {
      return HelperBTTV.updateEmotes(userID, bttvData);
    }).then(() => {
      return HelperBTTV.addUser(userID, username);
    }).catch((err) => {
      return Promise.reject('У пользователя нет BetterTTV.');
    });
  },
  updateEmotes(userID, bttvData) {
    bttvEmotes[userID] = {};
    let emoteList = [];
    if (Array.isArray(bttvData.channelEmotes)) {
      emoteList = emoteList.concat(bttvData.channelEmotes);
    }
    if (Array.isArray(bttvData.sharedEmotes)) {
      emoteList = emoteList.concat(bttvData.sharedEmotes);
    }
    for (let emote of emoteList) {
      bttvEmotes[userID][emote.code] = {
        id: emote.id,
        zeroWidth: false
      };
    }
  },
  addUser(userID, username) {
    if (typeof userID === 'string') userID = parseInt(userID);
    return new Promise((resolve) => {
      let addUser = typeof bttvUsers[userID] === 'undefined';
      bttvUsers[userID] = {
        username,
        lastUpdate: Date.now()
      };
      resolve()
    });
  },
  tryAddUser(username) {
  	return new Promise((resolve) => {
	    if (!username.length) {
        resolve()
        return;
      }
	    // if (HelperBTTV.isBusy) return;
	    HelperBTTV.isBusy = true;
	    let beforeEmotes = Object.keys(HelperBTTV.emotes).length;
	    let userID;
	    HelperTwitch.getUserID(username).then((data) => {
	      if (data.length) {
	        userID = data[0]._id;
	        username = data[0].display_name;
	        if (typeof bttvUsers[userID] !== 'undefined') return Promise.reject('Пользователь уже в списке');
	        return HelperBTTV.updateUserChannelEmotes(userID, data[0].display_name);
	      } else {
	        return Promise.reject(`Пользователь Twitch не найден: ${username}`);
	      }
	    }).then(() => {
	      return HelperBTTV.update();
	    }).then(() => {
	      let newEmotes = Object.keys(HelperBTTV.emotes).length - beforeEmotes;
	      console.log(`Пользователь ${username} и ${newEmotes} уникальные эмоции добавлены.`);
	    }).catch((err) => {
	      console.log(err);
	    }).finally(() => {
	      HelperBTTV.isBusy = false;
	      resolve()
	    });
	  });
  }
}