export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "This is the content of my first blog post.",
  },
  {
    id: 2,
    slug: "react-context-guide",
    title: "React Context Guide",
    content: "Learn how Context API works in React.",
  },
];