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
      const res = await instance.get(`/gatherings/${authStore.user._id}`);
      this.hostedGatherings = res.data;
      console.log(this.hostedGatherings);
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
  // createGathering = async (newGathering, navigation) => {
  //   try {
  //     const formData = new FormData();
  //     for (const key in newGathering) {
  //       console.log({ key, value: newGathering[key] });
  //       formData.append(key, newGathering[key]);
  //     }
  //     const res = await instance.post(`/gatherings`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       transformRequest: (data, headers) => {
  //         return formData; // this is doing the trick
  //       },
  //     });
  //     this.newGathering = [...this.gatherings, res.data];
  //     navigation.navigate("GatheringList");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
}

const gatheringStore = new GatheringStore();
gatheringStore.fetchHostGathering();
export default gatheringStore;
