export interface ApiError {
  message?: string;
  statusCode?: number;
  error?: string;
  [key: string]: unknown;
}
