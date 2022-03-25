import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

class GatheringStore {
  gathering = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchGathering = async () => {
    try {
      const res = await instance.get("gatherings");
      this.gathering = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  gatheringCreate = async (userID, newData) => {
    try {
      console.log(newData);

      const newGathering = await instance.post(
        `/api/user/${userID}/gathering`,
        newData
      );
      await this.fetchTrip();
    } catch (error) {
      console.log(error);
    }
  };
}

const gatheringStore = new GatheringStore();
gatheringStore.fetchGathering();
export default gatheringStore;
