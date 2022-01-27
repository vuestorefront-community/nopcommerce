<template>
  <div>
    <div v-for="returnRequest in returnRequests" :key="returnRequestGetters.getId(returnRequest)">
      <SfHeading :title="returnRequestGetters.getTitle(returnRequest)" :level="3" class="sf-heading--no-underline sf-heading--left" />
      <div class="highlighted highlighted--total">
        <SfProperty
          name="Returned Item"
          :value="returnRequestGetters.getItemName(returnRequest)"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Return reason"
          :value="returnRequestGetters.getReason(returnRequest)"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Return action"
          :value="returnRequestGetters.getAction(returnRequest)"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Date requested"
          :value="returnRequestGetters.getDate(returnRequest)"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Comments"
          :value="returnRequestGetters.getComments(returnRequest)"
          class="sf-property--full-width property"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  SfProperty,
  SfHeading
} from '@storefront-ui/vue';
import {
  useReturnRequest,
  returnRequestGetters
} from '@vue-storefront/nopcommerce';

export default {
  name: 'ReturnRequests',
  components: {
    SfProperty,
    SfHeading
  },
  setup() {
    const { load, returnRequests, loading, error } = useReturnRequest();

    return {
      load,
      returnRequests,
      loading,
      error,
      returnRequestGetters
    };
  },
  async mounted() {
    await this.load();
  }
};
</script>

<style lang='scss' scoped>
.highlighted {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--c-light);
  padding: var(--spacer-sm);
  --property-value-font-size: var(--font-size--base);
  --property-name-font-size: var(--font-size--base);
  &:last-child {
    margin-bottom: 0;
  }
  ::v-deep .sf-property__name {
    white-space: nowrap;
  }
  ::v-deep .sf-property__value {
    text-align: right;
  }
  &--total {
    margin-bottom: var(--spacer-sm);
  }
  @include for-desktop {
    padding: var(--spacer-xl);
    --property-name-font-size: var(--font-size--lg);
    --property-name-font-weight: var(--font-weight--medium);
    --property-value-font-size: var(--font-size--lg);
    --property-value-font-weight: var(--font-weight--semibold);
  }
}
</style>
