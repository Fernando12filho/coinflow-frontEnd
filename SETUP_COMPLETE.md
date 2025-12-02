# CoinFlow Frontend - Setup Complete! 🚀

## Environment Setup Summary

Your CoinFlow frontend environment has been successfully configured and is ready to run!

## What Was Done

1. ✅ **Dependencies Installed**: All npm packages from `package.json` have been installed
2. ✅ **Environment File Created**: `.env` file created with default configuration
3. ✅ **Example Template**: `.env.example` file created for reference

## Project Information

- **Framework**: React 18.3.1
- **Build Tool**: react-scripts 5.0.1
- **Node Version**: v25.1.0
- **npm Version**: 11.6.2

## Key Dependencies

- React & React DOM
- React Router DOM (routing)
- Axios (API calls)
- Chakra UI (component library)
- Framer Motion (animations)
- SweetAlert2 (alerts)

## Available Scripts

### Start Development Server
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm build
```
Builds the app for production to the `build` folder

### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode

### Eject Configuration (Not Recommended)
```bash
npm run eject
```
**Note**: This is a one-way operation. Once you eject, you can't go back!

## Configuration

### Backend API
The frontend is currently configured to connect to:
- **Production**: `https://coinflow-backend.onrender.com` (currently active)
- **Local Development**: `http://127.0.0.1:5000` (commented out)

To switch between environments, edit `src/api/axios.js`:
```javascript
// For production:
const BASE_URL = "https://coinflow-backend.onrender.com";

// For local development:
// const BASE_URL = "http://127.0.0.1:5000";
```

### Environment Variables
You can customize the following in your `.env` file:
- `PORT`: Change the development server port (default: 3000)
- `BROWSER`: Control browser auto-open (set to 'none' to disable)
- `GENERATE_SOURCEMAP`: Enable/disable source maps

## Next Steps

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Open your browser** to [http://localhost:3000](http://localhost:3000)

3. **Start developing**! The page will reload when you make changes.

## Security Note

⚠️ **Important**: The npm audit found 65 vulnerabilities. This is common in React projects with older dependencies. To fix:

```bash
# Fix non-breaking changes
npm audit fix

# Fix all issues (may include breaking changes)
npm audit fix --force
```

Most warnings are from deprecated packages in react-scripts. Consider upgrading to a newer React setup (like Vite) in the future.

## Project Structure

```
coinflow-frontend/
├── public/               # Static files
│   ├── index.html       # Main HTML file
│   ├── favicon.ico      # App icon
│   └── ...
├── src/                 # Source code
│   ├── api/             # Axios configuration
│   ├── Components/      # React components
│   ├── context/         # React context (Auth)
│   ├── hooks/           # Custom React hooks
│   ├── images/          # Image assets
│   ├── fonts/           # Font files
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── .env                 # Environment variables
├── .env.example         # Environment template
├── package.json         # Dependencies
└── README.md            # Documentation
```

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can:
- Change the PORT in `.env` file
- Or use: `PORT=3001 npm start`

### API Connection Issues
- Ensure the backend is running if using local development
- Check CORS settings on the backend
- Verify the BASE_URL in `src/api/axios.js`

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

## Support

For questions or issues, check:
- The project README.md
- React documentation: https://react.dev/
- Chakra UI docs: https://chakra-ui.com/

---

**Happy Coding! 🎉**
