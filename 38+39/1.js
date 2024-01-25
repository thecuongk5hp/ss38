  let currentStep = 1;

  function goToStep(step) {
    currentStep = step;
    showStep();
    updateButtons();
  }
  function showStep() {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.classList.remove('active'));
    steps[currentStep - 1].classList.add('active');
  }
  function prevStep() {
    if (currentStep > 1) {
      currentStep--;
      showStep();
    }
    updateButtons();
  }
  function nextStep() {
    if (currentStep < 4) {
      currentStep++;
      showStep();
    }
    updateButtons();
  }
  function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === 4;
  }
  showStep();
  updateButtons();
