import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

class GatheringStore {
  gatherings = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchGathering = async () => {
    try {
      const res = await instance.get("/gatherings");
      this.gatherings = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  // function below is not tested
  createGathering = async (gathering, navigation) => {
    try {
      const formData = new FormData();
      for (const key in gathering) {
        console.log({ key, value: gathering[key] });
        formData.append(key, gathering[key]);
      }
      const res = await instance.post(`/gatherings`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return formData; // this is doing the trick
        },
      });
      this.gatherings = [...this.gatherings, res.data];
      navigation.navigate("GatheringList");
    } catch (error) {
      console.log(error);
    }
  };
}

const gatheringStore = new GatheringStore();
gatheringStore.fetchGathering();
export default gatheringStore;
