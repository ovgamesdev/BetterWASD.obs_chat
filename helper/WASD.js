const HelperWASD = {
  userColors: ["#7fba40", "#1c3fc8", "#a5276d", "#913ca7", "#4332b6", "#266bc5", "#5bc3c1", "#d87539", "#a9ad47", "#3ca13b", "#4db89a", "#6a4691", "#f5a623", "#e7719e", "#9fcbef", "#7b4b4b"],
	badges: {},
  paints: {},
  usercolorapi(element) {
    // ищем цвет по api если по ласт сообщениям не нашли
    if (element.style.color == '' && settings.wasd.catm) {
      let color = "";
      $.ajax({
        url: `https://wasd.tv/api/search/profiles?limit=999&offset=0&search_phrase=${element.getAttribute('username').split('@').join('').toLowerCase().trim()}`,
        success: function(out) {
          let data;
          if (out.result) {
            for (let value of out.result.rows) {
              if (value.user_login && value.user_login.toLowerCase().trim() == element.getAttribute('username').split('@').join('').toLowerCase().trim()) {
                color = HelperWASD.userColors[value.user_id % (HelperWASD.userColors.length - 1)];
                break;
              }
            }
          }
          element.style.color = color;
        }
      });
    }
  },
  usercolor(channel_name) {
    // ищем цвет по ласт сообщениям тк у api есть задержка
    let color = ''
    if (settings.wasd.catm) {
      let u = document.querySelector(`.info__text__status__name[username="${channel_name.trim().toLowerCase().split('@').join('')}"]`)
      if (u) color = u.getAttribute('u_color')
      if (color != '') {
        let m = document.querySelector(`.chat-message-mention[username="${channel_name.trim().toLowerCase()}"]`)
        if (m) color = m.style.color;
      }
    } else {
      color = 'inherit'
    }
    return color;
  },
  get_user_color(messageText, div) {
    let bl = ''
    if (messageText) {
      messageText.innerHTML = messageText.innerHTML.replace(/@[a-zA-Z0-9_-]+/ig, function($1) {
        let paint = HelperWASD.paints[$1.trim().split('@').join('')]
        return `<span ${paint ? 'data-betterwasd-paint="' + paint + '"' : ''} style='color: ${HelperWASD.usercolor($1.trim())};' class='chat-message-mention' username="${$1.toLowerCase()}">@${$1.trim().split('@').join('').trim()}</span>`;
      });

      div.querySelectorAll('.chat-message-mention').forEach(element => {
        if (element.style.color == '') HelperWASD.usercolorapi(element);
        bl += element.getAttribute('username').split('@').join('') + ' '
      });

    }
    return bl
  },
  textToURL(text) {
    if (text) {
      if (typeof settings.wasd.sl == 'undefined') settings.wasd.sl = '0'
      for (let item of text.split(' ')) {
        let itemhref;
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\,?)' + // ,
          '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        if (!!pattern.test(item)) {
          text = text.replace(item, () => {
            if (settings.wasd.sl.toString() == '0') {
              return `<a target="_break" href="${hrefhttsadd(item.replace(/,/i, ''))}">${item}</a>`
            } else if (settings.wasd.sl.toString() == '1') {
              return `[ссылка удалена]`
            }
          });
        }

        function hrefhttsadd(item) {
          if (!(item.search('http://') != -1) && !(item.search('https://') != -1)) {
            return `//${item}`;
          } else {
            return item;
          }
        }
      }
      return text;
    }
  },
  elementToURL(html, chat=true) {
    if (html) {
      if (typeof settings.wasd.sl == 'undefined') settings.wasd.sl = '0'
      if (chat) html.innerHTML = html.innerHTML.replace(/<a[^>]*href="([^"]+)"[^>]*>(?:.*?<\/a>)?/g, ' $1 ');
      const options = {
        target: "_blank",
        className: 'test',
        format: (value, type) => {
          if (chat) value = value.replace(/@/g, '+at+')
            
          if (settings.wasd.sl.toString() == '0') {
            return value
          } else if (settings.wasd.sl.toString() == '1') {
            return `[ссылка удалена]`
          }

          // if (chat && type === 'url' && value.length > settings.wasd.truncateLink.toString() === '0' ? undefined : Number(settings.wasd.truncateLink)) {
          //   value = value.slice(0, Number(settings.wasd.truncateLink)) + '…';
          // }
          return value
        },
        formatHref: (value) => { if (chat) { return value.replace(/@/g, '+at+') } return value },
      }
      return linkifyElement(html, options, document)
    }
  },
  async loadBadges() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://betterwasd.herokuapp.com/api/v1/users`,
        success: (out) => {
          HelperWASD.badges = out.badges
          HelperWASD.paints = out.paints

          for (let paint in HelperWASD.paints) {
            for (let user of document.querySelectorAll(`.info__text__status__name[username="${paint}"] > span`)) {
              user.dataset.betterwasdPaint = HelperWASD.paints[paint]
            }
            for (let user of document.querySelectorAll(`.chat-message-mention[username="@${paint}"]`)) {
              user.dataset.betterwasdPaint = HelperWASD.paints[paint]
            }
          }

          resolve()

        },
        error: () => {
          HelperWASD.badges = {}
          HelperWASD.paints = {}

          resolve()
        }
      });
    });
  },
  loadStyle() {

    loader.updateStatus('Загрузка стиля') // log
    $.ajax({
      url: new URL(document.URL).searchParams.get('style'),
      success: function(out) {
        try {
          document.querySelector('style.custom').innerHTML = JSON.parse(out).style
        } catch (err) {
          loader.updateStatus('Ошибка загрузки стиля', err) // log
        }
      },
      error: function(err) {
        loader.updateStatus('Ошибка загрузки стиля', err) // log
      }
    })

  }
}