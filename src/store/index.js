import { defineStore } from "pinia";

export const usePlanStore = defineStore("plans", {
  state: () => {
    return {
      selectedPlan: {},
    };
  },
});
