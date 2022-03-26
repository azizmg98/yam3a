import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

class GatheringStore {
  gathering = [];
  hostedGatherings = [];

  constructor() {
    makeAutoObservable(this);
  }

  //? remove gatherings since we don't need them
  fetchGathering = async () => {
    try {
      const res = await instance.get("/gatherings");
      this.gathering = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  fetchHostGathering = async () => {
    try {
      const res = await instance.get("gatherings/host");
      this.hostedGatherings = res.data;
      console.log(this.hostedGatherings);
    } catch (error) {
      console.error(error);
    }
  };
}

const gatheringStore = new GatheringStore();
gatheringStore.fetchHostGathering();

export default gatheringStore;
