import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import {
  fetchPosts,
  fetchPostById,
  createPost,
  updatePost,
  deletePost,
  clearError,
  clearCurrentPost,
  setPagination,
} from "@/store/slices/postsSlice";

export const usePosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, currentPost, isLoading, error, pagination } = useSelector(
    (state: RootState) => state.posts
  );

  const loadPosts = (params: { page?: number; limit?: number } = {}) => {
    dispatch(fetchPosts(params));
  };

  const loadPost = (postId: string) => {
    dispatch(fetchPostById(postId));
  };

  const addPost = async (postData: any) => {
    const result = await dispatch(createPost(postData));
    return result;
  };

  const editPost = async (postId: string, data: any) => {
    const result = await dispatch(updatePost({ postId, data }));
    return result;
  };

  const removePost = async (postId: string) => {
    const result = await dispatch(deletePost(postId));
    return result;
  };

  const clearPostError = () => {
    dispatch(clearError());
  };

  const clearPost = () => {
    dispatch(clearCurrentPost());
  };

  const updatePagination = (paginationData: any) => {
    dispatch(setPagination(paginationData));
  };

  return {
    posts,
    currentPost,
    isLoading,
    error,
    pagination,
    loadPosts,
    loadPost,
    addPost,
    editPost,
    removePost,
    clearPostError,
    clearPost,
    updatePagination,
  };
};
