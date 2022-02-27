mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
if ( !mobile || location.protocol != "https:")
    window.location.replace("https://sites.google.com/view/kryptifystage/home");
