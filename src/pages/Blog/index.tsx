import { BlogPageComponent } from './BlogPageComponent';
import { BlogPostPageComponent } from './BlogPostPageComponent';

const BlogPageDisplay = BlogPageComponent;
const BlogPostPageDisplay = BlogPostPageComponent;

const BlogPage = () => <BlogPostPageDisplay />;

export default BlogPage;
