import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlanStore = defineStore("plans", {
  state: () => {
    return {
      selectedPlan: {},
    };
  },
});
