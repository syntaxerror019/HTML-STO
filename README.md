# Security Through Obscurity for HTML

Enhance the security of your website with this JavaScript solution that disables right-click, inspect element, view page source, and more. 

## What is Security Through Obscurity?

Security through obscurity aims to obscure or restrict access to certain parts of your website's code or functionality. While this approach makes it more difficult for casual users to interact with or inspect elements, **please note** that it won't prevent persistent users from accessing your website's code or contents.

## Features

This script allows you to customize your website's security level with an interactive function that can be called directly from your site. Key features include:

- **Disabling Right-Click Context Menu:** Prevents users from accessing the context menu.
- **Disabling Inspect Element Hotkeys:** Blocks common hotkeys for inspecting elements:
  - F12 (Inspect Element)
  - Ctrl + Shift + I (Inspect Element)
  - Ctrl + Shift + C (Copy Element)
  - Ctrl + Shift + J (Open Console)
  - Ctrl + U (View Page Source)
- **Customizable Settings:** Tailor the level of security to your needs with various options.

## How to Use

You have two options to implement this script, both of which function identically. Choose the regular version for general use or the obfuscated version for a harder-to-trace code.

### Step 1: Include the Script

Include the script in your HTML:

#### Regular Version

```html
<script src="path/to/securityLockdown.js"></script>
```

#### Obfuscated Version

```html
<script src="path/to/securityLockdown.obf.js"></script>
```

### Step 2: Initialize the Security Lockdown

Add the following JavaScript code to initialize the security lockdown feature:

```javascript
<script>
  window.SecurityLockdown({
      disableRightClick: true,
      disableF12: true,
      disableCtrlShiftI: true,
      disableCtrlShiftC: true,
      disableCtrlShiftJ: true,
      disableCtrlU: true,
      logAttempts: true
  });
</script>
```

## Customization

You can customize the security features by adjusting the options in the `SecurityLockdown` function. Here’s a breakdown of the available options:

- **disableRightClick:** (boolean) Enable/disable right-click functionality.
- **disableF12:** (boolean) Enable/disable F12 key for inspect element.
- **disableCtrlShiftI:** (boolean) Enable/disable Ctrl + Shift + I.
- **disableCtrlShiftC:** (boolean) Enable/disable Ctrl + Shift + C.
- **disableCtrlShiftJ:** (boolean) Enable/disable Ctrl + Shift + J.
- **disableCtrlU:** (boolean) Enable/disable Ctrl + U.
- **logAttempts:** (boolean) Log attempts to the console for monitoring.

## Important Note

While this script adds an additional layer of security, it should not be solely relied upon to protect sensitive data or code. It’s always advisable to implement robust security measures to safeguard your website and its contents.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you’d like to contribute to this project, feel free to submit a pull request or open an issue. Contributions and feedback are welcome!

