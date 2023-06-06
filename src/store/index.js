import { defineStore } from "pinia";

export const usePlanStore = defineStore("plans", {
  state: () => {
    return {
      selectedPlan: {},
    };
  },
});

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      id: 0,
      fullName: "",
      cellphone: "",
      email: "",
      websiteName: "",
    };
  },
});
