type Props = {
  promise: Promise<Posts[]>;
};

export default async function UserPost({ promise }: Props) {
  const posts = await promise;

  return posts.map((post) => (
    <article key={post.id}>
      <h2 className="text-orange-200">{post.title}</h2>
      <p className="text-emerald-300">{post.body}</p>
      <br />
    </article>
  ));
}
