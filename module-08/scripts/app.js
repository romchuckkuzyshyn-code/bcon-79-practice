// TODO: Get posts info
// console.log(posts);

const lists = document.querySelector(".cards");
const searchForm = document.querySelector(".search-form");

lists.insertAdjacentHTML("beforeend", createMarkup(posts));

function createMarkup(posts) {
  return posts
    .map(
      ({
        id,
        title,
        body,
        reactions: { likes, dislikes },
        views,
        userId,
        coverImage,
        tags,
      }) => {
        return `<li class="card border-dark mb-3" data-userid="${userId}" post-id="${id}">
            <img
              class=""
              src="${coverImage}"
              alt="${title}"
              width="100%"
              height="335"
            />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <hr />
              <div class="card-meta mb-3">
                <div class="card-meta-tags">
                  <p class="m-0 text-black-50 fw-lighter">
                    <i class="bi bi-tag"></i>
                  </p>
                  <ul class="tags-list">
                    ${createPostTags(tags)}
                  </ul>
                </div>

                <ul class="card-meta-likes">
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-up"></i> <small>${likes}</small>
                  </li>
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-down"></i> <small>${dislikes}</small>
                  </li>
                </ul>

                <p class="card-meta-views m-0 text-black-50 fw-lighter">
                  <i class="bi bi-eye"></i> <small>${views}</small>
                </p>
              </div>
              <hr />
              <p class="card-text">
                ${body}
              </p>
            </div>
          </li>`;
      }
    )
    .join("");
}

function createPostTags(tags) {
  return tags
    .map(tag => {
      return `<li class="border border-dark rounded-1 text-center text-black-50 fw-lighter">
        <small>${tag}</small>
        </li>`;
    })
    .join("");
}

searchForm.addEventListener("submit", searchPost);

function searchPost(event) {
  event.preventDefault();
  const form = event.target.elements.searchQuery.value;
  const newForm = form.toLowerCase().trim();
  const newArr = posts.filter(
    post =>
      post.title.toLowerCase().includes(newForm) ||
      post.body.toLowerCase().includes(newForm)
  );
  lists.innerHTML = "";
  const newMarkup = createMarkup(newArr);
  lists.insertAdjacentHTML("beforeend", newMarkup);
  searchForm.reset();
}
