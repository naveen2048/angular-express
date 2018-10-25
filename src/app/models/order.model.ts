import { Deserializable } from "./deserializable.model";

export class orderModel implements Deserializable {
  number: number;
  id: number;
  email: string;
  closed_at: any;
  created_at: any;
  updated_at: any;
  note: any;
  token: string;
  gateway: string;
  test: boolean;
  total_price: number;
  subtotal_price: number;
  total_weight: number;
  total_tax: number;
  taxes_included: boolean;
  currency: string;
  financial_status: string;
  confirmed: boolean;
  total_discounts: number;
  total_line_items_price: number;
  cart_token: string;
  buyer_accepts_marketing: boolean;
  name: number;
  referring_site: string;
  landing_site: string;
  cancelled_at: Date;
  cancel_rason: string;
  total_price_usd: number;
  checkout_token: string;
  reference: any;
  user_id: any;
  location_id: any;
  source_identifier: any;
  source_url: string;
  processed_at: any;
  device_id: string;
  phone: any;
  customer_locale: string;
  app_id: number;
  browser_ip: string;
  landing_site_ref: string;
  order_number: number;
  discount_applications: any[];
  discount_codes: any[];
  note_attributes: any[];
  payment_gateway_names: any[];
  processing_method: string;
  checkout_id: string;
  source_name: string;
  fulfillment_status: string;
  tax_lines: taxLineModel[];
  tags: string;
  contact_email: string;
  order_status_url: string;
  total_tip_received: number;
  admin_graphql_api_id: string;
  line_items: any[];
  shipping_lines: any[];
  billing_address: any[];
  shipping_address: any[];
  fulfillments: any[];
  client_details: any;
  refunds: any[];
  customer: any;
  internal_purpose: {
    isSelected: boolean;
    vendor: any;
    courier: any;
  };

  deserialize(input: any)  {
    Object.assign(this, input);
    return this;
  }
}

export interface lineItemModel {}

export interface taxLineModel {
  price: number;
  rate: number;
  title: string;
}
