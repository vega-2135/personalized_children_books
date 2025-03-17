# Personalized Children's Books - Shopify App

A Shopify app that creates customized children's books featuring characters that resemble the child recipient, based on input characteristics and pre-written story templates with moral lessons.

## Features

- Character customization (gender, physical traits, name)
- Theme selection from common toddler milestones
- AI-powered illustration generation
- Live preview of sample pages before purchase
- Integration with Shopify for seamless ordering

## Tech Stack

- Next.js
- TypeScript
- Shopify Polaris
- MongoDB
- AI Image Generation Service

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- A Shopify Partner account
- MongoDB database
- AI service API key (details in setup)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personalized-children-books.git
cd personalized-children-books
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
MONGODB_URI=your_mongodb_uri
AI_SERVICE_API_KEY=your_ai_service_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app

## Development

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 