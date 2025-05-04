declare module 'react-native' {
  interface NativeModulesStatic {
    [key: string]: any;
  }
  
  export const NativeModules: NativeModulesStatic;
} 