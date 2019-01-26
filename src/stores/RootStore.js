import AppStore from './AppStore';

class RootStore {
  appStore;

  constructor(
    initialState= { appStore: {} }
  ) {
    this.appStore = new AppStore(this, initialState.appStore || {});
  }
}

export default RootStore;
