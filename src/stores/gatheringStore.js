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
}

const gatheringStore = new GatheringStore();
gatheringStore.fetchGathering();
export default gatheringStore;
