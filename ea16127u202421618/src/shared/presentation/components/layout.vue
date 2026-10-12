<script setup>

import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './language-switcher.vue';
const { t } = useI18n();
const router = useRouter();
const visible = ref(false);
const token = import.meta.env.VITE_LOGO_DEV_TOKEN;
const logoUrl = token
    ? `${import.meta.env.VITE_LOGO_DEV_BASE_URL}/${import.meta.env.VITE_LOGO_DOMAIN}?token=${encodeURIComponent(token)}`
    : '';
function navigate(path) {
  router.push(path);
  visible.value = false;
}
const items = computed(() => [
  {
    label: t('nav.home'),
    icon: 'pi pi-home',
    command: () => navigate('/home'),
  },
  {
    label: t('nav.new-object'),
    icon: 'pi pi-plus',
    command: () => navigate('/historicalobjects/items/new'),
  },
]);
</script>
<template>
  <pv-toolbar>
    <template #start
    ><div class="flex align-items-center gap-3">
      <pv-button
          icon="pi pi-bars"
          :aria-label="t('nav.open')"
          @click="visible = true"
      /><pv-image
        v-if="logoUrl"
        :src="logoUrl"
        :alt="t('nav.logo')"
        width="70"
    /><pv-message v-else severity="secondary" variant="simple"
    >ANA</pv-message
    >
    </div></template
    >
    <template #end
    ><pv-message severity="secondary" variant="simple">{{
        t('nav.tagline')
      }}</pv-message></template
    >
  </pv-toolbar>
  <pv-drawer
      v-model:visible="visible"
      :header="t('nav.navigation')"
      :aria-label="t('nav.navigation')"
  >
    <div class="flex flex-column justify-content-between h-full">
      <pv-menu :model="items" class="w-full border-none" />
      <language-switcher />
    </div>
  </pv-drawer>
  <main class="p-3 md:p-5"><router-view /></main>
</template>
