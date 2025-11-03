# QR Code Generator - Google Apps Script Web App

A simple, elegant web application built with Google Apps Script that generates QR codes from URLs. Users can input any URL and receive a QR code image that can be downloaded or shared.

## Features

- 🔗 **Simple URL Input**: Enter any URL to generate a QR code
- 📏 **Adjustable Size**: Customize QR code size from 100px to 500px
- 🎨 **Modern UI**: Clean, responsive design with gradient backgrounds
- ⚡ **Fast Generation**: Uses Google Charts API for quick QR code generation
- 💾 **Download Option**: Save QR codes as PNG images
- 🔧 **Auto URL Fixing**: Automatically adds https:// if protocol is missing
- 📱 **Mobile Friendly**: Works perfectly on all devices

## Files Structure

```
source_app/
├── Code.gs         # Main Google Apps Script server-side code
├── index.html      # Web interface (HTML, CSS, JavaScript)
└── README.md       # This documentation file
```

## Deployment Instructions

### Step 1: Create a New Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Give your project a name (e.g., "QR Code Generator")

### Step 2: Add the Code Files

1. **Replace the default Code.gs:**
   - Delete the default `myFunction()` in Code.gs
   - Copy and paste the contents from `Code.gs` in this folder

2. **Add the HTML file:**
   - Click the "+" button next to "Files"
   - Select "HTML" 
   - Name it `index`
   - Copy and paste the contents from `index.html` in this folder

### Step 3: Deploy as Web App

1. Click "Deploy" in the top right corner
2. Select "New deployment"
3. Click the gear icon next to "Type" and select "Web app"
4. Fill in the deployment configuration:
   - **Description**: "QR Code Generator v1.0"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone (or "Anyone with Google account" for restricted access)
5. Click "Deploy"
6. **Important**: You'll need to authorize the script:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to [Your Project Name] (unsafe)"
   - Click "Allow"

### Step 4: Get Your Web App URL

After deployment, you'll receive a web app URL that looks like:
```
https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Save this URL - this is your live QR code generator!

## How to Use

1. Open your deployed web app URL
2. Enter any URL in the input field (e.g., `google.com`, `https://github.com`)
3. Adjust the QR code size using the slider (100-500px)
4. Click "Generate QR Code"
5. Download or right-click to save the generated QR code

## Technical Details

### Server-side Functions (Code.gs)

- `doGet()`: Serves the HTML interface
- `generateQRCode(url, size)`: Creates QR code using Google Charts API
- `isValidUrl(url)`: Validates URL format
- `addProtocolIfMissing(url)`: Ensures URLs have proper protocol

### Client-side Features (index.html)

- Responsive design with CSS Grid and Flexbox
- Real-time size adjustment with range slider
- Form validation and error handling
- Loading states and success/error messages
- Auto-focus and example URL shortcuts

### API Used

The app uses the **Google Charts QR Code API**:
```
https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=URL&choe=UTF-8
```

## Customization Options

### Styling
- Modify the CSS in `index.html` to change colors, fonts, or layout
- Current theme uses a purple gradient with modern card design

### Functionality
- Add QR code format options (error correction levels)
- Implement batch QR code generation
- Add custom logo embedding
- Store generated QR codes in Google Drive

### Size Limits
- Current size range: 100px - 500px
- Can be modified in the HTML range input attributes

## Error Handling

The app includes comprehensive error handling for:
- Invalid or empty URLs
- Network connection issues
- Google Apps Script execution errors
- Invalid size parameters

## Security Features

- Input validation and sanitization
- URL format checking
- Automatic protocol addition for security
- No data storage (privacy-focused)

## Browser Compatibility

- ✅ Chrome, Firefox, Safari, Edge (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Works without additional plugins or extensions

## Limitations

- Depends on Google Charts API availability
- QR code complexity limited by URL length
- No offline functionality
- Google Apps Script execution time limits apply

## Troubleshooting

### Common Issues:

1. **"Script not found" error**: Re-deploy the web app
2. **Authorization issues**: Check deployment permissions
3. **QR code not loading**: Verify internet connection and URL validity
4. **Mobile display issues**: Ensure viewport meta tag is included

### Support

For issues or questions:
1. Check the Google Apps Script execution logs
2. Verify all files are properly uploaded
3. Ensure deployment permissions are correct
4. Test with simple URLs first (e.g., `google.com`)

## License

This project is open source and available under the MIT License.