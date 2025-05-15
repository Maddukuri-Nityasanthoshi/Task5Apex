document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    {
      title: "The Rise of Modern Web Design",
      content: "Discover how design trends are shaping websites of the future.",
      image: "post1.jpg",
      link: "post1.html"
    },
    {
      title: "10 Productivity Tools for Developers",
      content: "Boost your workflow with these essential dev tools.",
      image: "post2.jpg",
      link: "post2.html"
    },
    {
      title: "Understanding JavaScript Closures",
      content: "A deep dive into closures and how they work in JS.",
      image: "post3.jpg",
      link: "post3.html"
    }
  ];

  const container = document.getElementById("posts");

  posts.forEach(post => {
    const postEl = document.createElement("a");
    postEl.href = post.link;
    postEl.className = "blog-post";
    postEl.innerHTML = `
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <div class="blog-post-content">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      </div>
    `;
    container.appendChild(postEl);
  });

  // Contact form popup logic
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }
});
