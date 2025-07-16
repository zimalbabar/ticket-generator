
// document.addEventListener("DOMContentLoaded", function () {
//   const avatarInput = document.getElementById('avatar');
//   const avatarPreview = document.getElementById('avatarPreview');
//   const uploadIcon = document.getElementById('uploadIcon');
//   const avatarText = document.getElementById('avatar-p');
//   const uploadActions = document.getElementById('uploadActions');
//   const changeBtn = document.getElementById('changeImage');
//   const removeBtn = document.getElementById('removeImage');
//   const form = document.getElementById('ticketForm');

   

//   // When user selects a file
//   avatarInput.addEventListener('change', function () {
//     const file = avatarInput.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       avatarPreview.src = imageUrl;
//       avatarPreview.style.display = 'block';
//       uploadIcon.style.display = 'none';
//       avatarText.style.display = 'none';
//       uploadActions.style.display = 'flex'; // Show buttons
//     }
//   });

//   // Change image = open file dialog again
//   changeBtn.addEventListener('click', function () {
//     avatarInput.click();
//   });

//   // Remove image = reset everything
//   removeBtn.addEventListener('click', function () {
//     avatarInput.value = ''; // Clear file input
//     avatarPreview.src = '';
//     avatarPreview.style.display = 'none';
//     uploadIcon.style.display = 'block';
//     avatarText.textContent = 'Drag and drop or click to upload';
//     avatarText.style.display = 'block';
//     uploadActions.style.display = 'none'; // Hide buttons again
//   });

//   // Form submission
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const github = document.getElementById('github').value;
//     const file = avatarInput.files[0];
//     const avatarURL = file ? URL.createObjectURL(file) : '';


//     const ticketNumber = Math.floor(10000 + Math.random() * 90000);

//     const heading = document.getElementById('mainHeading');
//     heading.textContent = `🎉 Congrats, ${name}! Your ticket is ready`;

//     const subText = document.getElementById('subText');
//     subText.textContent = `Your Ticket has been emailed to ${email}!`;

//     console.log("ticket:", ticketNumber);

//     form.innerHTML = `
//       <div class="success-content">
//         <div class="ticket">
//           <div class="ticket-content">
//             <div class="ticket-header">
//               <img src="assets/images/logo-mark.svg" alt="Event Logo" class="ticket-logo">
//               <div>
//                 <h3>Coding Conf</h3>
//                 <p>Jan 31, 2025 / Austin, TX</p>
//               </div>
//             </div>

//             <div class="ticket-body">
//               ${avatarURL ? `<img src="${avatarURL}" alt="Avatar" class="ticket-avatar">` : ''}
//               <div>
//                 <h4>${name}</h4>
//                 <div class="github-info">
//                   <img src='assets/images/icon-github.svg' alt='Github Logo' class="github-icon" />
//                   <span>@${github}</span>
//                 </div>
//               </div>
//             </div>

//             <div class="ticket-number">
//               #${ticketNumber}
//             </div>
//           </div>
//         </div>

//         <button onclick="location.reload()">Register Another</button>
//       </div>
//     `;
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const avatarInput = document.getElementById('avatar');
  const avatarPreview = document.getElementById('avatarPreview');
  const uploadIcon = document.getElementById('uploadIcon');
  const avatarText = document.getElementById('avatar-p');
  const uploadActions = document.getElementById('uploadActions');
  const changeBtn = document.getElementById('changeImage');
  const removeBtn = document.getElementById('removeImage');
  const form = document.getElementById('ticketForm');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const githubInput = document.getElementById('github');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const githubError = document.getElementById('githubError');

  // Image Upload Preview
  avatarInput.addEventListener('change', function () {
    const file = avatarInput.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      avatarPreview.src = imageUrl;
      avatarPreview.style.display = 'block';
      uploadIcon.style.display = 'none';
      avatarText.style.display = 'none';
      uploadActions.style.display = 'flex';
    }
  });

  changeBtn.addEventListener('click', function () {
    avatarInput.click();
  });

  removeBtn.addEventListener('click', function () {
    avatarInput.value = '';
    avatarPreview.src = '';
    avatarPreview.style.display = 'none';
    uploadIcon.style.display = 'block';
    avatarText.textContent = 'Drag and drop or click to upload';
    avatarText.style.display = 'block';
    uploadActions.style.display = 'none';
  });

  // Form Submission with Validation
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default submission

    let isValid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const github = githubInput.value.trim();
    const file = avatarInput.files[0];
    const avatarURL = file ? URL.createObjectURL(file) : '';

    // Name validation

    if (!file) {
  avatarError.textContent = "Avatar is required";
  document.querySelector('.upload-box').classList.add('error');
  isValid = false;
} else {
  avatarError.textContent = "";
  document.querySelector('.upload-box').classList.remove('error');
} 
    if (!name) {
      nameError.textContent = 'ⓘ Name is required';
      nameError.style.display = 'block';
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }

    // Email validation
    if (!email) {
      emailError.textContent = 'ⓘ Email is required';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    if (!isValid) return;

    // Generate Ticket
    const ticketNumber = Math.floor(10000 + Math.random() * 90000);

    const heading = document.getElementById('mainHeading');
    heading.textContent = `🎉 Congrats, ${name}! Your ticket is ready`;

    const subText = document.getElementById('subText');
    subText.textContent = `Your Ticket has been emailed to ${email}!`;

        form.innerHTML = `
      <div class="success-content">

        <div class="ticket">
        <div class="ticket-content">
    <div class="ticket-content">
      <div class="ticket-header">
        <img src="assets/images/logo-mark.svg" alt="Event Logo" class="ticket-logo">
        <div>
          <h3>Coding Conf</h3>
          <p>Jan 31, 2025 / Austin, TX</p>
        </div>
      </div>

      <div class="ticket-body">
        <img src="${avatarURL}" alt="Avatar" class="ticket-avatar">
        <div>
         
          <h4>${name}</h4>
          <div class="github-info">
  <img src='assets/images/icon-github.svg' alt='Github Logo' class="github-icon" />
  <span>@${github}</span>
</div>
        </div>
       
      </div>
       <div class="ticket-number">
       
     #${ticketNumber}
</div>
    </div>
    </div>
  </div>

  <button onclick="location.reload()">Register Another</button>
</div>
    `;
  });
});
