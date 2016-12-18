export default function Devices  () {
    try{

    var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

    /**
     * Android requires exceptions.
     *
     * @type boolean
     */
    var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


    /**
     * iOS requires exceptions.
     *
     * @type boolean
     */
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


    /**
     * iOS 4 requires an exception for select elements.
     *
     * @type boolean
     */
    var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


    /**
     * iOS 6.0-7.* requires the target element to be manually derived
     *
     * @type boolean
     */
    var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

    var deviceIsIOSAll=deviceIsIOS||deviceIsIOS4||deviceIsIOSWithBadTarget;
    /**
     * BlackBerry requires exceptions.
     *
     * @type boolean
     */
    var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
       return  {
           deviceIsWindowsPhone,
           deviceIsAndroid,
           deviceIsIOS,
           deviceIsIOS4,
           deviceIsIOSWithBadTarget,
           deviceIsBlackBerry10,
           deviceIsIOSAll
        }
    }catch(err){
        return  {
            deviceIsWindowsPhone:false,
            deviceIsAndroid:false,
            deviceIsIOS:false,
            deviceIsIOS4:false,
            deviceIsIOSWithBadTarget:false,
            deviceIsBlackBerry10:false,
            deviceIsIOSAll:false
        }
    }
}