document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("waitlist-form");
  const message = document.getElementById("form-message");
  const button = form.querySelector("button");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    button.disabled = true;
    button.innerText = "Joining...";

    setTimeout(() => {
      form.classList.add("hidden");
      message.classList.remove("hidden");
      message.innerHTML = `<p style="color: #22d3ee; margin-top: 2rem;">Success! You have been added to the waitlist.</p>`;
    }, 1200);
  });
});
