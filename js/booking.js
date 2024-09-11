const requestPlan = async (planType) => {
  const { value: formValues } = await Swal.fire({
    title: planType === "Normal" ? "Create Task" : `Request ${planType} plan`,
    html:
      '<p class="alert-text"><i class="fa-solid fa-envelope"></i> Please enter your email, Where you would like to receive a response to your request.</p>' +
      '<input class="alert-email-input" id="swal-input1" class="swal2-input" placeholder="Enter your email address">' +
      '<p class="alert-text"><i class="fa-regular fa-file-lines"></i> Please describe the project for which you wish to book the service.</p>' +
      '<textarea class="alert-description-input" id="swal-input2" class="swal2-textarea" placeholder="Enter your message"></textarea>',
    focusConfirm: false,
    preConfirm: () => {
      const email = document.getElementById("swal-input1").value;
      const message = document.getElementById("swal-input2").value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        Swal.showValidationMessage("Please enter a valid email address");
        return false;
      }

      if (!message) {
        Swal.showValidationMessage("Please enter a message");
        return false;
      }

      return [email, message];
    },
  });

  if (formValues) {
    const [email, message] = formValues;
    Swal.fire({
      icon: "success",
      title: "Your request has been sent!",
      html: `<p>You will receive an answer within 24 hours.</p>`,
    });
  }
};

if (document.getElementById("book-business-plan")) {
  document
    .getElementById("book-business-plan")
    .addEventListener("click", () => requestPlan("Business"));
}

if (document.getElementById("book-classic-plan")) {
  document
    .getElementById("book-classic-plan")
    .addEventListener("click", () => requestPlan("Classic"));
}

if (document.getElementById("book-ecommerce-plan")) {
  document
    .getElementById("book-ecommerce-plan")
    .addEventListener("click", () => requestPlan("E-commerce"));
}

if (document.getElementById("create-task")) {
  document
    .getElementById("create-task")
    .addEventListener("click", () => requestPlan("Normal"));
}
