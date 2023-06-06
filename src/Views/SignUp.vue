<script setup>
import FormRegistration from "@/components/FormRegistration.vue";
import Plan from "@/components/Plan.vue";
import { usePlanStore } from "@/store";

const selectedPlanStore = usePlanStore();
</script>
<template>
  <div class="register-container">
    <div class="register-header">
      <div>
        <img src="@/assets/locaweb-logo.png" alt="locaweb logo" />
      </div>
      <h2>
        Você está muito próximo de mudar a forma de
        <label>hospedar seu site</label>
      </h2>
      <p>escolha o seu plano</p>
    </div>
    <div class="form-container">
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
        :is-selected="true"
      />
    </div>
  </div>
</template>

<style>
.register-container {
  padding: 2rem 12rem;
}

.register-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  text-align: center;
  margin: 0 auto;

  width: 50%;
}

.register-header label {
  color: var(--default-red);
  text-decoration: underline;
}

.form-container {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 70% 1fr;
  align-items: start;

  gap: 2rem;
}
</style>
