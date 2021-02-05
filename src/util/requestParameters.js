const Auth = 'auth';
const VERSION = 'V1';
export const AuthMethodTypes = {
    VERIFY_MOBILE_NUMBER : Auth+'/validate-mobile-number',
    VERIFY_OTP_NUMBER    : Auth+'/validate-otp-number',
};

export const ShopMethodTypes = {
    GET_CATEGORY_LISTING: 'category',
    SHOP : {
        SHOW:'shop',
        DETAILS:'shop-details/',
    },
    SHOP_PRODUCT:{
        DETAILS:'shop/product/',
        BANNERS:'shop/banners/',
        CATEGORY:'shop/category/',
        SEARCH:'shop/search-product/'
    },
    CART:{
        STORE:'shop/cart',
        DETAILS:'shop/cart-details'
    },
    USER:{
        DETAILS:'user-details',
        STORE_ADDRESS:'customer-address'
    },
    ORDER:{
        STORE          : 'order-payment',
        PAYMENT_STATUS : 'order-payment/status',
        DETAILS        : 'order-payment/',
        INDEX          : 'order',
    }
};


export const AppShopMethodTypes = {
    EXPLORE:{
        SHOPS:'shop/explore'
    }
};

export const PaymentMethodTypes = {
    SHOP_PRODUCT:{
        DETAILS:'shop/product/',
        BANNERS:'shop/banners/',
        CATEGORY:'shop/category/',
        SEARCH:'shop/search-product/'
    },
    ORDER:{
        STORE:'order-payment',
        PAYMENT_STATUS:'order-payment/status',
        DETAILS: VERSION + '/order-payment/',
        INDEX:'order',
        PAYMENT_UPDATE : VERSION+'/update-payment/status',
    }
};

export const domainName = window.location.hostname;

export const RequestParameterHelper = {
    ShopMethodTypes,
    AuthMethodTypes,
    PaymentMethodTypes,
    AppShopMethodTypes
};
