import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile Component', () => {
  it('renders default profile data if no user prop provided', () => {
    render(<Profile />);
    
    expect(screen.getByText('Alex Dev')).toBeDefined();
    expect(screen.getByText('@alexcodes')).toBeDefined();
  });

  it('renders custom user data when provided', () => {
    const customUser = {
      name: "Custom User",
      handle: "@custom_user",
      bio: "Custom bio",
      location: "New York",
      website: "custom.com",
      joinedDate: "Feb 2024",
      following: 10,
      followers: 20,
      avatarUrl: "custom.jpg"
    };

    render(<Profile user={customUser} />);
    
    expect(screen.getByText('Custom User')).toBeDefined();
    expect(screen.getByText('@custom_user')).toBeDefined();
    expect(screen.getByText('Custom bio')).toBeDefined();
  });
});
