import { api } from './api';

// Example interfaces for type safety
interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserData {
  name: string;
  email: string;
  password: string;
}

// Example usage of the API utility

// GET request example
async function fetchUser(userId: number) {
  try {
    const response = await api.get<any>(`/users/${userId}`);
    console.log('User data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// POST request example
async function createUser(userData: CreateUserData) {
  try {
    const response = await api.post<User, CreateUserData>('/users', userData);
    console.log('Created user:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// PUT request example
async function updateUser(userId: number, userData: Partial<CreateUserData>) {
  try {
    const response = await api.put<User, Partial<CreateUserData>>(`/users/${userId}`, userData);
    console.log('Updated user:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

// DELETE request example
async function deleteUser(userId: number) {
  try {
    const response = await api.delete<void>(`/users/${userId}`);
    console.log('User deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

// Example with custom config
async function fetchUsersWithPagination(page: number, limit: number) {
  try {
    const response = await api.get<User[]>('/users', {
      params: { page, limit },
      headers: { 'Cache-Control': 'no-cache' }
    });
    console.log('Users data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Example of using the API in a React component
/*
import { useState, useEffect } from 'react';
import { api } from './utils/api';

function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        const response = await api.get<User>(`/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        setError('Failed to load user data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
*/