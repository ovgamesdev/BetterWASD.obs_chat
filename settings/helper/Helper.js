const Helper = {
	BETA: `<a style="position: relative;" class="tooltip-wrapper" title="Эта опция находится в стадии разработки и может работать некорректно."><i _ngcontent-boj-c248="" class="wasd-icons-beta" style="font-size: 14px;"></i></a>`,
  tooltip(text, data, url = '') {
	  return `<a style="position: relative;" class="tooltip-wrapper" ${url == '' ? '' : `href="${url}"`} title='${data}'>${text == '' ? '<i _ngcontent-boj-c248="" class="wasd-icons-notice" style="font-size: 14px;"></i>' : text}</a>`
	},
  getDefaultSettings() {
    return {
      obschat: {
      	channelname: '',
				closedViewUrl: '',
        theme: 1,
        mf: false,
        ms: false,
        bes: 0,
        st: 0,
        frs: 1,
        ss: 'large',
        can: false,
        catm: false,
        hmb: false,
        sm: false,
        lc: "rgba(var(--wasd-color-switch--rgb),.88)",
        fl: true,
        fmst: "HH:mm",
        cma: false,
        acd: 0,
        fcbc: false,
        stime: false,
        simg: false,
        sdm: 0,
        sl: 0,
        anim: 0,
        nma: 15000,
        mtc: "rgba(var(--wasd-color-switch--rgb), .88)",
        mts: true,
        mtsc: "#000",
        sbo: true,
        sbm: true,
        sbs: true,
        sba: true,
        mentionSelf: true,
        cms: "rgba(var(--wasd-color-switch--rgb),.08)",

        bttv: '',
        ffz: '',
        tv7: '',
        bwasd: true,

        list: {
          blockUserList: {},
          blockTermList: {},
          highlightUserList: {},
          highlightTermList: {},
          blockRoleList: {}
        },
        rMBL: true,
      }
    };
  },
  getSettings() {
    return new Promise((resolve, reject) => {
      if (typeof chrome !== 'undefined') {

      	Cookies.get('settings')

      	console.log(Cookies.get('settings'))

        let defaultSettings = this.getDefaultSettings();

        let items = JSON.parse(Cookies.get('settings'))

        if (typeof items?.obschat !== 'undefined') {
          items = items || {};

          for (let key in defaultSettings) {
            if (defaultSettings.hasOwnProperty(key)) {
              items[key] = Object.assign(defaultSettings[key], items[key] || {});
            }
          }
          resolve(items);
        } else {
          Cookies.set('settings', JSON.stringify(defaultSettings))
          resolve(defaultSettings);
        }

      } else {
        reject('browser not supported?');
      }
    });
  },
  varColorToColor(value) {
    return value.replace(/var\(\D+\)/ig, ($0) => {
      data = $0.replace('var(', '').replace(')', '')
      return window.getComputedStyle(document.body).getPropertyValue(data).replace(/ /ig, '')
    })
  }
};