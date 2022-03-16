import { instance } from "./instance";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signin = async () => {}

  signup = async () => {}

  signout = async () => {}

  setUser = async () => {}

  checkForToken = async () => {}
}

const authStore = new AuthStore();

export default authStore;
