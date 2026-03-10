import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Post from './Post';

describe('Post Component', () => {
  const mockPost = {
    id: 1,
    author: {
      name: "Test User",
      handle: "@testuser",
      avatarUrl: "test-avatar.jpg"
    },
    content: "This is a test post content.",
    timestamp: "10m",
    likes: 5,
    comments: 2,
    shares: 1
  };

  it('renders post content and author details correctly', () => {
    render(<Post post={mockPost} />);
    
    expect(screen.getByText('Test User')).toBeDefined();
    expect(screen.getByText('@testuser')).toBeDefined();
    expect(screen.getByText('This is a test post content.')).toBeDefined();
  });

  it('handles like click correctly', () => {
    render(<Post post={mockPost} />);
    
    // Using simple text query as icon might be tricky
    expect(screen.getByText('5')).toBeDefined();
    
    const likeButtons = screen.getAllByRole('button');
    const likeBtn = likeButtons[2]; // comments, then like
    
    fireEvent.click(likeBtn);
    expect(screen.getByText('6')).toBeDefined();
    
    fireEvent.click(likeBtn);
    expect(screen.getByText('5')).toBeDefined();
  });
});
