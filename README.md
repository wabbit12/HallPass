# Hallpass App

A mobile application built with Ionic Angular and Firebase that allows users to manage their profile, login securely, and handle user authentication.

## Features

- User authentication with Firebase
- Profile management
- Secure login/logout functionality
- Profile picture upload with compression
- Course information management

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository
```bash
git clone https://github.com/wabbit12/hallpass
cd HALLPASS
```

2. Install dependencies
```bash
npm install
```

3. Set up Firebase configuration
- Create a new project in Firebase Console
- Enable Authentication and Firestore
- Create a `src/environments/environment.ts` file with your Firebase config:
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'your-api-key',
    authDomain: 'your-auth-domain',
    projectId: 'your-project-id',
    storageBucket: 'your-storage-bucket',
    messagingSenderId: 'your-messaging-sender-id',
    appId: 'your-app-id'
  }
};
```

Contact the project maintainer for the required Firebase credentials.

## Running the App

### Development server

Run the development server:
```bash
ionic serve
```

The app will automatically reload if you change any of the source files.

### Building for Production

To build the app for production:
```bash
ionic build --prod
```

### Running on Android/iOS

1. Add the platform:
```bash
ionic cap add android
# or
ionic cap add ios
```

2. Build and sync:
```bash
ionic cap sync
```

3. Open in native IDE:
```bash
ionic cap open android
# or
ionic cap open ios
```

## Features in Detail

### Authentication
- Email/password login
- Secure session management
- Error handling for various authentication scenarios

### Profile Management
- Upload and update profile picture
- Edit user information
- Course details management
- Image compression for optimal storage