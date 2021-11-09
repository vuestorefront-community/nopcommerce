/* istanbul ignore file */
import {
  Context,
  useWishlistFactory,
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import type { Wishlist, WishlistItem, Product } from '@vue-storefront/nopcommerce-api';
import { WishlistModelDto } from '@vue-storefront/nopcommerce-api/gen';

const params: UseWishlistFactoryParams<Wishlist, WishlistItem, Product> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const wishlistModelDto : WishlistModelDto = await context.$nopcommerce.api.wishlistWishlistGet({customerGuid: ''});
    if (wishlistModelDto) {
      return wishlistModelDto;
    }
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentWishlist, product, customQuery }) => {
    const model = {
      productId: product.id,
      shoppingCartType: 'Wishlist',
      requestBody: {
        [`addtocart_${product.id}.EnteredQuantity`]: 1
      }
    };

    await context.$nopcommerce.api.shoppingCartAddProductToCartFromDetailsProductIdPost(model);
    currentWishlist = await params.load(context, { customQuery });
    return currentWishlist;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentWishlist, product, customQuery }) => {
    const requestBody = {
      removefromcart: product.id.toString()
    };
    return await context.$nopcommerce.api.wishlistUpdateWishlistPost({ requestBody });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentWishlist }:{currentWishlist: WishlistModelDto}) => {
    const requestBody = {
      removefromcart: currentWishlist.items.map((item)=>item.id).join(',')
    };
    return await context.$nopcommerce.api.wishlistUpdateWishlistPost({ requestBody });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInWishlist: (context: Context, { currentWishlist, product } : { currentWishlist: WishlistModelDto, product:any}) => {
    if (currentWishlist && currentWishlist.items) {
      const matchedProducts = currentWishlist.items.filter((item)=> item.id === product.id);
      if (matchedProducts.length > 0) {
        return true;
      }
    }
    return false;
  }
};

export const useWishlist = useWishlistFactory<Wishlist, WishlistItem, Product>(params);
