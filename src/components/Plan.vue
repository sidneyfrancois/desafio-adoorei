<script setup>
defineProps({
  name: String,
  price: String,
  isMostUsed: Boolean,
  description: String,
  targetAudience: String,
  isFree: Boolean,
  planFeatures: Array,
  applicationsAvailable: Array,
  additionalFeatures: Array,
});
</script>
<template>
  <div v-if="isMostUsed">mais usado</div>
  <h2>{{ name }}</h2>
  <p v-if="isFree">{{ price }}</p>
  <p v-else>R${{ price }}/mês</p>
  <p>{{ description }}</p>
  <p>{{ targetAudience }}</p>
  <button>Escolher esse plano</button>
  <div v-if="isFree">
    <h3>Seu site em servidores <label>no Estados Unidos</label></h3>
  </div>
  <div v-else>
    <h3>Seu site em servidores <label>no Brasil</label></h3>
  </div>
  <ul>
    <li v-for="features in planFeatures">
      {{ features }}
    </li>
  </ul>
  <h3>Suporte 24 horas, 7 dias por semana grátis</h3>
  <h3>Aplicativos disponíveis</h3>
  <ul>
    <li v-for="app in applicationsAvailable">
      {{ app }}
    </li>
  </ul>
  <div v-if="!isFree">
    <h3>Migração Gratuita</h3>
    <ul>
      <li>Migramos todos os seus sites para nossos servidores</li>
    </ul>
  </div>
  <h3>Você ainda tem</h3>
  <ul>
    <li v-for="plus in additionalFeatures">
      {{ plus }}
    </li>
  </ul>
</template>
