import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.app',
  appName: 'blankscreen',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    SplashScreen: {
      // launchShowDuration: 5000,
      launchAutoHide: false,
      backgroundColor: '#ffce00',
      showSpinner: true,
      iosSpinnerStyle: 'large',
      androidSpinnerStyle: 'large',
      spinnerColor: '#007849',
    }
  },
  cordova: {
    preferences: {
      BILLING_KEY: "abc"
    }
  }
};

export default config;
