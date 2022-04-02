import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

class GatheringStore {
  hostedGatherings = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchHostGathering = async () => {
    try {
      const res = await instance.get(`/gatherings`);
      this.hostedGatherings = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  // function below is not tested
  createGathering = async (newGathering, navigation) => {
    try {
      const res = await instance.post(
        `/authenticate/${newGathering.user}/gathering`,
        newGathering
      );
      this.hostedGatherings = [...this.hostedGatherings, res.data];
      navigation.navigate("GatheringList");
    } catch (error) {
      console.error(error);
    }
  };
}

const gatheringStore = new GatheringStore();
gatheringStore.fetchHostGathering();

export default gatheringStore;
