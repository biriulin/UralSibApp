import {PostPage} from '@/components/Post';

export async function generateStaticParams() {
  return [];
}

export default function Home() {
    return <PostPage />;
}
