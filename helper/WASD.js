const HelperWASD = {
	usercolorapi(element) {
    // ищем цвет по api если по ласт сообщениям не нашли
    if (element.style.color == '' && settings.wasd.catm) {
      color = "rgba(var(--wasd-color-switch--rgb),.88);";
      $.ajax({
        url: `https://wasd.tv/api/search/profiles?limit=999&offset=0&search_phrase=${element.getAttribute('username').split('@').join('').toLowerCase().trim()}`,
        success: function(out) {
          let data;
          const userColors = ["#7fba40", "#1c3fc8", "#a5276d", "#913ca7", "#4332b6", "#266bc5", "#5bc3c1", "#d87539", "#a9ad47", "#3ca13b", "#4db89a", "#6a4691", "#f5a623", "#e7719e", "#9fcbef", "#7b4b4b"];
          if (out.result) {
            for (let value of out.result.rows) {
              if (value.user_login.toLowerCase().trim() == element.getAttribute('username').split('@').join('').toLowerCase().trim()) {
                color = userColors[value.user_id % (userColors.length - 1)];
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
      allNames = document.querySelectorAll('.info__text__status__name');
      allMentions = document.querySelectorAll('.chat-message-mention');
      for (let element of allNames) {
        if (element.getAttribute('username')) {
          if (channel_name.split('@').join('').toLowerCase().trim() == element.getAttribute('username').toLowerCase().trim()) {
            color = element.style.color;
            break;
          }
        }
      }
      if (color != '') {

        for (let element of allMentions) {
          if (element.getAttribute('username')) {
            if (channel_name.split('@').join('').toLowerCase().trim() == element.getAttribute('username').split('@').join('').toLowerCase().trim()) {
              color = element.style.color;
              break;
            }
          }

        }
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
        return `<span style='color: ${HelperWASD.usercolor($1.trim())};' class='chat-message-mention' username="${$1}">@${$1.trim().split('@').join('').trim()}</span>`;
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
      for (let item of text.split(' ')) {
        let itemhref;
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        if (!!pattern.test(item)) {
          text = text.replace(item, `<a target="_break" href="${hrefhttsadd(item)}">${item}</a>`);
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
}