"us"
import { api } from './api';

// Define types for authentication
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  user: {
    id: number;
    name: string;
    email: string;
    role?: string;
  };
  token: string;
}

export interface AuthError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

/**
 * Login user with email and password
 * @param credentials User login credentials
 * @returns Promise with user data and token
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const response = await api.post<any>('/auth/login', credentials);
    
    return response.data;
  } catch (error) {
    const authError = error as AuthError;
    
    if (authError.status === 401) {
      throw new Error('Invalid email or password');
    }
    
    throw error;
  }
}

/**
 * Register a new user
 * @param signupData User registration data
 * @returns Promise with user data and token
 */
export async function signup(signupData: SignupData): Promise<AuthResponse> {
  try {
    const response = await api.post<AuthResponse>('/auth/signup', signupData);
    
    // Store the token in localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    
    return response.data;
  } catch (error) {
    // Handle specific signup errors
    const authError = error as AuthError;
    
    if (authError.status === 400 && authError.errors) {
      // Handle validation errors
      const errorMessages = Object.values(authError.errors).flat();
      throw new Error(errorMessages.join(', '));
    }
    
    throw error;
  }
}

/**
 * Logout the current user
 */
export function logout(): void {
  // Remove the token from localStorage
  localStorage.removeItem('token');
  
  // You could also redirect to the login page or home page
  // window.location.href = '/login';
}

/**
 * Check if the user is authenticated
 * @returns boolean indicating if the user is logged in
 */
export function isAuthenticated(): boolean {
  return !!localStorage.getItem('token');
}

/**
 * Get the current user's token
 * @returns The authentication token or null if not authenticated
 */
export function getToken(): string | null {
  return localStorage.getItem('token');
}

/**
 * Get the current user's data from the API
 * @returns Promise with user data
 */
export async function getCurrentUser() {
  try {
    const response = await api.get<AuthResponse['user']>('/auth/me');
    return response.data;
  } catch (error) {
    // If there's an error (like an expired token), log the user out
    logout();
    throw error;
  }
}