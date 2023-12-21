type DocumentMode = 5 | 7 | 8 | 9 | 10 | 11;

export declare global {
  interface Window {
    MSInputMethodContext: unknown;
  }

  interface Document {
    documentMode: DocumentMode;
  }
}
