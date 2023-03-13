<template>
  <div>
    <h1>Blog Page</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "Post 1", body: "This is the body of post 1" },
        { id: 2, title: "Post 2", body: "This is the body of post 2" },
        { id: 3, title: "Post 3", body: "This is the body of post 3" }
      ]
    };
  }
};
</script>
