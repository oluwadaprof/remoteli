export type PaymentMethod = {
    brand: string;
    funding: string;
    last4: string;
    exp_month: string;
    exp_year: string;
};

export type User = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country_id: string;
    postal_code: string;
    share_data: boolean;
    registered_on: string;
    subscribed: boolean;
    payment_method: PaymentMethod;
    login_link: string;
};