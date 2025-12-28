#!/bin/bash

echo "🎉 Wedding Invitation React App - Installation Script"
echo "======================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
echo ""

# Try to install dependencies
if npm install; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 You can now start the development server with:"
    echo "   npm run dev"
    echo ""
    echo "📖 Or read the README.md for more information"
else
    echo ""
    echo "❌ Installation failed. Trying alternative method..."
    echo ""
    
    # Try with npx
    echo "Attempting to use npx instead..."
    if npx vite; then
        echo "✅ You can run the dev server directly with: npx vite"
    else
        echo "❌ Both methods failed. Please try:"
        echo "   1. Update Node.js: nvm install 18 && nvm use 18"
        echo "   2. Clear cache: npm cache clean --force"
        echo "   3. Try again: npm install"
    fi
fi

echo ""
echo "Happy coding! 💒"

