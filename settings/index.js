let storageType = 'sync';

let settings = Helper.getDefaultSettings();


const BetterStreamChat = {
  settingsDiv: null,
  async init() {
    //<editor-fold desc="changelog">
    let changelogLabels = {
      added: '<span class="label" style="color: var(--wasd-color-text-prime);background: none;font-weight: 600;">Добавлено</span>',
      optimized: '<span class="label" style="color: var(--wasd-color-text-prime);background: none;font-weight: 600;">Оптимизировано</span>',
      changed: '<span class="label" style="color: var(--wasd-color-text-prime);background: none;font-weight: 600;">Изменено</span>',
      fixed: '<span class="label" style="color: var(--wasd-color-text-prime);background: none;font-weight: 600;">Исправлено</span>',
      removed: '<span class="label" style="color: var(--wasd-color-text-prime);background: none;font-weight: 600;">Удалено</span>'
    };
    let changelogList = [
      {
        version: '1.0.0',
        date: '2021-12-23',
        items: [{
          text: [
            'Первый выпуск'
          ],
          label: 'added'
        }]
      }
    ];
    //</editor-fold>
    let changelogHtml = '';
    for (let changelog of changelogList.slice(0, 5)) {
      changelogHtml += `<h2 style="color: var(--wasd-color-text-prime);">Version ${changelog.version} (${changelog.date})</h2><ul style="display: grid;padding-inline-start: 4px;margin: 5px 0;">`;

      for (let item of changelog.items) {
        if (item.label) {
          let labelHtml = '';
          let labels = item.label.split(' ');

          for (let label of labels) {
            changelogHtml += changelogLabels[label];
          }

          for (let text of item.text) {
            changelogHtml += `<span class="textlabel">• ${text}</span>`;
          }                    
        }

        if (item.issueID) {
          item.text += ` (<a target="_blank" href="https://github.com/ovgamesdev/WASD_TV/issues/${item.issueID}">#${item.issueID}</a>)`;
        }
      }
      changelogHtml += '</ul>';
    }

    //<editor-fold desc="settings div">
    let settingsDiv = document.createElement('div');
    this.settingsDiv = settingsDiv;
    settingsDiv.id = 'bscSettingsPanel';
    settingsDiv.innerHTML = `
      <div id="status">
        <p>
        </p>
      </div>
      <header>

        <div class="header__left-side">
          <a class="logo">
            <img alt="BetterWASD.BOT" src="img/Wasd_Better_color_logo_dark.png">
            <div class="logo__mob" tabindex="0"></div>
          </a>

          <wasd-input class="ng-valid ng-dirty ng-touched notfocused" id="settingsSearchDiv">
            <div ovg="" class="wasd-input-wrapper">
              <div ovg="" class="wasd-input">
                <input ovg="" id="settingsSearch" class="has-button ng-pristine ng-untouched ng-valid ui-autocomplete-input" placeholder="Поиск настроек" type="text" autocomplete="off" style="margin: 0;">
                <button ovg="" type="button" class="button-icon">
                  <i ovg="" class="wasd-icons-search"></i>
                </button>
              </div>
            </div>
          </wasd-input>

        </div>

      </header>

      <main class="active" data-tab="obschat" style="height: calc(100% - 48px);width: 70%;">
        <h1 style="padding: 10px 10px 5px 10px;"> Чат для OBS с эмоциями </h1>
        ${HelperSettings.build('obschat')}

        <div class="obs_blacklist" style="padding-left: 10px;padding-right: 10px;">
          <h3 style="padding-left: 10px; padding-right: 10px;"> Блокировка - Пользователи </h3>
          <wasd-input _ngcontent-gmb-c228="" _ngcontent-gmb-c28="" class="ng-valid ng-dirty ng-touched">
            <div ovg="" class="wasd-input-wrapper">
              <div ovg="" class="wasd-input">
                <label ovg=""></label>
                <input id="obs_blacklistAddUser" ovg="" class="has-button ng-pristine ng-untouched ng-valid" placeholder=" Добавить пользователя " type="text">
                <button id="obs_blacklistAddUserBtn" ovg="" type="button" class="button-icon">
                  <i ovg="" class="wasd-icons-add"></i>
                </button>
              </div>
            </div>
          </wasd-input>

          <table class="table-ovg user">
            <thead class="thead-ovg">
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Имя пользователя</div>
              </th>
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Время добавления</div>
              </th>
              <th class="table-heading-ovg remove">
                <div class="table-heading-text-ovg">Действия</div>
              </th>
            </thead>
            <tbody class="ovg-items">
            </tbody>
          </table>


          <h3 style="padding-left: 10px; padding-right: 10px;"> Блокировка - Термины </h3>
          <wasd-input _ngcontent-gmb-c228="" _ngcontent-gmb-c28="" class="ng-valid ng-dirty ng-touched">
            <div ovg="" class="wasd-input-wrapper">
              <div ovg="" class="wasd-input">
                <label ovg=""></label>
                <input id="obs_blacklistAddTerm" ovg="" class="has-button ng-pristine ng-untouched ng-valid" placeholder=" Добавить термин " type="text">
                <button id="obs_blacklistAddTermBtn" ovg="" type="button" class="button-icon">
                  <i ovg="" class="wasd-icons-add"></i>
                </button>
              </div>
            </div>
          </wasd-input>

          <table class="table-ovg term">
            <thead class="thead-ovg">
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Термин</div>
              </th>
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Время добавления</div>
              </th>
              <th class="table-heading-ovg remove">
                <div class="table-heading-text-ovg">Действия</div>
              </th>
            </thead>
            <tbody class="ovg-items">
            </tbody>
          </table>
        </div>

        <div class="obs_highlight" style="padding-left: 10px;padding-right: 10px;">
          <h3 style="padding-left: 10px; padding-right: 10px;"> Выделение - Пользователи </h3>
          <wasd-input _ngcontent-gmb-c228="" _ngcontent-gmb-c28="" class="ng-valid ng-dirty ng-touched">
            <div ovg="" class="wasd-input-wrapper">
              <div ovg="" class="wasd-input">
                <label ovg=""></label>
                <input id="obs_highlightAddUser" ovg="" class="has-button ng-pristine ng-untouched ng-valid" placeholder=" Добавить пользователя " type="text">
                <button id="obs_highlightAddUserBtn" ovg="" type="button" class="button-icon">
                  <i ovg="" class="wasd-icons-add"></i>
                </button>
                <div class="clr-field" style="color: #00000000;">
                  <button aria-labelledby="clr-open-label"></button>
                  <input id="obs_highlightAddUserColor" type="text" value="#00000000" data-coloris>
                </div>
              </div>
            </div>
          </wasd-input>

          <table class="table-ovg user">
            <thead class="thead-ovg">
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Имя пользователя</div>
              </th>
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Время добавления</div>
              </th>
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Цвет</div>
              </th>
              <th class="table-heading-ovg remove">
                <div class="table-heading-text-ovg">Действия</div>
              </th>
            </thead>
            <tbody class="ovg-items">
            </tbody>
          </table>


          <h3 style="padding-left: 10px; padding-right: 10px;"> Выделение - Термины </h3>
          <wasd-input _ngcontent-gmb-c228="" _ngcontent-gmb-c28="" class="ng-valid ng-dirty ng-touched">
            <div ovg="" class="wasd-input-wrapper">
              <div ovg="" class="wasd-input">
                <label ovg=""></label>
                <input id="obs_highlightAddTerm" ovg="" class="has-button ng-pristine ng-untouched ng-valid" placeholder=" Добавить термин " type="text">
                <button id="obs_highlightAddTermBtn" ovg="" type="button" class="button-icon">
                  <i ovg="" class="wasd-icons-add"></i>
                </button>
                <div class="clr-field" style="color: #00000000;">
                  <button aria-labelledby="clr-open-label"></button>
                  <input id="obs_highlightAddTermColor" type="text" value="#00000000" data-coloris>
                </div>
              </div>
            </div>
          </wasd-input>

          <table class="table-ovg term">
            <thead class="thead-ovg">
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Термин</div>
              </th>
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Время добавления</div>
              </th>
              <th class="table-heading-ovg">
                <div class="table-heading-text-ovg">Цвет</div>
              </th>
              <th class="table-heading-ovg remove">
                <div class="table-heading-text-ovg">Действия</div>
              </th>
            </thead>
            <tbody class="ovg-items">
            </tbody>
          </table>
        </div>

        <p style="padding: 20px 10px 5px 10px;">Если вы обновите ссылку на закрытую трансляцию, то чат в доступе по ссылке перестанет работать! </p>
      </main>
      <iframe src="" class="obschat" style="height: calc(100% - 48px);width: 30%;"></iframe>

      <main class="text" data-tab="changelog">
        <h1>Журнал изменений</h1>
        <!--h4 style="margin-top:10px;padding-left: 10px;padding-right: 0px;margin-bottom: 0px;"> Информацию о будущих версиях можно найти <a href="https://wasd.tv/ovgames/posts" target="_blank">тут</a></h4-->
        ${changelogHtml}
      </main>
      `;

    document.body.append(settingsDiv);
    BetterStreamChat.changelog = changelogList[0]

    // settingsDiv.querySelector('#settingsSearchDiv button').addEventListener('click', () => {
    //   settingsSearchDiv.classList.remove('notfocused')
    //   settingsSearch.dispatchEvent(new Event('input'))
    //   settingsSearch.focus()
    // });

    // settingsSearch.addEventListener('blur', () => {
    //   settingsSearch.value = ''
    //   settingsSearchDiv.classList.add('notfocused')
    // });

    let fontStyle = document.createElement('style');
    fontStyle.type = 'text/css';
    fontStyle.innerHTML = '';
    fontStyle.appendChild(document.createTextNode(`@font-face {
      font-family: 'icomoon';
      src:  url(css/fonts/icomoon.ttf?ek8nz4) format('truetype'),
        url(css/fonts/icomoon.woff?ek8nz4) format('woff'),
        url(css/fonts/icomoon.svg?ek8nz4#icomoon) format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }`));
    document.body.append(fontStyle);

    // to def
    for (let option of settingsDiv.querySelectorAll('.optionField.def')) {
      option.addEventListener('click', (event) => {
        let split = event.target.dataset.name.split('_');
        switch (event.target.getAttribute('option-type')) {
          // case 'boolean':
          //     event.target.parentElement.querySelector(`input[id=boolean_${event.target.getAttribute('data-name')}]`).checked = Helper.getDefaultSettings()[split[0]][split[1]]
          //     HelperSettings.save([event.target.parentElement.querySelector('input[type="checkbox"]')])
          //     break;
          // case 'text':
          //     event.target.parentElement.querySelector('input[type="text"]').value = Helper.getDefaultSettings()[split[0]][split[1]]
          //     HelperSettings.save([event.target.parentElement.querySelector('input[type="text"]')])
          //     break;
          case 'number':
            event.target.parentElement.querySelector('input[type="number"]').value = Helper.getDefaultSettings()[split[0]][split[1]]
            event.target.parentElement.querySelector('input[type="number"]').dispatchEvent(new Event('change'));
            break;
          case 'select':
            event.target.parentElement.querySelector('select').value = Helper.getDefaultSettings()[split[0]][split[1]]
            event.target.parentElement.querySelector('select').dispatchEvent(new Event('change'));
            break;
          case 'color':
            let defVal = Helper.varColorToColor(Helper.getDefaultSettings()[split[0]][split[1]])
            event.target.parentElement.querySelector('input[data-coloris]').value = defVal
            event.target.parentElement.style.color = defVal
            event.target.parentElement.querySelector('input[data-coloris]').dispatchEvent(new Event('change'));
            break;
          case 'botevent':
            console.log(event.target)
            event.target.parentElement.querySelector('input[type="text"]').value = Helper.getDefaultSettings()[split[0]][split[1]][0]
            event.target.parentElement.querySelector('input[type="text"]').dispatchEvent(new Event('change'));
            break;
          default:
            console.log('def')
            break;
        }
      });
    }

    for (let option of settingsDiv.querySelectorAll('.optionField')) {
      option.addEventListener('contextmenu', (event) => {
        let split = event.target.dataset.name.split('_');
        switch (event.target.getAttribute('option-type')) {
          // case 'boolean':
          //     event.target.parentElement.querySelector(`input[id=boolean_${event.target.getAttribute('data-name')}]`).checked = Helper.getDefaultSettings()[split[0]][split[1]]
          //     HelperSettings.save([event.target.parentElement.querySelector('input[type="checkbox"]')])
          //     break;
          // case 'text':
          //     event.target.parentElement.querySelector('input[type="text"]').value = Helper.getDefaultSettings()[split[0]][split[1]]
          //     HelperSettings.save([event.target.parentElement.querySelector('input[type="text"]')])
          //     break;
          case 'number':
            event.target.parentElement.querySelector('input[type="number"]').value = Helper.getDefaultSettings()[split[0]][split[1]]
            event.target.parentElement.querySelector('input[type="number"]').dispatchEvent(new Event('change'));
            break;
          case 'select':
            event.target.parentElement.querySelector('select').value = Helper.getDefaultSettings()[split[0]][split[1]]
            event.target.parentElement.querySelector('select').dispatchEvent(new Event('change'));
            break;
          case 'color':
            let defVal = Helper.varColorToColor(Helper.getDefaultSettings()[split[0]][split[1]])
            event.target.parentElement.querySelector('input[data-coloris]').value = defVal
            event.target.parentElement.style.color = defVal
            event.target.parentElement.querySelector('input[data-coloris]').dispatchEvent(new Event('change'));
            break;
          case 'botevent':
            console.log(event.target)
            event.target.parentElement.querySelector('input[type="text"]').value = Helper.getDefaultSettings()[split[0]][split[1]][0]
            event.target.parentElement.querySelector('input[type="text"]').dispatchEvent(new Event('change'));
            break;
          default:
            console.log('def', event.target.getAttribute('option-type'), event.target)
            break;
        }
        event.preventDefault();
      });
    }

    // link to navigation 
    for (let link of settingsDiv.querySelectorAll('.links_to .link_to')) {
      link.addEventListener('click', ({ target }) => {

        console.log(target.classList.value)
        if (target.classList.value == 'slider-ovg' || target.classList.value == 'optionField') return

        let tabs = settingsDiv.querySelectorAll('main');
        for (let element of [...tabs]) {
          element.classList.remove('active');
        }

        settingsDiv.querySelector(`main[data-tab="${target.dataset.tab}"]`).classList.add('active');

      });
    }


    // obs filtration events
    obs_blacklistAddUserBtn.addEventListener('click', () => {
      text = obs_blacklistAddUser.value
      if (text != '') HelperWASD.obs_addUserToBL(text)
    });
    obs_blacklistAddUser.addEventListener('keyup', (event) => {
      if (event.key !== 'Enter') return;
      text = obs_blacklistAddUser.value
      HelperWASD.obs_addUserToBL(text)
    });

    obs_blacklistAddTermBtn.addEventListener('click', () => {
      text = obs_blacklistAddTerm.value
      if (text != '') HelperWASD.obs_addTermToBL(text)
    });
    obs_blacklistAddTerm.addEventListener('keyup', (event) => {
      if (event.key !== 'Enter') return;
      text = obs_blacklistAddTerm.value
      HelperWASD.obs_addTermToBL(text)
    });

    obs_highlightAddUserBtn.addEventListener('click', () => {
      text = obs_highlightAddUser.value
      if (text != '') HelperWASD.obs_addUserToHL(text)
    });
    obs_highlightAddUser.addEventListener('keyup', (event) => {
      if (event.key !== 'Enter') return;
      text = obs_highlightAddUser.value
      HelperWASD.obs_addUserToHL(text)
    });

    obs_highlightAddTermBtn.addEventListener('click', () => {
      text = obs_highlightAddTerm.value
      if (text != '') HelperWASD.obs_addTermToHL(text)
    });
    obs_highlightAddTerm.addEventListener('keyup', (event) => {
      if (event.key !== 'Enter') return;
      text = obs_highlightAddTerm.value
      HelperWASD.obs_addTermToHL(text)
    });

    for (let user of Object.keys(settings.obschat.list.blockUserList)) {
      HelperWASD.obs_addUserToBlackList(user)
    }
    for (let term of Object.keys(settings.obschat.list.blockTermList)) {
      HelperWASD.obs_addTermToBlackList(term)
    }
    for (let user of Object.keys(settings.obschat.list.highlightUserList)) {
      HelperWASD.obs_addUserToHighLight(user)
    }
    for (let term of Object.keys(settings.obschat.list.highlightTermList)) {
      HelperWASD.obs_addTermToHighLight(term)
    }

    let obschat = settingsDiv.querySelector('iframe.obschat')
    obschat.src = `${false ? 'http://localhost' : 'https://ovgamesdev.github.io/BetterWASD.obs_chat'}/preview/?settings=${encodeURI(JSON.stringify(settings.obschat)).replace(/#/ig, 'HASH')}&fade=false`

    // navigation new
    for (let navItem of settingsDiv.querySelectorAll('#nav-sidebar .nav-sidebar__link')) {
      navItem.addEventListener('click', ({ target }) => {
        let links = settingsDiv.querySelectorAll('#nav-sidebar .nav-sidebar__link');
        let tabs = settingsDiv.querySelectorAll('main');
        for (let element of [...tabs]) {
          element.classList.remove('active');
        }
        for (let element of [...links]) {
          element.classList.remove('nav-sidebar__link--active');
        }

        target.classList.add('nav-sidebar__link--active');
        settingsDiv.querySelector(`main[data-tab="${target.dataset.tab}"]`).classList.add('active');
      });
    }

    // change event
    for (let option of settingsDiv.querySelectorAll('.optionField')) {
      option.addEventListener('change', (event) => {
        HelperSettings.save([event.target]);
      });
    }

    var tooltips = settingsDiv.querySelectorAll(".tooltip-wrapper");
    for (let tooltip of tooltips) {
      $( tooltip ).tooltip({
        classes: { "ui-tooltip": "ui-ovg-tooltip" },
        content: tooltip.title,
        show: false,
        hide: false,
        position: {
          my: "center bottom",
          at: "center top-5",
          within: $('#bscSettingsPanel')
        }
      });
    }

  },
};

let initialize = async () => {
  try {
    if (settings === null) {
      settings = await Helper.getSettings();
    }

    if (typeof settings === 'undefined') {
      settings = Helper.getDefaultSettings();
    }


    settings.obschat.channelname   = new URL(document.URL).searchParams.get('channel_name') || ''
    settings.obschat.closedViewUrl = new URL(document.URL).searchParams.get('private_link') || ''

    console.log('settings =', settings)
  } catch (e) {
    console.error(e);
  }
  BetterStreamChat.init()
  HelperSettings.loaded()
}


document.addEventListener("DOMContentLoaded", () => initialize());


function handlerMessage(e){
  var data = JSON.parse(e.data);
  // var origin = e.origin;
  // if(origin !== 'https://wasd.tv' ) {
  //   return false;
  // }

  ownerWindow = e.source

  if (data) {
    settings.obschat = data


    settings.obschat.channelname   = new URL(document.URL).searchParams.get('channel_name') || ''
    settings.obschat.closedViewUrl = new URL(document.URL).searchParams.get('private_link') || ''

    console.log('+settings =', settings)
  }

  document.querySelector('#bscSettingsPanel')?.remove()
  BetterStreamChat.init()
}

window.addEventListener('message', handlerMessage);