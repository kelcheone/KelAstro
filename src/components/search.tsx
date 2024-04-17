import Fuse from "fuse.js";
import { useState } from "preact/hooks";

const options = {
  keys: ["title", "description", "slug", "tags"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ blogs }: { blogs: any[] }) {
  // User's input
  const [query, setQuery] = useState("");

  const fuse = new Fuse(blogs, options);
  const posts = fuse.search(query).map((result: any) => result.item);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <div class="py-4 flex flex-col gap-5">
      <div>
        <input
          id="searchBox"
          aria-label="search box"
          autofocus
          type="text"
          onInput={handleChange}
          placeholder="Type here"
          class="input input-bordered input-info w-full max-w-lg block mx-auto"
        />
      </div>
      <div class="grid md:grid-cols-3 grid-cols-1  gap-8">
        {posts.map((post: any) => (
          <div className="card w-96 bg-base-100 shadow-[0px_0px_5px_3px_rgb(0_0_0_/_50%)] dark:shadow-[0px_0px_5px_3px_rgb(255_255_255_/_50%)]">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              {post.description && <p>{post.description}</p>}
              <div className="card-actions justify-end">
                {post.tags.map((tag: string, index: number) => (
                  <div key={index} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="card-actions justify-end">
                <a
                  href={`/blog/${post.url}/`}
                  className="btn btn-primary animation-none"
                  style={{ animation: "none" }}
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
