import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Define a type for the API response
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Define a type for the API error
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Add request interceptor for authentication
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage or wherever you store it
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle specific error cases
    if (error.response?.status === 401) {
      // Handle unauthorized access
      // You could redirect to login page or refresh token
    }
    
    return Promise.reject(error);
  }
);

/**
 * Generic function to make API calls
 * @param method HTTP method (GET, POST, PUT, DELETE)
 * @param url API endpoint
 * @param data Request data (optional)
 * @param config Additional axios config (optional)
 * @returns Promise with typed response
 */
export async function apiRequest<T, D = any>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  url: string,
  data?: D,
  config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await apiClient({
      method,
      url,
      data,
      ...config,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    
    // Handle error response
    if (axiosError.response) {
      throw {
        message: axiosError.response.data.message || 'An error occurred',
        status: axiosError.response.status,
        errors: axiosError.response.data.errors,
      };
    }
    
    // Handle network errors
    throw {
      message: 'Network error. Please check your connection.',
      status: 0,
    };
  }
}

// Convenience methods for common HTTP methods
export const api = {
  get: <T>(url: string, config?: Omit<AxiosRequestConfig, 'method' | 'url'>) => 
    apiRequest<T>('GET', url, undefined, config),
  
  post: <T, D = any>(url: string, data?: D, config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>) => 
    apiRequest<T, D>('POST', url, data, config),
  
  put: <T, D = any>(url: string, data?: D, config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>) => 
    apiRequest<T, D>('PUT', url, data, config),
  
  patch: <T, D = any>(url: string, data?: D, config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>) => 
    apiRequest<T, D>('PATCH', url, data, config),
  
  delete: <T>(url: string, config?: Omit<AxiosRequestConfig, 'method' | 'url'>) => 
    apiRequest<T>('DELETE', url, undefined, config),
};