import axios from "axios";

export async function getStaticProps() {
  const { data } = await axios.get("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });

  return {
    props: {
      repos: data,
    },
  };
}

export default function Repos({ repos }: any) {
  return (
    <div>
      <h1>My Repositories</h1>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
