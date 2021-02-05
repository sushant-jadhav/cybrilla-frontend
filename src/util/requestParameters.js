const Auth = 'auth';
const VERSION = 'V1';
export const AuthMethodTypes = {
    VERIFY_MOBILE_NUMBER : Auth+'/validate-mobile-number',
    VERIFY_OTP_NUMBER    : Auth+'/validate-otp-number',
};

export const ShopMethodTypes = {
    PRODUCT : {
        INDEX:'product',
        SHOW:'shop',
        DETAILS:'shop-details/',
    },
};


export const domainName = window.location.hostname;

export const RequestParameterHelper = {
    ShopMethodTypes,
    AuthMethodTypes
};
