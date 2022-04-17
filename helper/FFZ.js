const HelperFFZ = {
	items: {},
  isBusy: false,
  emotes: {},
  async loadEmotesUsers(users) {
  	let u = users.split(';')
  	let index = 0
	  console.log('load ffz', u)
    loader.updateStatus('Загрузка FFZ эмоций') // log
  	return new Promise((resolve) => {
	  	for (let username of u) {
	  		HelperFFZ.tryAddUser(username).finally(() => {
	  			index ++
          loader.updateStatus('Загрузка FFZ эмоций', `${index}/${u.length}`) // log
	  			if (index == u.length) {
  					resolve()
	  			}
	  		})
	  	}
	  })
  },
  fetchGlobalEmotes(items) {
    return new Promise((resolve) => {
      let ffzEmotes = items.ffzEmotes || {};
      let ffzUsers = items.ffzUsers || {};
      if (typeof ffzUsers.global === 'undefined' || Date.now() - ffzUsers.global.lastUpdate > 604800000) {

        new Promise((resolve, reject) => {
          $.ajax(`https://api.frankerfacez.com/v1/set/global`).always(function(out, textStatus, xhr) {
            if (xhr.status === 200) {
              return resolve(out);
            } else {
              return reject();
            }
          })
        }).then((data) => {
          ffzEmotes.global = {};
          for (let emote of data.sets[data.default_sets[0]].emoticons) {
            ffzEmotes.global[emote.name] = {
              id: emote.id,
              zeroWidth: false
            };
          }
        }).finally(() => {
          ffzUsers.global = {
            lastUpdate: Date.now()
          };
          items.ffzUsers = ffzUsers;
          items.ffzEmotes = ffzEmotes;
          resolve();
        });
      } else {
        resolve();
      }
    });
  },
  update() {
    return new Promise((resolve) => {
      let items = HelperFFZ.items
      HelperFFZ.fetchGlobalEmotes(items).finally(() => {
        ffzEmotes = items.ffzEmotes;
        ffzUsers = items.ffzUsers;
        let emotes = {};

        for (let userID in items.ffzEmotes) {
          if (items.ffzEmotes.hasOwnProperty(userID)) {
            for (let emoteCode in items.ffzEmotes[userID]) {
              if (items.ffzEmotes[userID].hasOwnProperty(emoteCode)) {
                emotes[emoteCode] = items.ffzEmotes[userID][emoteCode];
              }
            }
          }
        }
        HelperFFZ.emotes = emotes;
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

      if (HelperFFZ.emotes[word]) {
        let user
        for (let userID in ffzEmotes) {
          if (typeof ffzEmotes[userID][word] == 'number') {
            user = userID
            break;
          }
        }
        word = `<div data-code="${word}" class="bttv-emote tooltip-wrapper"> <img class="stickerovg ffz small" style="vertical-align: middle; width: auto!important;" src="https://cdn.frankerfacez.com/emote/${this.emotes[word]?.id}/${size}" alt="${word}" /> ${!settings.wasd.hoverTooltipEmote ? "" : `<ovg-tooltip><div class="tooltip tooltip_position-top tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Смайл:&nbsp;${word} <br> ${typeof ffzUsers[user].username == 'string' ? `Канал: ${ffzUsers[user].username} <br> Эмоции на канале FFZ` : 'Общедоступный FFZ'} </div></div></ovg-tooltip>`} <span class="chat-message-text stickertext stickerovg_text">Стикер</span> </div>`;
      }

      newText.push(word);
    }
    return newText.join(' ');
  },
  getUserEmotes(userID) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: `https://api.frankerfacez.com/v1/room/id/${userID}`,
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
    return HelperFFZ.getUserEmotes(userID).then((ffzData) => {
      return HelperFFZ.updateEmotes(userID, ffzData);
    }).then(() => {
      return HelperFFZ.addUser(userID, username);
    }).catch((err) => {
      return Promise.reject('У пользователя нет FFZ.');
    });
  },
  updateEmotes(userID, ffzData) {
    ffzEmotes[userID] = {};
    let emoteList = [];
    if (Array.isArray(ffzData.sets[ffzData.room.set].emoticons)) {
      emoteList = emoteList.concat(ffzData.sets[ffzData.room.set].emoticons);
    }
    /*if (Array.isArray(ffzData.sharedEmotes)) {
        emoteList = emoteList.concat(ffzData.sharedEmotes);
    }*/
    for (let emote of emoteList) {
      ffzEmotes[userID][emote.name] = {
        id: emote.id,
        zeroWidth: false
      };
    }
  },
  addUser(userID, username) {
    if (typeof userID === 'string') userID = parseInt(userID);
    return new Promise((resolve) => {
      let addUser = typeof ffzUsers[userID] === 'undefined';
      ffzUsers[userID] = {
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
	    // if (HelperFFZ.isBusy) return;
	    HelperFFZ.isBusy = true;
	    let beforeEmotes = Object.keys(HelperFFZ.emotes).length;
	    let userID;
	    HelperTwitch.getUserID(username).then((data) => {
	      if (data.length) {
	        userID = data[0]._id;
	        username = data[0].display_name;
	        if (typeof ffzUsers[userID] !== 'undefined') return Promise.reject('Пользователь уже в списке');
	        return HelperFFZ.updateUserChannelEmotes(userID, data[0].display_name);
	      } else {
	        return Promise.reject(`Пользователь Twitch не найден: ${username}`);
	      }
	    }).then(() => {
	      return HelperFFZ.update();
	    }).then(() => {
	      let newEmotes = Object.keys(HelperFFZ.emotes).length - beforeEmotes;
	      console.log(`Пользователь ${username} и ${newEmotes} уникальные эмоции добавлены.`);
	    }).catch((err) => {
	      console.log(err);
	    }).finally(() => {
	      HelperFFZ.isBusy = false;
	      resolve()
	    });
    });
  }
}