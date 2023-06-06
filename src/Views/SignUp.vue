<script setup>
import FormRegistration from "@/components/FormRegistration.vue";
import Plan from "@/components/Plan.vue";
import { usePlanStore } from "@/store";

const selectedPlanStore = usePlanStore();
</script>
<template>
  <h1>
    Você está muito próximo de mudar a forma de <label>hospedar seu site</label>
  </h1>
  <FormRegistration />
  <Plan
    :id="selectedPlanStore.selectedPlan.id"
    :name="selectedPlanStore.selectedPlan.name"
    :price="selectedPlanStore.selectedPlan.price"
    :isFree="selectedPlanStore.selectedPlan.isFree"
    :is-most-used="selectedPlanStore.selectedPlan.isMostUsed"
    :description="selectedPlanStore.selectedPlan.description"
    :target-audience="selectedPlanStore.selectedPlan.targetAudience"
    :plan-features="selectedPlanStore.selectedPlan.planFeatures"
    :applications-available="
      selectedPlanStore.selectedPlan.applicationsAvailable
    "
    :additional-features="selectedPlanStore.selectedPlan.additionalFeatures"
  />
</template>
