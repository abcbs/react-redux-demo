

export function clientWidth() {

    var client='xs';//屏幕大小480
    try{
         //480   763     Phone/
        //768   1024    pad mini,Small screen / tablet
        //1280  800     Medium screen / desktop
        //1440  900     Large screen / wide desktop
        const width=document.documentElement.clientWidth;
        if(width<=480){
            client='xs';
        }else if(width>480&&width<=768){
            client='sm'
        }else if(width>768&&width<=1280){
            client='md'
        }else if(width>1280&&width<=1440){
            client='lg'
        }
        return client;
    }catch(err){
        return xs;//手机
    }
}
try{
    if(window){
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", clientWidth, false);
    }
}catch (err){
    console.log("err,",err);
}
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