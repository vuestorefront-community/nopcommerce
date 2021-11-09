<template>
  <div class="sf-header__navigation desktop" v-if="!isMobile">
    <SfHeaderNavigationItem
      v-for="(category, index) in categories"
      :key="index"
      class="nav-item"
      v-e2e="`app-header-url_${category.route}`"
      :label="category.name"
      :link="localePath(`/c${category.route}`)"
    />
  </div>
  <SfModal v-else :visible="isMobileMenuOpen">
    <SfHeaderNavigationItem v-for="(category, index) in categories" :key="index" class="nav-item" v-e2e="`app-header-url_${category}`">
      <template #mobile-navigation-item>
        <SfMenuItem
          :label="category.name"
          class="sf-header-navigation-item__menu-item"
          :link="localePath(`/c${category.route}`)"
          @click.native="toggleMobileMenu"
        />
      </template>
    </SfHeaderNavigationItem>
  </SfModal>
</template>

<script>
import { SfMenuItem, SfModal } from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useCategory } from '@vue-storefront/nopcommerce';
import { onSSR } from '@vue-storefront/core';

export default {
  name: 'HeaderNavigation',
  components: {
    SfMenuItem,
    SfModal
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { categories, search: categorySearch } = useCategory('HeaderNavigation');
    const { isMobileMenuOpen, toggleMobileMenu } = useUiState();

    onSSR(async () => {
      await categorySearch({
        pageSize: 3
      });
    });

    return {
      categories,
      isMobileMenuOpen,
      toggleMobileMenu
    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header-navigation-item {
  ::v-deep &__item--mobile {
    display: block;
  }
}
.sf-modal {
  ::v-deep &__bar {
    display: none;
  }
  ::v-deep &__content {
    padding: var(--modal-content-padding, var(--spacer-base) 0);
  }
}
</style>
