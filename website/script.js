// script.js

// Emergency Button Alert
document.getElementById("emergency-btn").addEventListener("click", function() {
    alert("Sending Emergency SMS and notifying authorities...");
    // Code to send SMS can be integrated with an SMS API
  });
  
  // Dark Mode Toggle
  document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
  });
  
  // Popup Form for Incident Reporting
  const reportBtn = document.getElementById("report-btn");
  const popupForm = document.getElementById("popup-form");
  const closePopup = document.getElementById("close-popup");
  
  reportBtn.addEventListener("click", () => {
    popupForm.style.display = "flex";
  });
  
  closePopup.addEventListener("click", () => {
    popupForm.style.display = "none";
  });
  
  // Form Submission (Mock)
  document.getElementById("incident-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Incident report submitted successfully!");
    popupForm.style.display = "none";
  });