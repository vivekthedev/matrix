# Matrix: A Multi-Level Puzzle Game with React and AWS Amplify

Matrix is an engaging puzzle game that challenges players through five distinct levels, each requiring unique problem-solving skills. Built with React and powered by AWS Amplify, this game offers a seamless and interactive experience for users.

The game progresses from simple switch patterns to complex terminal interactions, providing an increasingly challenging experience. Each level is designed to test different aspects of logical thinking and problem-solving abilities.

## Repository Structure

```
.
├── amplify/
│   ├── auth/
│   ├── data/
│   ├── backend.ts
│   ├── package.json
│   └── tsconfig.json
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

### Key Files:
- `src/App.tsx`: Main application component
- `src/main.tsx`: Entry point of the React application
- `amplify/backend.ts`: AWS Amplify backend configuration
- `vite.config.ts`: Vite configuration for the project

## Usage Instructions

### Installation

Prerequisites:
- Node.js (v14 or later)
- npm (v6 or later)

Steps:
1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies

### Getting Started

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173` (or the port specified in the console)

### Configuration

The project uses AWS Amplify for backend services. To configure:

1. Install the Amplify CLI:
   ```
   npm install -g @aws-amplify/cli
   ```
2. Configure Amplify:
   ```
   amplify configure
   ```
3. Initialize Amplify in the project:
   ```
   amplify init
   ```

### Testing & Quality

To run tests:
```
npm run test
```

### Troubleshooting

Common issues:

1. **Amplify configuration errors**
   - Problem: Unable to connect to AWS services
   - Solution: Ensure you have properly configured Amplify and have the necessary AWS credentials
   - Debug: Run `amplify status` to check the status of your Amplify project

2. **Build failures**
   - Problem: Project fails to build
   - Solution: Check for any TypeScript errors or missing dependencies
   - Debug: Run `npm run build` and address any errors that appear

For more detailed debugging:
- Enable verbose logging in Vite:
  ```
  DEBUG=vite:* npm run dev
  ```
- Check the browser console for any frontend errors
- Review AWS CloudWatch logs for backend issues

## Data Flow

The Matrix game follows a linear progression through five levels. Here's an overview of the data flow:

1. User starts at the landing page (Home)
2. User enters their name and proceeds to the level grid
3. User selects a level from the grid
4. Each level loads its specific components and logic
5. User interacts with level-specific elements (switches, inputs, terminal)
6. On level completion, user is redirected back to the level grid or the next level

```
[Landing Page] -> [Level Grid] -> [Level 1-5] -> [Completion] -> [Level Grid]
     |                |               |
     |                |               |
     v                v               v
[Name Input]    [Level Selection]  [Level-specific Interactions]
```

Note: The game state (current level, user progress) is managed within the React components using local state. There is no persistent data storage implemented in the current version.

## Infrastructure

The project uses AWS Amplify for backend services. Key resources include:

### Authentication (AWS Cognito)
- Resource: Auth
- Configuration: Email-based login

### API (AWS AppSync)
- Resource: Data
- Type: GraphQL API
- Schema: Includes a Todo model (Note: This seems to be a placeholder and not directly used in the game logic)

## Deployment

The project is set up to be deployed using AWS Amplify. To deploy:

1. Ensure you have configured Amplify (see Configuration section)
2. Run:
   ```
   amplify push
   ```
3. Follow the prompts to create the necessary AWS resources

After deployment, you can publish your app using:
```
amplify publish
```

This will build your React application and deploy it to AWS CloudFront for global distribution.