const HelperWASD = {
	self_channel_name: '',
	closedViewUrl: '',
  obs_addUserToBlackList(username) {
    let html = document.querySelector('.obs_blacklist .user .ovg-items')
    let item = document.createElement('tr')
    item.classList.add(`table-menu__block`)
    item.style = 'justify-content: space-between;'

    let usernameed = settings.wasd.userNameEdited[username.trim().split('@').join('')];
    item.innerHTML = `<td><div><p title="${username}"> ${usernameed ? usernameed+' ('+username+')' : username} </p></div></td> <td><div><p> ${(new Date(settings.obschat.list.blockUserList[username])).toLocaleString()} </p></div></td> <td class="td-btn-remove"><div> <ovg-button class="flat-btn ovg removeUser"> <button class="medium ovg remove warning" data="${username}"><i class="wasd-icons-delete" style="pointer-events: none;"></i></button> <ovg-tooltip><div class="tooltip tooltip_position-top tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Удалить </div></div></ovg-tooltip> </ovg-button> </div></td>`;
    item.setAttribute('data', username)
    html.append(item)
    item.querySelector('.remove').addEventListener('click', ({ target }) => {
      let nickname = target.getAttribute('data')
      delete settings.obschat.list.blockUserList[nickname];
      item.remove()
      HelperWASD.showChatMessage(`Пользователь ${nickname} удален из ЧС`, 'success')
      //ovg.log(settings.list.blockUserList)
      HelperSettings.save([document.querySelector('.optionField')]);
    })
  },
  obs_addUserToHighLight(username) {
    let html = document.querySelector('.obs_highlight .user .ovg-items')
    let item = document.createElement('tr')
    item.classList.add(`table-menu__block`)
    item.style = 'justify-content: space-between;'

    let usernameed = settings.wasd.userNameEdited[username.trim().split('@').join('')];
    let setting = settings.obschat.list.highlightUserList[username]

    item.innerHTML = `<td><div><p title="${username}, ${setting.color}, ${setting.register}"> ${usernameed ? usernameed+' ('+username+')' : username} </p></div></td> <td><div><p> ${new Date(setting.date).toLocaleString()} </p></div></td> <td><div><p><div class="clr-field" style="color: ${setting.color};height: 24px;width: 34px;"><button aria-labelledby="clr-open-label"></button></div></p></div></td> <td class="td-btn-remove"><div> <ovg-button class="flat-btn ovg removeUser"> <button class="medium ovg remove warning" data="${username}"><i class="wasd-icons-delete" style="pointer-events: none;"></i></button> <ovg-tooltip><div class="tooltip tooltip_position-top tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Удалить </div></div></ovg-tooltip> </ovg-button> </div></td>`;
    item.setAttribute('data', username)
    html.append(item)
    item.querySelector('.remove').addEventListener('click', ({ target }) => {
      let nickname = target.getAttribute('data')
      delete settings.obschat.list.highlightUserList[nickname];
      item.remove()
      HelperWASD.showChatMessage(`Пользователь ${nickname} удален из выделения`, 'success')
      //ovg.log(settings.list.highlightUserList)
      HelperSettings.save([document.querySelector('.optionField')]);
    })
  },
  obs_addTermToBlackList(term) {
    let html = document.querySelector('.obs_blacklist .term .ovg-items')
    let item = document.createElement('tr')
    item.classList.add(`table-menu__block`)
    item.style = 'justify-content: space-between;'

    item.innerHTML = `<td><div><p title="${term}"> ${term} </p></div></td> <td><div><p> ${(new Date(settings.obschat.list.blockTermList[term])).toLocaleString()} </p></div></td> <td class="td-btn-remove"><div> <ovg-button class="flat-btn ovg removeUser"> <button class="medium ovg remove warning" data="${term}"><i class="wasd-icons-delete" style="pointer-events: none;"></i></button> <ovg-tooltip><div class="tooltip tooltip_position-top tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Удалить </div></div></ovg-tooltip> </ovg-button> </div></td>`;
    item.setAttribute('data', term)
    html.append(item)
    item.querySelector('.remove').addEventListener('click', ({ target }) => {
      let termin = target.getAttribute('data')
      delete settings.obschat.list.blockTermList[termin];
      item.remove()
      HelperWASD.showChatMessage(`Термин ${termin} удален из ЧС`, 'success')
      //ovg.log(settings.list.blockTermList)
      HelperSettings.save([document.querySelector('.optionField')]);
    })
  },
  obs_addTermToHighLight(term) {
    let html = document.querySelector('.obs_highlight .term .ovg-items')
    let item = document.createElement('tr')
    item.classList.add(`table-menu__block`)
    item.style = 'justify-content: space-between;'

    let setting = settings.obschat.list.highlightTermList[term]

    item.innerHTML = `<td><div><p title="${term}, ${setting.color}, ${setting.register}, ${setting.whole}"> ${term} </p></div></td> <td><div><p> ${new Date(setting.date).toLocaleString()} </p></div></td> <td><div><p><div class="clr-field" style="color: ${setting.color};height: 24px;width: 34px;"><button aria-labelledby="clr-open-label"></button></div></p></div></td> <td class="td-btn-remove"><div> <ovg-button class="flat-btn ovg removeUser"> <button class="medium ovg remove warning" data="${term}"><i class="wasd-icons-delete" style="pointer-events: none;"></i></button> <ovg-tooltip><div class="tooltip tooltip_position-top tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Удалить </div></div></ovg-tooltip> </ovg-button> </div></td>`;
    item.setAttribute('data', term)
    html.append(item)
    item.querySelector('.remove').addEventListener('click', ({ target }) => {
      let termin = target.getAttribute('data')
      delete settings.obschat.list.highlightTermList[termin];
      item.remove()
      HelperWASD.showChatMessage(`Термин ${termin} удален из выделения`, 'success')
      //ovg.log(settings.list.highlightTermList)
      HelperSettings.save([document.querySelector('.optionField')]);
    })
  },
  obs_addUserToBL(user) {
    let username = user.trim().split('@').join('')
    if (!settings.obschat.list.blockUserList[username]) {
      HelperWASD.showChatMessage(`Пользователь ${username} добавлен в obs ЧС`, 'success')
      settings.obschat.list.blockUserList[username] = new Date();
      HelperWASD.obs_addUserToBlackList(username)
      HelperSettings.save([document.querySelector('.optionField')]);
    } else {
      HelperWASD.showChatMessage('Пользователь уже в obs ЧС')
    }
    blacklistAddUser.value = ''
  },
  obs_addUserToHL(user, color = '', register = true) {
    let username = user.trim().split('@').join('')
    if (!settings.obschat.list.highlightUserList[username]) {
      HelperWASD.showChatMessage(`Пользователь ${username} добавлен в выделение obs`, 'success')
      settings.obschat.list.highlightUserList[username] = {}
      settings.obschat.list.highlightUserList[username]['username'] = username
      settings.obschat.list.highlightUserList[username]['date'] = new Date()
      settings.obschat.list.highlightUserList[username]['color'] = obs_highlightAddUserColor.value
      settings.obschat.list.highlightUserList[username]['register'] = register
      HelperWASD.obs_addUserToHighLight(username)
      HelperSettings.save([document.querySelector('.optionField')]);
    } else {
      HelperWASD.showChatMessage('Пользователь уже в obs ЧС')
    }
    highlightAddUser.value = ''
  },
  obs_addTermToBL(t) {
    let term = t.trim()
    if (!settings.obschat.list.blockTermList[term]) {
      HelperWASD.showChatMessage(`Термин ${term} добавлен в obs ЧС`, 'success')
      settings.obschat.list.blockTermList[term] = new Date();
      HelperWASD.obs_addTermToBlackList(term)
      HelperSettings.save([document.querySelector('.optionField')]);
    } else {
      HelperWASD.showChatMessage('Пользователь уже в obs ЧС')
    }
    blacklistAddTerm.value = ''
  },
  obs_addTermToHL(t, color = '', register = true, whole = true) {
    let term = t.trim()
    if (!settings.obschat.list.highlightTermList[term]) {
      HelperWASD.showChatMessage(`Термин ${term} добавлен в выделение obs`, 'success')
      settings.obschat.list.highlightTermList[term] = {}
      settings.obschat.list.highlightTermList[term]['term'] = term
      settings.obschat.list.highlightTermList[term]['date'] = new Date()
      settings.obschat.list.highlightTermList[term]['color'] = obs_highlightAddTermColor.value
      settings.obschat.list.highlightTermList[term]['register'] = register
      settings.obschat.list.highlightTermList[term]['whole'] = whole
      HelperWASD.obs_addTermToHighLight(term)
      HelperSettings.save([document.querySelector('.optionField')]);
    } else {
      HelperWASD.showChatMessage('Пользователь уже в obs ЧС')
    }
    highlightAddTerm.value = ''
  },
  
}