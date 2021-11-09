<template>
  <div class="">
    <template v-for="attribute in attributes">
      <template v-if="attribute.attribute_control_type === 1">
        <SfSelect
          :key="attribute.product_attribute_id"
          v-model="selectedAttributeValue[attribute.name]"
          v-bind:label="attribute.name"
          class="sf-select--underlined product__select-size"
          :required="true"
        >
          <SfSelectOption v-for="value in attribute.values" :key="attribute.product_attribute_id + '-' + value.id" :value="value.id">
            {{ getLabel(value) }}
          </SfSelectOption>
        </SfSelect>
      </template>

      <template v-else-if="attribute.attribute_control_type === 2">
        <div :key="attribute.id">
          <p class="product__color-label">{{ attribute.name }}:</p>
          <SfRadio
            v-for="value in attribute.values"
            :key="value.id"
            :value="value.id.toString()"
            :label="getLabel(value)"
            :selected="selectedAttributeValue[attribute.name]"
            :name="attribute.name"
            class="form__radio"
            @input="selectRadio(selectedAttributeValue, attribute.name, value.id)"
          >
            <div class="product__label">
              {{ getLabel(value) }}
            </div>
          </SfRadio>
        </div>
      </template>
      <template v-else-if="[3, 5].includes(attribute.attribute_control_type)">
        <div :key="attribute.id">
          <p class="product__color-label">{{ attribute.name }}:</p>
          <SfCheckbox
            v-for="value in attribute.values"
            :key="value.id"
            v-model="selectedAttributeValue[attribute.name]"
            :selected="isSelectedCheckbox(selectedAttributeValue[attribute.name], value)"
            :name="attribute.name"
            :label="getLabel(value)"
            :value="value.id.toString()"
            class="form__element checkbox"
          />
        </div>
      </template>
      <template v-else-if="attribute.attribute_control_type === 4">
        <SfInput
          :key="attribute.id"
          v-model="selectedAttributeValue[attribute.name]"
          :label="attribute.name"
          :name="attribute.name"
          class="form__element form__element--half"
        />
      </template>
      <template v-else-if="attribute.attribute_control_type === 10">
        <SfTextarea
          :key="attribute.id"
          v-model="selectedAttributeValue[attribute.name]"
          :label="attribute.name"
          :name="attribute.name"
          cols="20"
          class="form__element form__element--half"
        />
      </template>
      <!-- <template v-else-if="attribute.attribute_control_type === 20"> </template>
      <template v-else-if="attribute.attribute_control_type === 30"> </template> -->
      <template v-else-if="attribute.attribute_control_type === 40">
        <div class="product__colors desktop-only" :key="attribute.id">
          <p class="product__color-label">{{ attribute.name }}:</p>
          <SfColor
            v-for="value in attribute.values"
            :key="value.id"
            :color="value.color_squares_rgb"
            :selected="value.is_pre_selected"
            class="product__color"
            @click="() => selectColor(attribute, value)"
          />
        </div>
      </template>
      <template v-else-if="attribute.attribute_control_type === 45">
        <div :key="attribute.id">
          <p class="product__color-label">{{ attribute.name }}:</p>
          <SfRadio
            v-for="value in attribute.values"
            :key="value.id"
            :value="value.id.toString()"
            :label="getLabel(value)"
            :selected="selectedAttributeValue[attribute.name]"
            :name="attribute.name"
            class="form__radio"
            @input="selectRadio(selectedAttributeValue, attribute.name, value.id)"
          >
            <template #label>
              <SfImage :src="value.image_squares_picture_model.image_url" :alt="attribute.name" />
            </template>
          </SfRadio>
        </div>
      </template>
    </template>
  </div>
</template>
<script>
import { SfSelect, SfColor, SfRadio, SfCheckbox, SfInput, SfTextarea, SfImage } from '@storefront-ui/vue';
import Vue from 'vue';
export default {
  name: 'ProductAttributes',
  props: {
    attributes: {
      type: Array,
      default: []
    },
    selectedAttributeValue: {
      type: Object,
      default: {}
    }
  },

  components: {
    SfSelect,
    SfColor,
    SfRadio,
    SfCheckbox,
    SfInput,
    SfTextarea,
    SfImage
  },
  methods: {
    selectColor(attribute, currentValue) {
      const selectedValue = attribute.values.filter((value) => value.is_pre_selected)[0];
      if (selectedValue) {
        Vue.set(selectedValue, 'is_pre_selected', false);
      }

      Vue.set(currentValue, 'is_pre_selected', true);
    },
    selectRadio(selectedAttributeValue, attributeName, value) {
      if (selectedAttributeValue) {
        Vue.set(selectedAttributeValue, attributeName, value.toString());
      }
    },
    getLabel(value) {
      if (value.price_adjustment) {
        return `${value.name} [${value.price_adjustment}]`;
      }
      return value.name;
    },
    isSelectedCheckbox(selectedAttributeValue, value) {
      const result = selectedAttributeValue === value.id.toString();
      return result;
    }
  }
  // data() {
  //   let selectedAttributeValue = {};

  //   this.attributes.map((attribute) => {
  //     const preSelectedValue = attribute.values.filter((value) => value.is_pre_selected);
  //     this.selectedAttributeValue = {
  //       ...this.selectedAttributeValue,
  //       [attribute.name]: preSelectedValue.length > 0 ? preSelectedValue[0].id.toString() : null,
  //     };
  //   });

  //   return {
  //     selectedAttributeValue,
  //   };
  // },
};
</script>
<style lang="scss" scoped>
.product {
  &__colors {
    @include font(--product-color-font, var(--font-weight--normal), var(--font-size--lg), 1.6, var(--font-family--secondary));
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__label {
    display: flex;
    justify-content: space-between;
  }

  &__description {
    --radio-description-margin: 0;
    --radio-description-font-size: var(--font-xs);
  }
}
</style>
