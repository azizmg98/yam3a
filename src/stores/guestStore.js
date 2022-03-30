import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import authStore from "./authStore";

class GuestStore {
  availableGuests = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchGuest = async () => {
    try {
      const res = await instance.get("/guests");
      this.availableGuests = res.data;
    } catch (error) {
      console.log(error);
    }
  };
}
const guestStore = new GuestStore();
guestStore.fetchGuest();

export default guestStore;
