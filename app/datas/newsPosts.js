import posts from "./postsData";
import posts2 from "./postsData2";
import posts3 from "./postsData3";
import posts4 from "./postsData4";

const newsPosts = [
  ...posts4.map((post) => ({ ...post, uid: `2025-${post.id}` })),
  ...posts3.map((post) => ({ ...post, uid: `2023c-${post.id}` })),
  ...posts2.map((post) => ({ ...post, uid: `2023b-${post.id}` })),
  ...posts.map((post) => ({ ...post, uid: `2023a-${post.id}` })),
].sort((a, b) => b.datetime.localeCompare(a.datetime));

export default newsPosts;
