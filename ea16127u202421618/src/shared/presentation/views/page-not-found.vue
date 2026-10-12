<script setup>

import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
const route = useRoute();
const router = useRouter();
const { t } = useI18n();
</script>
<template>
  <pv-panel :header="t('not-found.title')"
  ><pv-message severity="warn">{{
      t('not-found.message', { path: route.fullPath })
    }}</pv-message
  ><pv-button
      :label="t('not-found.back')"
      class="mt-3"
      @click="router.push('/home')"
  /></pv-panel>
</template>
