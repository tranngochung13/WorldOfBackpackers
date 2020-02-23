import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import React from 'react';
import Login from '../screen/Login';
import store from '../redux/store';
import Register from '../screen/Register';
import Home from '../screen/Home/Home';
import Profile from './../screen/Profile/index';
import Detail from './../screen/Home/Detail';
import Waiting from '../screen/waiting';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

Navigation.registerComponent(
  'Waiting',
  () => ReduxProvider(Waiting),
  () => Waiting,
);

Navigation.registerComponent(
  'Register',
  () => ReduxProvider(Register),
  () => Register,
);

Navigation.registerComponent(
  'Login',
  () => ReduxProvider(Login),
  () => Login,
);

Navigation.registerComponent(
  'Home',
  () => ReduxProvider(Home),
  () => Home,
);

Navigation.registerComponent(
  'Profile',
  () => ReduxProvider(Profile),
  () => Profile,
);
Navigation.registerComponent(
  'Detail',
  () => ReduxProvider(Detail),
  () => Detail,
);

export const onWaiting = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Waiting',
              },
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          ],
        },
      },
    });
  });
};

export const onLogin = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
              options: {
                topBar: {
                  title: {
                    text: 'Login',
                    alignment: 'center',
                    fontSize: 30,
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const onRegister = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Register',
              options: {
                topBar: {
                  title: {
                    text: 'Register',
                    alignment: 'center',
                    fontSize: 30,
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const onExit = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
              options: {
                topBar: {
                  backButton: {
                    visible: true,
                  },
                  title: {
                    text: 'Login',
                    alignment: 'center',
                    fontSize: 30,
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const onShowModalDetail = item => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: 'Detail',
            passProps: {
              data: item,
            },
            options: {
              topBar: {
                title: {
                  text: item.title,
                  fontSize: 30,
                  alignment: 'center',
                },
                rightButtons: [
                  {
                    id: 'close',
                    icon: require('../asset/image/comback.png'),
                  },
                ],
              },
            },
          },
        },
      ],
    },
  });
};

export const onChangeIntoMainScreen = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      topBar: {
                        title: {
                          text: 'Home',
                          alignment: 'center',
                          fontSize: 30,
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: '',
                  icon: require('../asset/image/Home.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Profile',
                    options: {
                      topBar: {
                        title: {
                          text: 'Profile',
                          alignment: 'center',
                          fontSize: 30,
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: '',
                  icon: require('../asset/image/Profile.png'),
                },
              },
            },
          },
        ],
        options: {},
      },
    },
  });
};
