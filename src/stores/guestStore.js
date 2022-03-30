import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

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

  addGuest = async (guestId, gatheringId) => {
    try {
      const res = await instance.post("/gatherings/guest", {
        user: guestId,
        gatherings: gatheringId,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
const guestStore = new GuestStore();
guestStore.fetchGuest();

export default guestStore;
