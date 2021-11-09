import {
  AgnosticMediaGalleryItem,
  AgnosticPrice,
  ProductGetters as BaseProductGetters,
  AgnosticBreadcrumb
} from '@vue-storefront/core';
import type { Product, ProductFilter } from '@vue-storefront/nopcommerce-api';
import { ProductDetailsAttributeModelDto, ProductDetailsModelDto } from '@vue-storefront/nopcommerce-api/gen';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: ProductDetailsModelDto): string {
  return product && product.name ? product.name : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: ProductDetailsModelDto): string {
  return product && product.se_name ? product.se_name : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: ProductDetailsModelDto): AgnosticPrice {
  return {
    regular: (product && product.product_price && product.product_price.price_value) ? product.product_price.price_value : 0,
    special: (product && product.product_price && product.product_price.price_value) ? product.product_price.price_value : 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: ProductDetailsModelDto): AgnosticMediaGalleryItem[] {
  if (product && product.picture_models) {

    return product.picture_models.map(p=> {
      return {
        small: p && p.thumb_image_url ? p.thumb_image_url : '',
        normal: p && p.image_url ? p.image_url : '',
        big: p && p.full_size_image_url ? p.full_size_image_url : ''
      };
    });
  }
  return [
    {
      small: '',
      normal: '',
      big: ''
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: ProductDetailsModelDto): string {
  return (product && product.default_picture_model && product.default_picture_model.full_size_image_url)
    ? product.default_picture_model.full_size_image_url
    : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: ProductDetailsModelDto[], filters: ProductFilter): Product[] {
  // TODO: Implement use cases of product filter
  return products ? products : [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(product: ProductDetailsModelDto, filterByAttributeName?: string[]): ProductDetailsAttributeModelDto[] {
  return product && product.product_attributes ? product.product_attributes : [];
}

function getShortDescription(product: ProductDetailsModelDto): string {
  return product && product.short_description ? product.short_description : '';
}

function getDescription(product: ProductDetailsModelDto): string {
  return product && product.full_description ? product.full_description : '';
}

function getCategoryIds(product: ProductDetailsModelDto): string[] {
  return (product && product.breadcrumb && product.breadcrumb.category_breadcrumb)
    ? product.breadcrumb.category_breadcrumb.map(c=>c.id.toString())
    : [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: ProductDetailsModelDto): string {
  return product && product.id ? product.id.toString() : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: ProductDetailsModelDto): number {
  console.log('getTotalReviews');
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: ProductDetailsModelDto): number {
  return 0;
}

function getTabs(product: ProductDetailsModelDto): any[] {
  return [{
    title: 'Description',
    content: product && product.short_description ? product.short_description : ''
  },
  {
    title: 'Read reviews',
    content: ''
  },
  {
    title: 'Additional Information',
    content: ''
  }];
}

function getBreadcrumbs(product: ProductDetailsModelDto): AgnosticBreadcrumb[] {
  return (product && product.breadcrumb && product.breadcrumb.category_breadcrumb)
    ? product.breadcrumb.category_breadcrumb.map(b=>{
      return {
        text: b.name,
        link: b.se_name
      };
    })
    : [];
}

function getProperties(product: ProductDetailsModelDto): any[] {
  return (product && product.product_specification_model && product.product_specification_model.groups)
    ? product.product_specification_model.groups.flatMap(ps=>{
      const prodSpec = ps.attributes.map(att=>{
        const properties = {
          name: att.name,
          value: att.values.map(v=>v.value_raw).join(',')
        };
        return properties;
      });
      return prodSpec;
    })
    : [];
}

function getManufacturer(product: ProductDetailsModelDto): string {
  return product && product.product_manufacturers ? product.product_manufacturers.map(pm=>pm.name).join(', ') : '';
}

export interface ProductGetters<ProductDetailsModelDto, ProductFilter> extends Omit<BaseProductGetters<ProductDetailsModelDto, ProductFilter>, 'getAttributes'> {
  getAttributes: (product: ProductDetailsModelDto, filters?: Array<string>) => ProductDetailsAttributeModelDto[];
}

export const productGetters: ProductGetters<ProductDetailsModelDto, ProductFilter> = {
  getAttributes,
  getAverageRating,
  getBreadcrumbs,
  getCategoryIds,
  getCoverImage,
  getDescription,
  getFiltered,
  getFormattedPrice,
  getGallery,
  getId,
  getName,
  getPrice,
  getProperties,
  getShortDescription,
  getSlug,
  getTabs,
  getTotalReviews,
  getManufacturer
};
