import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService, Post } from './post.service';

@Component({
  selector: 'app-services-di',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services-di.html',
  styleUrl: './services-di.css'
})
export class ServicesDiComponent implements OnInit {
  private postService = inject(PostService);

  posts: Post[] = [];
  isLoading = false;
  isSubmitting = false;
  deletingId: number | null = null;
  errorMessage = '';
  successMessage = '';

  newTitle = '';
  newBody = '';

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.postService.getPosts(5).subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = `Failed to load posts: ${err.message}`;
        this.isLoading = false;
      }
    });
  }

  onSubmitPost(): void {
    if (!this.newTitle.trim() || !this.newBody.trim()) {
      this.errorMessage = 'Please provide both a title and body.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.postService.createPost({
      title: this.newTitle.trim(),
      body: this.newBody.trim()
    }).subscribe({
      next: (createdPost) => {
        this.posts = [createdPost, ...this.posts];
        this.successMessage = `Post #${createdPost.id} created successfully!`;
        this.newTitle = '';
        this.newBody = '';
        this.isSubmitting = false;
      },
      error: (err) => {
        this.errorMessage = `Failed to create post: ${err.message}`;
        this.isSubmitting = false;
      }
    });
  }

  deletePost(id: number): void {
    this.deletingId = id;
    this.errorMessage = '';
    this.successMessage = '';

    this.postService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter((p) => p.id !== id);
        this.successMessage = `Post #${id} deleted successfully!`;
        this.deletingId = null;
      },
      error: (err) => {
        this.errorMessage = `Failed to delete post: ${err.message}`;
        this.deletingId = null;
      }
    });
  }

  clearList(): void {
    this.posts = [];
    this.successMessage = 'Post list cleared.';
  }
}
