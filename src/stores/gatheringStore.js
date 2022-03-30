import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import authStore from "./authStore";

class GatheringStore {
  hostedGatherings = [];
  gatherings = [];
  newGathering = [];

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
      // console.log("THIS.HOSTEDGATHERINGS");
      // console.log(this.hostedGatherings);
    } catch (error) {
      console.error(error);
    }
  };

  // function below is not tested
  createGathering = async (newGathering, navigation) => {
    console.log(newGathering);
    try {
      // const formData = new FormData();
      // for (const key in newGathering) {
      //   console.log({ key, value: newGathering[key] });
      //   formData.append(key, newGathering[key]);
      // }
      const res = await instance.post(
        `/authenticate/${newGathering.user}/gathering`,
        newGathering
      );
      this.hostedGatherings = [...this.hostedGatherings, res.data];
      navigation.navigate("GatheringList");
    } catch (error) {
      console.log(error);
    }
  };
  createGatheringimage = async (newGathering, navigation) => {
    if (!newGathering.location) {
      delete newGathering.location;
    }
    try {
      const formData = new FormData();
      for (const key in newGathering) {
        console.log({ key, value: newGathering[key] });
        formData.append(key, newGathering[key]);
      }

      console.log(newGathering.host);
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
      console.log("LOOK AT ME", data);
      // this.hostedGatherings = [...this.hostedGatherings, res.data];
      // navigation.navigate("GatheringList");
    } catch (error) {
      console.log(error);
    }
  };
}

const gatheringStore = new GatheringStore();

export default gatheringStore;
