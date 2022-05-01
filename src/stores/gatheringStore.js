import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

class GatheringStore {
  hostedGatherings = [];
  gatherings = [];

  constructor() {
    makeAutoObservable(this);
  }

  //? remove gatherings since we don't need them
  fetchGathering = async () => {
    try {
      const res = await instance.get("/gatherings");
      this.gatherings = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  fetchHostGathering = async () => {
    try {
      const res = await instance.get(`/gatherings/host`);
      this.hostedGatherings = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  // function below is not tested
  createGathering = async (gathering, navigation) => {
    try {
      const formData = new FormData();
      for (const key in gathering) {
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
      console.error(error);
    }
  };

  createGatheringimage = async (newGathering) => {
    if (!newGathering.location) {
      delete newGathering.location;
    }
    try {
      const formData = new FormData();
      for (const key in newGathering) {
        formData.append(key, newGathering[key]);
      }

      const res = await fetch(
        `${instance.defaults.baseURL}/authenticate/${newGathering.host}/gathering`,
        {
          method: "post",
          body: formData,
          headers: {
            "content-type": "multipart/form-data",
            authorization: instance.defaults.headers.common.Authorization,
          },
        }
      );

      const data = await res.json();
      // this.hostedGatherings = [...this.hostedGatherings, res.data];
      // navigation.navigate("GatheringList");
    } catch (error) {
      console.error(error);
    }
  };

}

const gatheringStore = new GatheringStore();

export default gatheringStore;
