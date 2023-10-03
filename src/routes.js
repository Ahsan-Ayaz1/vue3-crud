import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";
import CreateBlog from "./views/CreateBlog.vue";
import PostDetail from "./views/PostDetail.vue";
import UpdatePost from "./views/UpdatePost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },

  {
    path: "/blog-create",
    name: "CreateBlog",
    component: CreateBlog,
  },
  {
    path: "/blog-detail/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },

  {
    path: "/blog-update/:id",
    name: "UpdatePost",
    component: UpdatePost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
