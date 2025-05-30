let hasInvoice=true;
let hasLicense=false;

// Logical Or Operator
let canDrive = hasInvoice || hasLicense;
console.log('Can drive in Kenya?', canDrive);

// Logical And Operator (exact opposite of Or)
let canDriveSafely = hasInvoice && hasLicense;
console.log('Can drive safely in Kenya?', canDriveSafely);

// Logical NOT Operator
let notHasInvoice = !hasInvoice;
console.log('Does NOT have invoice?', notHasInvoice);

let notHasLicense = !hasLicense;
console.log('Does NOT have license?', notHasLicense);

// Combining NOT with AND/OR
let cannotDrive = !(hasInvoice || hasLicense);
console.log('Cannot drive in Kenya?', cannotDrive);

// Double NOT (!!) to convert to boolean
let isInvoiceBoolean = !!hasInvoice;
console.log('Is hasInvoice a boolean?', isInvoiceBoolean);

// Nullish Coalescing Operator (??)
let driverName = null;
let displayName = driverName ?? "Unknown Driver";
console.log('Driver name:', displayName);