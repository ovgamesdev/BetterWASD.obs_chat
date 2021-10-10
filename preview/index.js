var setting = {
    style: null,
    init() {
        if (this.style === null) {
          this.style = document.createElement('style');
          this.style.type = 'text/css';
          document.body.append(this.style);
          setting.update();
        }
    },
    changeSettimgs(data) {
        settings.wasd = data
        setting.update()
        console.log('update settings', settings.wasd)
        
    },
    update() {
        let cssCode = ''

        cssCode += `.body-container { background: rgba(0,0,0,0)!important; }`

        if (settings.wasd.theme.toString() === '0') {
          cssCode += 'body{--wasd-color-black:#000000!important;--wasd-color-black--rgb:0,0,0!important;--wasd-color-white:#ffffff!important;--wasd-color-white--rgb:255,255,255!important;--wasd-color-corp-prime:#1A202C!important;--wasd-color-corp-prime--rgb:26,32,44!important;--wasd-color-corp-gray:#848CA0!important;--wasd-color-corp-gray--rgb:132,140,160!important;--wasd-color-dark-blue:#483cb8!important;--wasd-color-corp-blue:#258fe5!important;--wasd-color-corp-blue--rgb:37,143,229!important;--wasd-color-warning:#d85252!important;--wasd-color-warning--rgb:216,82,82!important;--wasd-color-success:#6ba131!important;--wasd-color-success--rgb:107,161,49!important;--wasd-color-event1:#913CA7!important;--wasd-color-event2:#5BC3C1!important;--wasd-color-event3:#F5A623!important;--wasd-color-xp:#9013fe!important;--wasd-color-bordo:#a5276d!important;--wasd-color-prime:#ffffff!important;--wasd-color-prime--rgb:255,255,255!important;--wasd-color-switch:#1A202C!important;--wasd-color-switch--rgb:26,32,44!important;--wasd-color-second:#f0f0f8!important;--wasd-color-third:#e0e0e8!important;--wasd-color-gray1:#848ca0!important;--wasd-color-gray2:#444858!important;--wasd-color-gray3:#242830!important;--wasd-color-text-prime:rgba(26, 32, 44, 1)!important;--wasd-color-text-second:rgba(26, 32, 44, 0.8)!important;--wasd-color-text-third:rgba(26, 32, 44, 0.64)!important;--wasd-color-text-fourth:rgba(26, 32, 44, 0.48)!important;--wasd-color-text-disabled:rgba(26, 32, 44, 0.24)!important;--wasd-color-bg-prime:#f0f0f8!important;--wasd-color-bg-second:#e0e0e9!important;--color-lowest-layer:rgba(198, 209, 225, 0.2)!important;--color-background:246,247,248!important;--color-first-layer:#FBFBFB!important;--color-second-layer:#FFFFFF!important;--color-upper-layer:#FFFFFF!important;--color-switch:20,24,32!important;--color-shadow:36,102,146!important;--color-system-blue:0,143,236!important;--color-system-dark-blue:13,110,200!important;--color-system-white:255,255,255!important;--color-system-black:0,0,0!important;--color-system-warning:252,77,100!important;--color-system-attention:243,173,56!important;--color-system-success:62,189,65!important;--color-system-xp:144,19,254!important;--color-additional-yellow-light:#F0DF47!important;--color-additional-yellow-dark:#DBC92A!important;--color-additional-yellow-orange:#F8B23E!important;--color-additional-orange:#E88021!important;--color-additional-red:#D03F3F!important;--color-additional-pink:#CD317C!important;--color-additional-lilac:#952BA7!important;--color-additional-violet:#6227E0!important;--color-additional-blue:#2264E3!important;--color-additional-blue-light:#27B4E0!important;--color-additional-aquamarine:#00CBBF!important;--color-additional-blue-green:#27E087!important;--color-additional-green-acid:#2BE027!important;--color-additional-green:#139520!important;--color-additional-green-light:#A6D323!important;--color-additional-gray:#898989!important}';
        } else if (settings.wasd.theme.toString() === '1') {
          cssCode += 'body{--wasd-color-black:#000000!important;--wasd-color-black--rgb:0,0,0!important;--wasd-color-white:#ffffff!important;--wasd-color-white--rgb:255,255,255!important;--wasd-color-corp-prime:#1A202C!important;--wasd-color-corp-prime--rgb:26,32,44!important;--wasd-color-corp-gray:#848CA0!important;--wasd-color-corp-gray--rgb:132,140,160!important;--wasd-color-dark-blue:#483cb8!important;--wasd-color-corp-blue:#258fe5!important;--wasd-color-corp-blue--rgb:37,143,229!important;--wasd-color-warning:#d85252!important;--wasd-color-warning--rgb:216,82,82!important;--wasd-color-success:#6ba131!important;--wasd-color-success--rgb:107,161,49!important;--wasd-color-event1:#913CA7!important;--wasd-color-event2:#5BC3C1!important;--wasd-color-event3:#F5A623!important;--wasd-color-xp:#9013fe!important;--wasd-color-bordo:#a5276d!important;--wasd-color-prime:#1A202C!important;--wasd-color-prime--rgb:26,32,44!important;--wasd-color-switch:#ffffff!important;--wasd-color-switch--rgb:255,255,255!important;--wasd-color-second:#141820!important;--wasd-color-third:#0c1014!important;--wasd-color-gray1:#242830!important;--wasd-color-gray2:#444858!important;--wasd-color-gray3:#848ca0!important;--wasd-color-text-prime:rgba(255, 255, 255, 1)!important;--wasd-color-text-second:rgba(255, 255, 255, 0.8)!important;--wasd-color-text-third:rgba(255, 255, 255, 0.64)!important;--wasd-color-text-fourth:rgba(255, 255, 255, 0.48)!important;--wasd-color-text-disabled:rgba(255, 255, 255, 0.24)!important;--wasd-color-bg-prime:#141820!important;--wasd-color-bg-second:#0c1014!important;--color-lowest-layer:rgba(0, 0, 0, 0.2)!important;--color-background:20,24,32!important;--color-first-layer:#1A212D!important;--color-second-layer:#1D2736!important;--color-upper-layer:#212D3F!important;--color-switch:246,247,248!important;--color-shadow:9,9,9!important;--color-system-blue:0,143,236!important;--color-system-dark-blue:13,110,200!important;--color-system-white:255,255,255!important;--color-system-black:0,0,0!important;--color-system-warning:252,77,100!important;--color-system-attention:243,173,56!important;--color-system-success:62,189,65!important;--color-system-xp:144,19,254!important;--color-additional-yellow-light:#F0DF47!important;--color-additional-yellow-dark:#DBC92A!important;--color-additional-yellow-orange:#F8B23E!important;--color-additional-orange:#E88021!important;--color-additional-red:#D03F3F!important;--color-additional-pink:#CD317C!important;--color-additional-lilac:#952BA7!important;--color-additional-violet:#6227E0!important;--color-additional-blue:#2264E3!important;--color-additional-blue-light:#27B4E0!important;--color-additional-aquamarine:#00CBBF!important;--color-additional-blue-green:#27E087!important;--color-additional-green-acid:#2BE027!important;--color-additional-green:#139520!important;--color-additional-green-light:#A6D323!important;--color-additional-gray:#898989!important}';
        }

        if (settings.wasd.mf) {
          cssCode += `wasd-chat-follower-message { display: none!important; }`;
        }

        if (!settings.wasd.simg) {
          cssCode += `.message__img { display: none!important; }`;
        }

        if (!settings.wasd.catm) {
          cssCode += `.chat-message-mention { color: rgba(var(--wasd-color-switch--rgb), .88)!important; }`;
        }

        if (!settings.wasd.fl) {
          cssCode += `div.message-text > span > a { color: rgba(var(--wasd-color-switch--rgb), .88)!important; pointer-events: none; }`;
        }

        if (settings.wasd.fcbc) {
          cssCode += `.zalgo { display: none; } .no-zalgo { display: inline; }`;
        } else {
          cssCode += `.no-zalgo { display: none; } .zalgo { display: inline; } `;
        }

        if (settings.wasd.ss.toString() === 'large') {
          cssCode += `[alt="sticker_medium"] { display: none!important; } [alt="sticker_small"] { display: none!important; }`;
        } else if (settings.wasd.ss.toString() === 'medium') {
          cssCode += `[alt="sticker_large"] { display: none!important; }  [alt="sticker_small"] { display: none!important; }`;
        } else if (settings.wasd.ss.toString() === 'small') {
          cssCode += `[alt="sticker_large"] { display: none!important; }  [alt="sticker_medium"] { display: none!important; }`;
        }

        if (!settings.wasd.stime) {
          cssCode += `.message__time { display: none!important; }`;
          cssCode += `.is-time { padding: 2px 12px!important; }`;
        } else {
          cssCode += `.message__time.${settings.wasd.fmst.toString().replace(/:/ig, '-')} {display: flex!important;}`
        }

        if (settings.wasd.ms) {
          cssCode += `wasd-chat-system-message { display: none!important; }`;
        }

        if (settings.wasd.st.toString() === '0') {
          if (settings.wasd.frs.toString() === '0') {
            cssCode += '.message__info img.sticker { display: block; height: 128px!important; width: 128px!important; margin-top: 8px; }'
          } else if (settings.wasd.frs.toString() === '1') {
            cssCode += '.message__info img.sticker { display: block; height: 56px!important; width: 56px!important; margin-top: 8px; }'
          }
        } else if (settings.wasd.st.toString() === '1') {
          cssCode += 'img.sticker { width: 28px!important; height: 28px!important; margin-top: 0px!important; display: inline; vertical-align: middle!important; margin: -.5rem 0!important; }';
        } else if (settings.wasd.st.toString() === '2') {
          cssCode += '.block__messages__item[sticker] { display: none!important; }';
        } else if (settings.wasd.st.toString() === '3') {
          cssCode += 'img.sticker { display: none!important; }';
          cssCode += '.sticker_text { display: inline!important; }';
        }

        if (settings.wasd.hmb) {
          cssCode += '.chat-message-mention { font-weight: 700!important; }';
        }

        if (settings.wasd.can) {
          cssCode += '.info__text__status:after {content: ":";color: var(--yt-live-chat-primary-text-color, rgba(var(--wasd-color-switch--rgb),.88));margin-left: -7px;padding-right: 7px;}'
        }

        cssCode += `div.message-text > span > a { color: ${settings.wasd.lc != '#000000' ? settings.wasd.lc : 'inherit'}; }`;

        if (setting.style) {
          if (typeof setting.style.styleSheet !== 'undefined') {
            setting.style.styleSheet.cssText = cssCode;
          } else {
            setting.style.innerHTML = '';
            setting.style.appendChild(document.createTextNode(cssCode));
          }

          console.log('style inited')

        }
    }
}