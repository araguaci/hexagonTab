import * as form from '../../form';

import { node } from '../../../utility/node';

import { APP_NAME } from '../../../constant';

import { Link } from '../../link';
import { Splash } from '../../splash';

const appSetting = {};

appSetting.app = (parent) => {

  appSetting.app.para = node('p:This project is open source.');

  appSetting.app.link1 = new Link({
    text: 'Found on GitHub.',
    href: `https://github.com/zombieFox/${APP_NAME}`,
    openNew: true
  });

  appSetting.app.link2 = new Link({
    text: 'GNU General Public Licence v3.0.',
    href: `https://github.com/zombieFox/${APP_NAME}/blob/master/license`,
    openNew: true
  });

  const splash = new Splash();

  parent.appendChild(
    node('div', [
      splash.splash(),
      node('hr'),
      form.wrap({
        children: [
          appSetting.app.para,
          form.indent({
            children: [
              node('p', [
                appSetting.app.link1.link()
              ]),
              node('p', [
                appSetting.app.link2.link()
              ])
            ]
          })
        ]
      })
    ])
  );

};

export { appSetting };
