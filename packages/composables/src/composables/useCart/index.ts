import { Context, useCartFactory, UseCartFactoryParams } from '@vue-storefront/core';

import {
  MiniShoppingCartModelDto,
  MiniShoppingCartItemModelDto,
  AddProductToCartResponse,
  ProductDetailsModelDto,
  ShoppingCartModelDto,
  ShoppingCartItemModelDto
} from '@vue-storefront/nopcommerce-api/gen';

const params: UseCartFactoryParams<MiniShoppingCartModelDto, MiniShoppingCartItemModelDto, ProductDetailsModelDto> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const shoppingCart: MiniShoppingCartModelDto = await context.$nopcommerce.api.shoppingCartMiniCartGet();
    return shoppingCart ? shoppingCart : {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    if (product && product.id) {
      const model = {
        productId: product.id,
        shoppingCartType: 'ShoppingCart',
        requestBody: {
          [`addtocart_${product.id}.EnteredQuantity`]: quantity ? quantity : 0
        }
      };

      const response: AddProductToCartResponse = await context.$nopcommerce.api.shoppingCartAddProductToCartFromDetailsProductIdPost(model);
      return response && response.model ? response.model : currentCart;
    } else {
      return currentCart;
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentCart, product, customQuery }) => {
    let requestBody = {
      removefromcart: product.id.toString()
    };

    currentCart.items.map((item) => {
      requestBody = {
        ...requestBody,
        [`itemquantity${item.id}`]: item.quantity
      };
    });

    await context.$nopcommerce.api.shoppingCartUpdateCartPost({ requestBody });
    currentCart = await params.load(context, { customQuery });
    return currentCart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    const fullCart: ShoppingCartModelDto = await context.$nopcommerce.api.shoppingCartCartGet();

    let requestBody = {
      removefromcart: ''
    };

    currentCart.items.map((item) => {
      requestBody = {
        ...requestBody,
        [`itemquantity${item.id}`]: item.id === product.id ? quantity : item.quantity
      };
    });

    console.log('updateItemQty requestBody:', requestBody);
    if (fullCart.checkout_attributes && fullCart.checkout_attributes.length > 0) {
      fullCart.checkout_attributes.map((attr) => {
        requestBody = {
          ...requestBody,
          [`checkout_attribute_${attr.id}`]: attr.values[0].id
        };
      }, {});
    }
    await context.$nopcommerce.api.shoppingCartUpdateCartPost({ requestBody });
    currentCart = await params.load(context, { customQuery });
    return currentCart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentCart }) => {
    console.log('Mocked: useCart.clear');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    console.log('Mocked: useCart.applyCoupon');
    return {
      updatedCart: {},
      updatedCoupon: {}
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    console.log('Mocked: useCart.removeCoupon');
    return {
      updatedCart: {}
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    console.log('Mocked: useCart.isInCart');
    return false;
  }
};

export const useCart = useCartFactory<ShoppingCartModelDto, ShoppingCartItemModelDto, ProductDetailsModelDto>(params);
