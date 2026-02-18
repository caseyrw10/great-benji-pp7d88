document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("waitlist-form");
  const message = document.getElementById("form-message");
  const button = form.querySelector("button");

  // Button Hover Animation
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.05) translateY(-2px)";
  });
  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1) translateY(0)";
  });

  // Form Submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;

    // Simulate an API call
    button.disabled = true;
    button.innerText = "Joining...";

    setTimeout(() => {
      form.classList.add("hidden");
      message.classList.remove("hidden");
      message.innerHTML = `<p style="color: #22d3ee; font-weight: bold;">Success! ${email} has been added to the waitlist.</p>`;
    }, 1500);
  });
});
