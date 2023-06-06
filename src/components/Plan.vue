<script setup>
import { useRouter } from "vue-router";
defineEmits(["selectPlan"]);

const router = useRouter();

defineProps({
  id: Number,
  name: String,
  price: String,
  isMostUsed: Boolean,
  description: String,
  targetAudience: String,
  isFree: Boolean,
  planFeatures: Array,
  applicationsAvailable: Array,
  additionalFeatures: Array,
  isSelected: Boolean,
});

function handleChangePlan() {
  router.push("/plans");
}
</script>
<template>
  <div class="plan-container" :class="{ 'plan-height-selected': isSelected }">
    <div v-if="isMostUsed" class="most-used-tag">mais usado</div>
    <div v-if="isSelected">plano escolhido</div>
    <h2>{{ name }}</h2>
    <h2 v-if="isFree" class="price-tag">{{ price }}</h2>
    <h2 v-else class="price-tag">R${{ price }}/mês</h2>
    <p class="description">{{ description }}</p>
    <p class="target-audience">{{ targetAudience }}</p>
    <button
      v-if="!isSelected"
      class="btn-select-plan"
      @click="$emit('selectPlan', id)"
    >
      escolher esse plano
    </button>
    <div class="features" :class="{ 'fade-expand-features': isSelected }">
      <div v-if="isFree">
        <h4>Seu site em servidores <label>no Estados Unidos</label></h4>
      </div>
      <div v-else>
        <h4>Seu site em servidores <label>no Brasil</label></h4>
      </div>
      <ul>
        <li v-for="features in planFeatures">
          {{ features }}
        </li>
      </ul>
      <h4 class="support-description">
        Suporte 24 horas, 7 dias por semana grátis
      </h4>
      <h4>Aplicativos disponíveis</h4>
      <ul>
        <li v-for="app in applicationsAvailable">
          {{ app }}
        </li>
      </ul>
      <div v-if="!isFree">
        <h4>Migração Gratuita</h4>
        <ul>
          <li>Migramos todos os seus sites para nossos servidores</li>
        </ul>
      </div>
      <h4>Você ainda tem</h4>
      <ul>
        <li v-for="plus in additionalFeatures">
          {{ plus }}
        </li>
      </ul>
      <button
        v-if="isSelected"
        @click="handleChangePlan"
        class="btn-change-plan"
      >
        Trocar plano
      </button>
    </div>
  </div>
</template>
<style>
.most-used-tag {
  position: absolute;
  color: var(--default-white);
  background-color: var(--default-green);
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  top: -1rem;

  text-transform: uppercase;
  font-size: 0.9em;
}

.plan-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  /* relative for the most-used-tag */
  position: relative;

  text-align: center;
  color: var(--default-plan-title-color);
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
}

.plan-height-selected {
  height: 70%;
}

.price-tag {
  color: var(--default-red);
}

.description {
  font-size: 0.8em;
  width: 80%;
  line-height: 2;
  padding: 1rem 0;
  border-bottom: 1px solid var(--default-line-color);
}

.target-audience {
  padding: 1rem 0;
  border-bottom: 1px solid var(--default-line-color);
}

.btn-select-plan {
  background-color: var(--default-red);
  color: var(--default-white);
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  margin: 1rem 0;
  text-transform: uppercase;
}

.features {
  text-align: initial;
}

.fade-expand-features {
  overflow: hidden;
  background-image: linear-gradient(
    180deg,
    var(--default-plan-title-color) 70%,
    transparent 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.features ul {
  list-style: none;
  padding-left: 1.2rem;
}

.features li {
  list-style-image: url("@/assets/list-item-icon.svg");
  padding-left: 0.3rem;
}

.features li {
  margin: 0.5rem 0;
}

.features label {
  text-decoration: underline;
}

.support-description {
  margin: 1rem 0;
}

.btn-change-plan {
  color: var(--font-color-black-dark);
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem 0;
  width: 90%;

  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
