<script setup>
import { usePlanStore } from "@/store";
import { useRouter } from "vue-router";
import Plan from "@/components/Plan.vue";

const plans = [
  {
    id: 1,
    name: "Hospedagem 1",
    price: "Grátis",
    isFree: true,
    isMostUsed: false,
    description: "você não paga nada para usar sem taxa de setup",
    targetAudience: "Ideal para quem está começando",
    planFeatures: [
      "Servidores em nossos data centers americanos",
      "ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0",
      "1 usuário de FTP para upload ou download",
      "1 conta de e-mails profissional",
      "1 subdomínio gratuito",
    ],
    applicationsAvailable: ["Wordpress", "Drupal", "entre outros..."],
    additionalFeatures: [
      "Webmail RoundCube",
      "AntiSpam",
      "Painel de gerenciamento de DNS",
      "Painel de controle web",
      "Configurações de PHP personalizáveis",
      "Certificado SSL Grátis",
      "Transferência ilimitada",
    ],
  },
  {
    id: 2,
    name: "Hospedagem 2",
    price: "499",
    isFree: false,
    isMostUsed: true,
    description: "cobrado mensalmente sem taxa de setup",
    targetAudience: "Ideal para site com mais de 30k de visitas",
    planFeatures: [
      "Servidores em nosso data center de São Paulo",
      "ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0",
      "10 usuários de FTP para upload ou download",
      "30 contas de e-mails profissionais",
      "10 subdomínios gratuitos",
    ],
    applicationsAvailable: ["Wordpress", "Drupal", "entre outros..."],
    additionalFeatures: [
      "Webmail RoundCube",
      "AntiSpam",
      "Painel de gerenciamento de DNS",
      "Painel de controle web",
      "Configurações de PHP personalizáveis",
      "Certificado SSL Grátis",
      "Transferência ilimitada",
    ],
  },
  {
    id: 3,
    name: "Hospedagem 3",
    price: "999",
    isFree: false,
    isMostUsed: false,
    description: "cobrado mensalmente sem taxa de setup",
    targetAudience: "Ideal para site com mais de 60k de visitas",
    planFeatures: [
      "Servidores em nosso data center de São Paulo",
      "ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0",
      "Iimitados usuário de FTP para upload ou download",
      "Iimitadas contas de e-mails profissionais",
      "50 subdomínios gratuitos",
    ],
    applicationsAvailable: ["Wordpress", "Drupal", "entre outros..."],
    additionalFeatures: [
      "Webmail RoundCube",
      "AntiSpam",
      "Painel de gerenciamento de DNS",
      "Painel de controle web",
      "Configurações de PHP personalizáveis",
      "Certificado SSL Grátis",
      "Transferência ilimitada",
    ],
  },
];

const selectedPlanStore = usePlanStore();
const router = useRouter();

function handleSelectPlan(id) {
  const selectedPlan = plans.find((p) => p.id === id);
  selectedPlanStore.$patch({
    selectedPlan: selectedPlan,
  });

  router.push("/register");
}
</script>

<template>
  <main>
    <div class="plans-header">
      <div>
        <img src="../assets/locaweb-logo.png" alt="locaweb logo" />
      </div>
      <h2>
        Você está muito próximo de mudar a forma de
        <label>hospedar seu site</label>
      </h2>
      <p>escolha o seu plano</p>
    </div>
    <div class="plans-even-columns">
      <div v-for="plan in plans" :key="plan.id">
        <Plan
          :id="plan.id"
          :name="plan.name"
          :price="plan.price"
          :isFree="plan.isFree"
          :is-most-used="plan.isMostUsed"
          :description="plan.description"
          :target-audience="plan.targetAudience"
          :plan-features="plan.planFeatures"
          :applications-available="plan.applicationsAvailable"
          :additional-features="plan.additionalFeatures"
          @select-plan="handleSelectPlan"
        />
      </div>
    </div>
  </main>
</template>
<style>
main {
  background-color: var(--default-background);
}

.plans-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  text-align: center;
}

.plans-header label {
  color: var(--default-red);
  text-decoration: underline;
}

.plans-even-columns {
  display: grid;
  gap: 1.8rem;
}

@media (min-width: 50rem) {
  .plans-even-columns {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }

  .plans-header {
    width: 70%;
  }

  main {
    padding: 4rem;
  }
}
</style>
