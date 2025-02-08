# React + Vite + Firebase

This project is built using **React** with **Vite** for fast and efficient development, and it integrates **Firebase** for backend services such as Firestore database and authentication.

## Features

- **Product Management**: Add, update, and delete products.
- **Firebase Firestore**: Stores product data securely.
- **Firebase Authentication** (if included): User login and authentication.
- **React Context API**: Manages global state efficiently.
- **React Router**: Enables navigation between different pages.
- **React Hooks**: Uses hooks like `useState`, `useEffect`, and `useContext` for state and effect management.

## Technologies Used

- **React** (Frontend UI)
- **Vite** (Build tool for faster development)
- **Firebase** (Database & backend services)
- **React Router** (For navigation)
- **Lucide Icons** (For UI elements)
- **Tailwind CSS** (For styling)
- **React Hot Toast** (For notifications)

## Project Structure

```
/src
  ├── components  // Reusable UI components
  ├── context     // React Context API for global state
  ├── firebase    // Firebase configuration
  ├── pages       // Application pages
  ├── App.jsx     // Main app component
  ├── main.jsx    // Entry point
```

## Firebase Setup

To use Firebase in this project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Set up Firestore and authentication if needed.
3. Add Firebase config in `firebase/FirebaseConfig.js`:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
```

## Running the Project

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Contributions

Feel free to contribute by submitting issues or pull requests!

## License

This project is open-source under the MIT license.
