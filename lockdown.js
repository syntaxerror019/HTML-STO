window.SecurityLockdown = function (options = {}) {
    const defaults = {
        disableRightClick: true,
        disableF12: true,
        disableCtrlShiftI: true,
        disableCtrlShiftC: true,
        disableCtrlShiftJ: true,
        disableCtrlU: true,
        logAttempts: true
    };

    const settings = { ...defaults, ...options };

    if (settings.disableRightClick) {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            if (settings.logAttempts) {
                console.error("Right-click attempt mitigated.");
            }
        });
    }
  
    document.addEventListener('keydown', function (e) {
      
        if (settings.disableF12 && e.keyCode == 123) {
            e.preventDefault();
            if (settings.logAttempts) {
                console.error("Inspect element attempt mitigated (F12).");
            }
        }
      
        if (settings.disableCtrlShiftI && e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            e.preventDefault();
            if (settings.logAttempts) {
                console.error("Inspect element attempt mitigated (Ctrl+Shift+I).");
            }
        }
      
        if (settings.disableCtrlShiftC && e.ctrlKey && e.shiftKey && e.keyCode == 67) {
            e.preventDefault();
            if (settings.logAttempts) {
                console.error("Inspect element attempt mitigated (Ctrl+Shift+C).");
            }
        }
      
        if (settings.disableCtrlShiftJ && e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            e.preventDefault();
            if (settings.logAttempts) {
                console.error("Console attempt mitigated (Ctrl+Shift+J).");
            }
        }
      
        if (settings.disableCtrlU && e.ctrlKey && e.keyCode == 85) {
            e.preventDefault();
            if (settings.logAttempts) {
                console.error("View page source attempt mitigated (Ctrl+U).");
            }
        }
    });
};
