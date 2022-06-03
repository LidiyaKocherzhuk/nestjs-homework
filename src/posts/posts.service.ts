import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  private posts = [];

  getAll(): CreatePostDto[] {
    return this.posts;
  }

  getById(id: string): CreatePostDto {
    return this.posts.find((post) => post.id === id);
  }

  create(post: CreatePostDto): string {
    this.posts.push({ ...post, id: new Date().valueOf() });
    return 'post created';
  }

  update(
    id: string,
    postForUpdate: Partial<CreatePostDto>,
  ): CreatePostDto | string {
    let postFromArr = this.posts.find((post) => post.id === id);
    if (postFromArr) {
      postFromArr = { ...postFromArr, postForUpdate };
      return postFromArr;
    }
    return 'post not exist';
  }

  delete(id: string): string {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex >= 0) {
      this.posts.splice(postIndex, 1);
      return 'post deleted';
    }
    return 'post not exist';
  }
}
