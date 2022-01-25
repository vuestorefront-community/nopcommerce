<template>
  <div v-if="currentReturnRequest !== null" id="return-request-form">
    <div v-if="returnRequestSent && !error.submitReturnRequest">
      <p>{{ $t('Your return request was submitted!') }}</p>
    </div>
    <ValidationObserver v-else v-slot="{ handleSubmit }">
      <form id="return-request-form" class="form" @submit.prevent="handleSubmit(submitForm())">
        <SfTable class="products">
          <SfTableHeading>
            <SfTableHeader class="products__name">{{ $t('Product') }}</SfTableHeader>
            <SfTableHeader>{{ $t('Quantity') }}</SfTableHeader>
            <SfTableHeader>{{ $t('Price') }}</SfTableHeader>
          </SfTableHeading>
          <SfTableRow v-for="(item, i) in returnRequestGetters.getItems(currentReturnRequest)" :key="i">
            <SfTableData class="products__name">
              {{returnRequestGetters.getItemName(item)}}
            </SfTableData>
            <SfTableData>
              <SfSelect
                style="max-width: 10rem;"
                class="sf-select--underlined sf-select--return-qty"
                :placeholder="$t('Selected quantity')"
                v-model="form.items[i].quantity"
              >
                <SfSelectOption v-for="(quantity, key) in Array.from({ length: returnRequestGetters.getItemQty(item) + 1 }, (_, i) => i)" :key="key" :value="quantity">
                  {{quantity}}
                </SfSelectOption>
              </SfSelect>
            </SfTableData>
            <SfTableData>{{returnRequestGetters.getItemPrice(item)}}</SfTableData>
          </SfTableRow>
        </SfTable>
        <ValidationProvider name="reason" rules="required" v-slot="{ errors }" slim>
          <SfSelect
              v-model="form.reasonId"
              class="sf-select sf-select--reason-action"
              :label="$t('Return reason')"
              name="reason"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            >
              <SfSelectOption v-for="(reason, key) in returnRequestGetters.getAvailableReturnReasons(currentReturnRequest)" :key="key" :value="returnRequestGetters.getReturnReasonId(reason)">
                {{returnRequestGetters.getReturnReasonName(reason)}}
              </SfSelectOption>
          </SfSelect>
        </ValidationProvider>
        <ValidationProvider name="action" rules="required" v-slot="{ errors }" slim>
          <SfSelect
              v-model="form.actionId"
              class="sf-select sf-select--reason-action"
              :label="$t('Return action')"
              name="action"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            >
              <SfSelectOption v-for="(reason, key) in returnRequestGetters.getAvailableReturnActions(currentReturnRequest)" :key="key" :value="returnRequestGetters.getReturnActionId(reason)">
                {{returnRequestGetters.getReturnActionName(reason)}}
              </SfSelectOption>
          </SfSelect>
        </ValidationProvider>
        <div class="form__horizontal">
          <SfTextarea
            :cols="40"
            :rows="10"
            name="comment"
            v-model="form.comments"
            :label="$t('Comments')"
          />
        </div>
        <div v-if="error.submitReturnRequest">
          <p>{{ error.submitReturnRequest }}</p>
        </div>
        <SfButton class="form__button" type="submit">{{ $t('Submit return request') }}</SfButton>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  SfTable,
  SfButton,
  SfSelect,
  SfTextarea
} from '@storefront-ui/vue';
import {
  useReturnRequest,
  returnRequestGetters
} from '@vue-storefront/nopcommerce';
import { ref, computed } from '@vue/composition-api';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

const returnRequestForm = (model) => ({
  items: model.value.items.map(i => ({ id: returnRequestGetters.getItemId(i), quantity: '0' })),
  comments: null,
  reasonId: null,
  actionId: null
});

export default {
  name: 'ReturnRequest',
  components: {
    SfTable,
    SfButton,
    SfSelect,
    SfTextarea,
    ValidationObserver,
    ValidationProvider
  },
  props: {
    orderId: Number
  },
  setup() {
    const currentReturnRequest = ref(null);
    const returnRequestSent = ref(false);
    const { getReturnRequest, submitReturnRequest, loading, error } = useReturnRequest();
    const form = computed(() => returnRequestForm(currentReturnRequest));

    const submitForm = async () => {
      if (!form.value.reasonId || !form.value.actionId) return;
      if (!form.value.items.find(item => parseInt(item.quantity) > 0)) {
        error.value.submitReturnRequest = 'No items selected';
        return;
      }
      try {
        await submitReturnRequest({ returnRequest: currentReturnRequest.value, form: form.value });
        returnRequestSent.value = true;
      } catch {
        returnRequestSent.value = false;
      }
    };

    return {
      currentReturnRequest,
      returnRequestGetters,
      submitForm,
      getReturnRequest,
      returnRequestSent,
      form,
      loading,
      error
    };
  },
  async mounted() {
    const orderId = this.$props.orderId;
    const returnRequest = await this.getReturnRequest({ orderId });
    this.currentReturnRequest = returnRequest;
  }
};
</script>

<style lang='scss' scoped>
::v-deep .sf-select {
    padding: 0;
  }
::v-deep .sf-select--reason-action {
  width: 23rem;
  .sf-select__dropdown {
    margin-top: 20px;
  }
}

.products {
  margin-bottom: var(--spacer-lg);
}
</style>
