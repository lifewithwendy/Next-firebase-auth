```markdown:README.md
# Next.js Firebase Authentication

A simple Next.js project demonstrating Google Authentication using Firebase.

## Features

- 🔐 Google Authentication
- ⚡ Real-time auth state management
- 🎨 Tailwind CSS styling
- 🔄 Loading states with react-spinners
- 📱 Responsive design

## Setup

1. Clone the repository:
```bash
git clone https://github.com/lifewithwendy/Next-firebase-auth.git
cd next-firebase-auth0
```README.md

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication and Google sign-in method
   - Get your Firebase configuration

4. Create `.env` file in the root directory:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Run the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Spinner.jsx
│   ├── context/
│   │   └── AuthContext.js
│   ├── firebase.js
│   ├── layout.js
│   └── page.js
```

## Key Dependencies

- Next.js 14
- Firebase
- React Spinners
- Tailwind CSS

## Firebase Configuration

Create `firebase.js`:
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

## Authentication Context

The `AuthContext.js` provides authentication state management:
- User state
- Google Sign-in
- Sign-out functionality
- Real-time auth state updates

## Components

### Navbar
- Navigation links
- Authentication status
- Login/Logout buttons
- User profile display

### Spinner
- Loading indicator for auth state changes
- Customizable appearance

