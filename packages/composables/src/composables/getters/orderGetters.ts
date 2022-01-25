import { UserOrderGetters } from '@vue-storefront/core';
import type { Order, OrderItem } from '@vue-storefront/nopcommerce-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDate(order: Order): string {
  return new Date(order?.created_on).toLocaleDateString() || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(order: Order): string {
  return order.id;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStatus(order: Order): string {
  return order.shipping_status;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(order: Order): number | null {
  return order.order_total_value;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(order: Order): OrderItem[] {
  return order.items;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item: OrderItem): string {
  return item.sku;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: OrderItem): string {
  return item.attribute_info ? `${item.product_name} (${item.attribute_info})` : item.product_name;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: OrderItem): number {
  return item.quantity;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: OrderItem): number {
  return item.unit_price_value;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line
function getOrdersTotal(orders: any): number {  
  return orders.results.length;
}

export const orderGetters: UserOrderGetters<Order, OrderItem> = {
  getDate,
  getId,
  getStatus,
  getPrice,
  getItems,
  getItemSku,
  getItemName,
  getItemQty,
  getItemPrice,
  getFormattedPrice,
  getOrdersTotal
};
