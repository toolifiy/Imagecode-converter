export interface LosslessImage {
  id: string;
  name: string;
  size: number;
  type: string;
  code: string;
  timestamp: string;
  previewUrl: string; // Base64 encoding for persistent display
}

export interface UserStats {
  totalImages: number;
  totalBytes: number;
  uncompressedLossless: string;
  fidelityScore: string;
}

export type FooterTab = 'none' | 'about' | 'privacy' | 'terms' | 'contact';
