/**
 * QR Code Generator Web App
 * This Google Apps Script creates a simple web app for generating QR codes from URLs
 */

function doGet() {
  return HtmlService.createTemplateFromFile('app')
    .evaluate()
    .setTitle('QR Code Generator')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Generate QR code using QR Server API (more reliable than Google Charts)
 * @param {string} url - The URL to encode in the QR code
 * @param {number} size - Size of the QR code (default: 200)
 * @return {string} - QR code image URL
 */
function generateQRCode(url, size = 200) {
  try {
    if (!url) {
      throw new Error('URL is required');
    }
    
    // Add protocol if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    // Validate URL format
    if (!isValidUrl(url)) {
      throw new Error('Please enter a valid URL');
    }
    
    // Ensure size is within bounds
    size = Math.max(100, Math.min(500, size));
    
    // Use QR Server API - more reliable and modern
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
    
    // Also create backup Google Charts URL (simpler format)
    const googleChartsUrl = `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${encodeURIComponent(url)}`;
    
    // Log for debugging
    Logger.log('Generated QR Code URL (QR Server): ' + qrCodeUrl);
    Logger.log('Backup URL (Google Charts): ' + googleChartsUrl);
    Logger.log('Original URL: ' + url);
    
    return {
      success: true,
      qrCodeUrl: qrCodeUrl,
      backupUrl: googleChartsUrl,
      originalUrl: url,
      size: size
    };
    
  } catch (error) {
    Logger.log('Error generating QR code: ' + error.toString());
    return {
      success: false,
      error: error.toString()
    };
  }
}

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @return {boolean} - True if valid URL
 */
function isValidUrl(url) {
  try {
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlPattern.test(url) || url.startsWith('http://') || url.startsWith('https://');
  } catch (e) {
    return false;
  }
}

/**
 * Add protocol to URL if missing
 * @param {string} url - URL to process
 * @return {string} - URL with protocol
 */
function addProtocolIfMissing(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
}