<template>
  <div>
    <div v-if="reviewSent && !error.addReview">
      <p>Your review was submitted!</p>
    </div>
    <div v-else-if="error.addReview">
      <p>{{ error.addReview }}</p>
    </div>
    <ValidationObserver v-else v-slot="{ handleSubmit, reset }">
      <form id="billing-details-form" class="form" @submit.prevent="handleSubmit(submitForm(reset))">
        <div class="form__horizontal">
          <ValidationProvider v-slot="{ errors }" rules="required|min:2" name="name" class="form__element">
            <SfInput v-model="form.title" name="name" label="Title" required :valid="!errors[0]" :error-message="errors[0]" />
          </ValidationProvider>
        </div>
        <ValidationProvider v-slot="{ errors }" rules="required" class="form__element">
          <SfSelect
            v-model="form.rating"
            label="Rating"
            :name="form.rating"
            class="form__element form__element--half form__element--half-even form__select sf-select--underlined"
            :valid="!errors[0]"
            :error-message="errors[0]"
          >
            <SfSelectOption v-for="value in [1, 2, 3, 4, 5]" :key="value" :value="value">
              {{ value }}
            </SfSelectOption>
          </SfSelect>
        </ValidationProvider>
        <div class="form__horizontal">
          <ValidationProvider v-slot="{ errors }" rules="required|min:2" name="reviewText" class="form__element">
            <SfTextarea
              v-model="form.reviewText"
              label="Review"
              name="reviewText"
              :cols="60"
              :rows="10"
              wrap="soft"
              :valid="!errors[0]"
              :error-message="errors[0]"
            />
          </ValidationProvider>
        </div>
        <SfButton class="form__button"> Add review </SfButton>
      </form>
    </ValidationObserver>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import { useReview, useUser } from '@vue-storefront/nopcommerce';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { min, oneOf, required } from 'vee-validate/dist/rules';
import { SfInput, SfButton, SfSelect, SfTextarea } from '@storefront-ui/vue';
// import { useVueRouter } from '~/helpers/hooks/useVueRouter';
extend('required', {
  ...required,
  message: 'This field is required'
});
extend('min', {
  ...min,
  message: 'The field should have at least {length} characters'
});
extend('oneOf', {
  ...oneOf,
  message: 'Invalid country'
});
const productAddReviewForm = (id) => ({
  title: '',
  reviewText: '',
  rating: null,
  productId: id
});
export default defineComponent({
  name: 'ProductAddReview',
  components: {
    SfInput,
    SfButton,
    SfSelect,
    SfTextarea,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    productId: Number
  },
  emits: ['add-review'],
  setup(props, { emit }) {
    const { loading, error } = useReview(`productReviews-${props.productId}`);
    const { isAuthenticated } = useUser();
    const reviewSent = ref(false);
    const form = ref(productAddReviewForm(props.productId));
    const formSubmitValue = computed(() => {
      return {
        ...form.value
      };
    });

    const submitForm = (reset) => () => {
      if (!(formSubmitValue.value.rating || formSubmitValue.value.title || formSubmitValue.value.reviewText)) return;
      try {
        reviewSent.value = true;
        emit('add-review', formSubmitValue.value);
        reset();
      } catch {
        reviewSent.value = false;
      }
    };

    return {
      error,
      form,
      formSubmitValue,
      isAuthenticated,
      loading,
      reviewSent,
      submitForm
    };
  }
});
</script>

<style lang='scss' scoped>
.form {
  &__element {
    display: block;
    margin-bottom: var(--spacer-base);
  }
  &__select {
    display: flex;
    align-items: center;
    --select-option-font-size: var(--font-size--lg);
    flex-wrap: wrap;
    ::v-deep .sf-select__dropdown {
      font-size: var(--font-size--lg);
      // margin: 0;
      font-family: var(--font-family--secondary);
      font-weight: var(--font-weight--normal);
    }
  }
  &__button {
    display: block;
    margin-top: var(--spacer-md);
  }
  &__horizontal {
    @include for-desktop {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .form__element {
      @include for-desktop {
        flex: 1;
        margin-right: var(--spacer-lg);
      }
      &:last-child {
        margin-right: 0;
        margin-bottom: 0;
      }
    }
  }
}
</style>
