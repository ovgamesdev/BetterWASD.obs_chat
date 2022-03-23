const HelperSettings = {
  messageTimeout: null,
  availableSettings: {
    obschat: {
      channelname: {
        title: `Название канала`,
        type: 'text'
      },
      closedViewUrl: {
        title: `Ключ закрытой трансляции ${Helper.tooltip('', `где найти?`, 'https://www.youtube.com/watch?v=bPisvPlLvZY')}`,
        type: 'text'
      },

      // theme: {
      //   title: `Тема`,
      //   type: 'select',
      //   items: [
      //     {
      //       value: 0,
      //       label: 'Светлая'
      //     },
      //     {
      //       value: 1,
      //       label: 'Темная'
      //     }
      //   ]
      // },
      stime: {
        title: `Время отправки сообщения`,
        type: 'boolean'
      },
      simg: {
        title: `Аватарка пользователя`,
        type: 'boolean'
      },
      mf: {
        title: 'Скрыть сообщение о новом фолловере',
        type: 'boolean'
      },
      ms: {
        title: `Скрыть системные сообщения ${Helper.tooltip('', `Добро пожаловать, бан пользователя и др.`)}`,
        type: 'boolean'
      },
      bes: {
        title: `Разрешение смайликов в чате BTTV, FFZ и 7TV`,
        type: 'select',
        items: [
          {
            value: 0,
            label: '28px, 32px, 32px'
          },
          {
            value: 1,
            label: '56px, 64px, 48px'
          },
          {
            value: 2,
            label: '112px, 128px, 128px'
          }
        ]
      },
      st: {
        title: `Отображение стикеров WASD`,
        type: 'select',
        items: [
          {
            value: 0,
            label: 'По умолчанию'
          },
          {
            value: 1,
            label: 'Минимизировать'
          },
          {
            value: 2,
            label: 'Скрыть сообщение'
          },
          {
            value: 3,
            label: 'Показать сообщение: Стикер'
          }
        ]
      },
      frs: {
        title: 'Размер стикеров WASD',
        type: 'select',
        items: [
          {
            value: 0,
            label: 'Большой'
          },
          {
            value: 1,
            label: 'Маленький'
          }
        ]
      },
      ss: {
        title: 'Разрешение смайликов в чате WASD',
        type: 'select',
        items: [
          {
            value: 'large',
            label: 'original (apng)'
          },
          {
            value: 'medium',
            label: '128x128 (no apng)'
          },
          {
            value: 'small',
            label: '64x64 (no apng)'
          }
        ]
      },
      can: {
        title: `Двоеточие после никнейма`,
        type: 'boolean'
      },
      catm: {
        title: `Упоминания пользователей в чата с их цветом никнейма ${Helper.BETA}`,
        type: 'boolean'
      },
      hmb: {
        title: 'Выделять упоминания в чате жирным шрифтом',
        type: 'boolean'
      },
      sm: {
        title: 'Скрыть сообщение стримеру (донат)',
        type: 'boolean'
      },
      lc: {
        title: 'Цвет ссылки',
        type: 'color',
      },
      fl: {
        title: `Исправить ссылки в чате`,
        type: 'boolean'
      },
      fmst: {
        title: `Формат отметок времени`,
        description: 'Отформатировано <a target="_blank" href="https://momentjs.com/">library Moment.js</a>',
        type: 'select',
        items: [
          {
            value: 'h:mm',
            label: '12 часов (2:15)'
          },
          {
            value: 'h:mm:ss',
            label: '12 часов с сек. (2:15:35)'
          },
          {
            value: 'H:mm',
            label: '24 часа (14:15)'
          },
          {
            value: 'H:mm:ss',
            label: '24 часа с сек. (14:15:35)'
          },
          {
            value: 'hh:mm',
            label: 'Доп. (02:15)'
          },
          {
            value: 'hh:mm:ss',
            label: 'Доп. с сек. (02:15:35)'
          },
          {
            value: 'HH:mm',
            label: 'Доп. 24 часа (14:15)'
          },
          {
            value: 'HH:mm:ss',
            label: 'Доп. 24 часа с сек. (14:15:35)'
          }
        ]
      },
      // cma: {
      //   title: `Ник пользователя в действиях это упоминание ${Helper.tooltip('', 'не рекомендуется </br> Избранное, Подписка')}`,
      //   type: 'boolean'
      // },
      fcbc: {
        title: `Исправить символы ломающие чат ${Helper.tooltip('', 'Текст Zalgo')}`,
        description: 'С использованием <a target="_blank" href="https://github.com/mathiasbynens/strip-combining-marks/blob/master/README.md">library strip-combining-marks.js</a>.',
        type: 'boolean'
      },
      sdm: {
        title: `Стиль удаленных сообщений`,
        type: 'select',
        items: [
          {
            value: '0',
            label: 'Скрыть'
          },
          {
            value: '1',
            label: 'Затемнённое'
          },
          {
            value: '2',
            label: 'Затемнённое, зачеркнутое'
          },
          {
            value: '3',
            label: '[сообщение удалено], затемнённое'
          }
        ]
      },
      acd: {
        title: 'Искусственная задержка чата',
        type: 'select',
        items: [
          {
            value: 0,
            label: 'По умолчанию'
          },
          {
            value: 300,
            label: 'Модерация ботов; (0,3 сек.)'
          },
          {
            value: 1200,
            label: 'Умеренная модерация; (1,2 сек.)'
          },
          {
            value: 5000,
            label: 'Убрать спойлеры (5 сек.)'
          },
          {
            value: 10000,
            label: 'Очень большая (10 сек.)'
          },
          {
            value: 15000,
            label: 'Крайне большая (15 сек.)'
          },
          {
            value: 20000,
            label: 'Задержать чат (20 сек.)'
          },
          {
            value: 30000,
            label: 'Полминуты (30 сек.)'
          },
          {
            value: 60000,
            label: 'Зачем??? (1 мин.)'
          }
        ]
      },
      sl: {
        title: `Стиль ссылки`,
        type: 'select',
        items: [
          {
            value: '0',
            label: 'По умолчанию'
          },
          {
            value: '1',
            label: '[ссылка удалена]'
          }
        ]
      },
      anim: {
        title: `Анимация сообщения`,
        type: 'select',
        items: [
          {
            value: '0',
            label: 'Нет'
          },
          {
            value: '1',
            label: 'fadeInRight and fadeOut '
          }
        ]
      },
      nma: {
        title: `Скрыть сообщение после (ms) ${Helper.tooltip('', '0 - Всегда показывать сообщения')}`,
        type: 'number'
      },
      mtc: {
        title: 'Цвет текста',
        type: 'color',
      },
      mts: {
        title: 'Тень текста',
        type: 'boolean',
      },
      mtsc: {
        title: 'Цвет тени текста',
        type: 'color',
      },
      sbo: {
        title: `Показать значки создателя`,
        type: 'boolean'
      },
      sbm: {
        title: `Показать значки модератора`,
        type: 'boolean'
      },
      sbs: {
        title: `Показать значки подписчика`,
        type: 'boolean'
      },
      sba: {
        title: `Показать значки администратора`,
        type: 'boolean'
      },
      swp: {
        title: `Показать значки WASD партнера`,
        type: 'boolean'
      },
      mentionSelf: {
        title: `Выделять сообщения, упоминающие вас`,
        type: 'boolean'
      },
      cms: {
        title: 'Цвет сообщения, упоминающие вас',
        type: 'color'
      },

      obsemotes: {
        title: 'Эмоции',
        type: 'title'
      },
      bttv: {
        title: `BTTV эмоции ${Helper.tooltip('', `Перечисление twitch_username через \u0022;\u0022 Пример: twitch;username;`)}`,
        type: 'text'
      },
      ffz: {
        title: `FFZ эмоции ${Helper.tooltip('', `Перечисление twitch_username через \u0022;\u0022 Пример: twitch;username;`)}`,
        type: 'text'
      },
      tv7: {
        title: `7TV эмоции ${Helper.tooltip('', `Перечисление twitch_username через \u0022;\u0022 Пример: twitch;username;`)}`,
        type: 'text'
      },
      bwasd: {
        title: `BWASD эмоции`,
        type: 'boolean'
      },

      obsfiltration: {
        title: 'Фильтрация',
        type: 'title'
      },
      rMBL: {
        title: `Удалять сообщения упоминающие пользователей в Фильтрация - Блокировка - Пользователи`,
        type: 'boolean'
      },
    }
  },
  showMessage(message, type = 'success') {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
    let status = document.querySelector('#status')
    let textElement = status.querySelector('p');
    textElement.innerHTML = message;
    textElement.classList.remove(...textElement.classList);
    textElement.classList.add(type);
    status.classList.add('active');
    let hide = () => {
      status.removeEventListener('click', hide);
      status.classList.remove('active');
      this.messageTimeout = null;
    };
    status.addEventListener('click', hide);
    this.messageTimeout = setTimeout(hide, 2000);
  },
  _basic(title, description, formField, line=false, id) {
    return `
    <div class="option ${line ? "title" : ""}" ${id ? "id=" + id : ""}>
      <div class="ovg-option" >
        <div class="option-line" >

          <div class="labelField">
            ${line ? '<div class="line"></div>' : ''}
            <span ${line ? 'class="titleline"' : 'class="title"'}> ${title} </span>
            ${description ? `<span class="description"> ${description} </span>` : ''}
          </div>
          <div class="formField">${formField}</div>

        </div>
      </div>
    </div>`;
  },
  save(optionElements) {
    let newSettings = JSON.parse(JSON.stringify(settings));
    for (let option of optionElements) {
      if (!option.dataset.name) continue;
      // console.log(option)
      let split = option.dataset.name.split('_');
      let value = null;

      if (option.type === 'checkbox' && option.classList.contains('botevent')) {
        value = [settings[split[0]][split[1]][0], option.checked]
      } else if (option.type === 'text' && option.classList.contains('botevent')) {
        value = [option.value, settings[split[0]][split[1]][1]]
      } else if (option.type === 'radio') {
        value = option.checked && option.value === '1';
      } else if (option.type === 'checkbox') {
        value = option.checked;
      } else if (option.dataset.type === 'number' || option.type === 'number') {
        value = parseFloat(option.value);
      } else {
        value = option.value;
      }

      // console.log(value, split[0], split[1], settings[split[0]][split[1]])

      if (!newSettings[split[0]]) newSettings[split[0]] = {};

      newSettings[split[0]][split[1]] = value;

      let onChange = this.availableSettings[split[0]][split[1]]?.onChange;
      if (typeof onChange === 'function') onChange(value);
    }

    Cookies.set('settings', JSON.stringify(newSettings))
    settings = newSettings

    var iframe = document.querySelector('iframe.obschat')
    iframe?.contentWindow?.postMessage(newSettings.obschat, '*');

    this.showMessage('параметры сохранены', 'success');
  
  },
  loaded() {
    // chrome.storage.onChanged.addListener(async function(changes, namespace) {
    //   if (namespace === 'local') {
    //     // Helper.WASD.update();
    //   } else if (namespace === 'sync') {
    //     settings = await Helper.getSettings();
    //   }
    // });
  },
  build(category) {
    let html = '';
    let categorySettings = this.availableSettings[category];
    for (let name in categorySettings) {
      if (categorySettings.hasOwnProperty(name)) {
        let setting = categorySettings[name];
        let type = setting.type;
        let fieldName = `${category}_${name}`;
        if (type === 'boolean') {
          html += this.boolean(fieldName, setting.title, setting.description, settings[category][name], 'Вкл', 'Откл');
        } else if (type === 'text') {
          html += this.text(fieldName, setting.title, setting.description, settings[category][name]);
        } else if (type === 'number') {
          html += this.number(fieldName, setting.title, setting.description, settings[category][name], setting.min, setting.max);
        } else if (type === 'select') {
          html += this.select(fieldName, setting.title, setting.description, setting.items, settings[category][name]);
        } else if (type === 'none') {
          html += this.none(fieldName, setting.title, setting.description, settings[category][name]);
        } else if (type === 'title') {
          html += this.title(fieldName, setting.title, setting.description, settings[category][name], setting.id);
        } else if (type === 'color') {
          html += this.color(fieldName, setting.title, setting.description, settings[category][name]);
        } else if (type === 'botevent') {
          html += this.botevent(fieldName, setting.title, setting.description, settings[category][name]);
        }
      }
    }

    return html;
  },
  boolean(name, title, description, defaultValue = false, yesButton = 'Вкл', noButton = 'Откл') {
    if (typeof defaultValue === 'undefined') {
      updateSettingsToNew()
      return ''
    } else {
      return this._basic(title, description, `
        <ol class="flexibleButtonGroup optionTypeBoolean">
          <label class="switch-ovg">
            <input option-type="boolean" type="checkbox" id="boolean_${name}" name="boolean_${name}" value="0" class="optionField" data-name="${name}" ${defaultValue ? 'checked' : ''}>
            <span class="slider-ovg"> <div class="switcher_thumb-ovg"></div> </span>
          </label>
        </ol>`);
    }
  },
  text(name, title, description, defaultValue = '') {
    if (typeof defaultValue === 'undefined') {
      updateSettingsToNew()
      return ''
    } else {
      return this._basic(title, description, `
        <ol class="flexibleButtonGroup optionTypeBoolean">
          <input type="text" class="optionField" data-name="${name}" value="${defaultValue}" />
          <!--button class="optionField def" data-name="${name}" option-type="text"><div class="tooltip-ovg"> Сбросить по умолчанию </div><i _ngcontent-khk-c259="" class="wasd-icons-close"></i></button-->
        </ol>`);
    }
  },
  number(name, title, description, defaultValue = '', min = 0, max = 0) {
    if (typeof defaultValue === 'undefined') {
      updateSettingsToNew()
      return ''
    } else {
      return this._basic(title, description, `
        <ol class="flexibleButtonGroup optionTypeBoolean">
          <div class="def">
            <input type="number" class="optionField" data-name="${name}" value="${defaultValue}" ${min ? 'min="' + min + '" ' : ''}${max ? 'max="' + max + '"' : ''}/>
            <ovg-tooltip><div class="tooltip tooltip_position-topRight tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Правая кнопка мыши для сброса </div></div></ovg-tooltip>
          </div>
          <!--button class="optionField def" data-name="${name}" option-type="number"><div class="tooltip-ovg"> Сбросить по умолчанию </div><i _ngcontent-khk-c259="" class="wasd-icons-close"></i></button-->
        </ol>`);
    }
  },
  select(name, title, description, items = [1], defaultValue = '') {
    if (typeof defaultValue === 'undefined') {
      updateSettingsToNew()
      return ''
    } else {
      let selectOptions = '';
      defaultValue = defaultValue.toString();
      for (let item of items) {
        selectOptions += `
        <option value="${item.value}"${item.value.toString() === defaultValue ? ' selected' : ''}>${item.label}</option>`;
      }
      return this._basic(title, description, `
        <ol class="flexibleButtonGroup optionTypeBoolean">
          <div class="def">
            <select class="optionField" data-name="${name}">${selectOptions}</select>
          </div>
          <!--button class="optionField def" data-name="${name}" option-type="select"><div class="tooltip-ovg"> Сбросить по умолчанию </div><i _ngcontent-khk-c259="" class="wasd-icons-close"></i></button-->
        </ol>`);
    }
  },
  none(name, title, description, defaultValue = '') {
    return this._basic(title, description, ``, false);
  },
  title(name, title, description, defaultValue = '') {
    return this._basic(title, description, ``, true);
  },
  color(name, title, description, defaultValue = '') {
    if (typeof defaultValue === 'undefined') {
      updateSettingsToNew()
      return ''
    } else {
      return this._basic(title, description, `
        <ol class="flexibleButtonGroup optionTypeBoolean">
          <div class="def">
            <div class="clr-field" style="color: ${defaultValue};">
              <button aria-labelledby="clr-open-label"></button>
              <input type="text" option-type="color" class="optionField" data-name="${name}" value="${defaultValue}" data-coloris>
            </div>
            <ovg-tooltip><div class="tooltip tooltip_position-topRight tooltip_size-small" style="width: 260px;"><div class="tooltip-content tooltip-content_left"> Правая кнопка мыши для сброса </div></div></ovg-tooltip>
          </div>
        </ol>`);
    }
  },
  botevent(name, title, description, defaultValue = ['', false], yesButton = 'Вкл', noButton = 'Откл') {
    if (typeof defaultValue === 'undefined') {
      updateSettingsToNew()
      return ''
    } else {
      return this._basic(title, description, `
        <ol class="flexibleButtonGroup optionTypeBoolean">
          <div class="def">
            <input option-type="botevent" type="text" class="optionField botevent" data-name="${name}" value="${defaultValue[0]}"/>
            <ovg-tooltip><div class="tooltip tooltip_position-topRight tooltip_size-small" style="width: 260px;right: 40px;"><div class="tooltip-content tooltip-content_left"> Правая кнопка мыши для сброса </div></div></ovg-tooltip>
          </div>
          <label class="switch-ovg">
            <input option-type="boolean" type="checkbox" id="boolean_${name}" name="boolean_${name}" value="0" class="optionField botevent" data-name="${name}" ${defaultValue[1] ? 'checked' : ''}>
            <span class="slider-ovg"> <div class="switcher_thumb-ovg"></div> </span>
          </label>
          <!--button class="optionField def" data-name="${name}" option-type="botevent"><div class="tooltip-ovg"> Сбросить по умолчанию </div><i _ngcontent-khk-c259="" class="wasd-icons-close"></i></button-->
        </ol>`
      );
    }
  },
}