document.addEventListener("DOMContentLoaded", function () {
  const user = "karinthepond"; 
  const domain = "gmail.com";
  const email = user + "@" + domain;
  const link = document.getElementById("email-link");
  if (link) {
    link.href = "mailto:" + email;
  }
});