<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import useCollectionStore from '../../../collection/application/collection.store.js';
import CollectionSummary from '../../../collection/presentation/components/collection-summary.vue';
const store = useCollectionStore();
const { collections, historicalObjects, loading, errorKey } =
    storeToRefs(store);
const { t } = useI18n();
onMounted(() => store.load());
</script>
<template>
  <pv-panel :header="t('home.title')" :aria-busy="loading">
    <pv-message severity="secondary" variant="simple">{{
        t('home.subtitle')
      }}</pv-message>
    <pv-message v-if="loading" severity="secondary" role="status">{{
        t('common.loading')
      }}</pv-message>
    <pv-message v-else-if="errorKey" severity="error" role="alert"
    >{{ t(errorKey) }}
      <pv-button :label="t('common.retry')" @click="store.load()"
      /></pv-message>
    <pv-panel v-else :header="t('home.collections')">
      <pv-message severity="secondary" variant="simple">{{
          t('home.historical-collections')
        }}</pv-message>
      <div class="grid">
        <div
            v-for="collection in collections"
            :key="collection.id"
            class="col-12 md:col-6"
        >
          <collection-summary
              :collection="collection"
              :historical-objects="historicalObjects"
          />
        </div>
      </div>
    </pv-panel>
  </pv-panel>
</template>
