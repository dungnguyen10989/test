import { RootNav } from '../../navigators/Root'
import { AuthNav } from '../../navigators/Auth'

const rootInit = RootNav.router.getStateForAction(RootNav.router.getActionForPathAndParams('Auth'));
const authInit = AuthNav.router.getStateForAction(AuthNav.router.getActionForPathAndParams('Main'));

export const _rootNav = (state = rootInit, action) => {
  const nextState = RootNav.router.getStateForAction(action, state);
  return nextState || state;
};

export const _authNav = (state = authInit, action) => {
  const nextState = AuthNav.router.getStateForAction(action, state);
  return nextState || state;
};
