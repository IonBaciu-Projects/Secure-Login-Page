const passwordInput = document.getElementById("password");
const strengthMessage = document.getElementById("strengthMessage");
const togglePassword = document.getElementById("togglePassword");

function passwordStrength(password) {
  let strength = 0;
  let feedback = [];

  if (password.length >= 12) {
    strength += 2;
  } else if (password.length >= 8) {
    strength += 1;
  } else {
    feedback.push("Password should be at least 8 characters long.");
  }

  if (/[A-Z]/.test(password)) {
    strength += 1;
  } else {
    feedback.push("Add at least one uppercase letter.");
  }

  if (/[a-z]/.test(password)) {
    strength += 1;
  } else {
    feedback.push("Add at least one lowercase letter.");
  }

  if (/[0-9]/.test(password)) {
    strength += 1;
  } else {
    feedback.push("Add at least one number.");
  }

  if (/[@$!%*?&]/.test(password)) {
    strength += 2;
  } else {
    feedback.push("Add at least one special character (@, $, !, %, *, ?, &).");
  }

  let verdict;
  if (strength >= 7) {
    verdict = "Strong ✅";
  } else if (strength >= 4) {
    verdict = "Medium ⚠️";
  } else {
    verdict = "Weak ❌";
  }

  return { verdict, feedback };
}

passwordInput.addEventListener("input", () => {
  const result = passwordStrength(passwordInput.value);
  strengthMessage.innerHTML = `<strong>${result.verdict}</strong>`;

  if (result.feedback.length > 0) {
    strengthMessage.innerHTML += "<br><small>Suggestions:</small><ul>" +
      result.feedback.map(f => `<li>${f}</li>`).join("") +
      "</ul>";
  }
});

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "👁 Show";
  }
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login functionality not implemented (demo only).");
});