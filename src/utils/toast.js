import { useToast } from '../contexts/ToastContext';

export const showToast = {
  success: (message, duration = 3000) => {
    const { toastSuccess } = useToast();
    toastSuccess(message);
  },
  error: (message, duration = 5000) => {
    const { toastError } = useToast();
    toastError(message);
  },
  warning: (message, duration = 4000) => {
    const { toastWarning } = useToast();
    toastWarning(message);
  },
  info: (message, duration = 3000) => {
    const { toastInfo } = useToast();
    toastInfo(message);
  }
};

// Common success messages
export const SUCCESS_MESSAGES = {
  LOGIN: 'Successfully logged in',
  LOGOUT: 'Successfully logged out',
  REGISTER: 'Successfully registered',
  UPDATE_PROFILE: 'Profile updated successfully',
  COURSE_CREATE: 'Course created successfully',
  COURSE_UPDATE: 'Course updated successfully',
  COURSE_DELETE: 'Course deleted successfully',
  ENROLL: 'Successfully enrolled in course',
  COMPLETE_LESSON: 'Lesson completed successfully'
};

// Common error messages
export const ERROR_MESSAGES = {
  LOGIN: 'Invalid credentials',
  REGISTER: 'Registration failed',
  UPDATE_PROFILE: 'Failed to update profile',
  COURSE_CREATE: 'Failed to create course',
  COURSE_UPDATE: 'Failed to update course',
  COURSE_DELETE: 'Failed to delete course',
  ENROLL: 'Failed to enroll in course',
  COMPLETE_LESSON: 'Failed to complete lesson',
  NETWORK: 'Network error occurred',
  AUTH_REQUIRED: 'Authentication required',
  ACCESS_DENIED: 'Access denied'
};

// Common validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  MIN_LENGTH: (length) => `Must be at least ${length} characters`,
  MAX_LENGTH: (length) => `Must be at most ${length} characters`,
  INVALID_EMAIL: 'Invalid email address',
  PASSWORD_MISMATCH: 'Passwords do not match',
  INVALID_PASSWORD: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character',
  INVALID_FILE: 'Invalid file format',
  FILE_TOO_LARGE: (maxSize) => `File size exceeds ${maxSize}MB limit`
};
