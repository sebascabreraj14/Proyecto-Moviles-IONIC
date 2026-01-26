import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'PROYECTO-MOVILES-IONIC',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Tiempo en milisegundos (3 seg)
      launchAutoHide: true,
      backgroundColor: "#ffffffff", // Color de fondo si la imagen no cubre todo
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
    },
  },
};

export default config;