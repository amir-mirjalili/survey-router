export {};

declare global {
  namespace RestApi {
    interface ObjectResInterface {
      is_success: boolean;
      data?: any;
      msg?: string;
    }
  }
}
