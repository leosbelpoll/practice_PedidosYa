import * as Constants from "./constants";

export const getDevicePlatform = () => window.deviceInfo.getPlatform();

export const getDeviceId = () => window.deviceInfo.getId();

export const getDeviceManufacturer = () => window.deviceInfo.getManufacturer();

export const getDeviceModel = () => window.deviceInfo.getModel();

export const getDisplay = () => (window.innerWidth >= 768 ? Constants.DESKTOP : Constants.MOBILE);

export const isMobileNative = !!window.cordova;

export const isMobile = getDisplay() === Constants.MOBILE;

export const getMobileOS = (display) => {
    if (isMobileNative) {
        return getDevicePlatform();
    }
    if (display === Constants.MOBILE) {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/windows phone/i.test(userAgent)) {
            return Constants.WINDOWS_PHONE;
        }

        if (/android/i.test(userAgent)) {
            return Constants.ANDROID;
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return Constants.IOS;
        }
    }

    return undefined;
};
