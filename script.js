 // PW Types
 let pwType = null;
 let len = null;
 let charset = null;

 // Charsets except ascii
 const charset_alpha =
     'abcdefghijklnopqrstuvwxyz' +
     'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
     '0123456789';
 const charset_hex = '0123456789ABCDEF';

 // Select a password type
 document.getElementById('pwTypeSelect').addEventListener('change', function () {
     pwType = this.value;
 });

 // Select length
 document.getElementById('pwLenSelect').addEventListener('change', function () {
     len = parseInt(this.value, 10);
 });

 // Submit request for password
 function generatePassword() {
     if (pwType === 'alpha') {
         charset = charset_alpha;
         generatePwd(len);
     }
     if (pwType === 'hex') {
         charset = charset_hex;
         generatePwd(len);
     }
     if (pwType === 'ascii') {
         generateAsciiPwd(len);
     }
 }

 // Copy to clipboard
 function copyToClipboard() {
     const text = document.getElementById('passwordDisplay').innerText;
     window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
 }

 // Generate an alpha numeric or hex pw
 function generatePwd(length) {
     let retVal = '';
     let i = 0;
     const n = charset.length;
     while (i < length) {
         retVal += charset.charAt(Math.floor(Math.random() * n));
         ++i;
     }
     if (retVal !== '') {
         document.getElementById('passwordDisplay').innerText = retVal;
     }
 }

 // Generate an ascii pw
 function generateAsciiPwd(length) {
     let retVal = '';
     let i = 0;
     const offset = 33;
     const n = 92;
     while (i < length) {
         const random = Math.floor(Math.random() * n);
         retVal += String.fromCharCode(random + offset);
         ++i;
     }
     if (retVal !== '') {
         document.getElementById('passwordDisplay').innerText = retVal;
     }
 }

 // Prompt blinking cursor animation
 const blinkerElement = document.querySelector('.blinker');
 setInterval(function () {
     blinkerElement.style.visibility = (blinkerElement.style.visibility === 'visible' ? 'hidden' : 'visible');
 }, 500);