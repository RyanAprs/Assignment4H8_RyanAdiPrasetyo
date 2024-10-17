const nama = document.getElementById("nama");
const role = document.getElementById("role");
const availability = document.getElementById("availability");
const usia = document.getElementById("usia");
const lokasi = document.getElementById("lokasi");
const experience = document.getElementById("experience");
const email = document.getElementById("email");
const btnSumbit = document.getElementById("btn-submit");
const btnEdit = document.getElementById("btn-edit");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btn-close");

const handleReadProfile = () => {
  const displayNama = document.getElementById("display-nama");
  const displayRole = document.getElementById("display-role");
  const displayAvailability = document.getElementById("display-availability");
  const displayUsia = document.getElementById("display-usia");
  const displayLokasi = document.getElementById("display-lokasi");
  const displayExperience = document.getElementById("display-experience");
  const displayEmail = document.getElementById("display-email");
  try {
    const dataLocalStorage = localStorage.getItem("data");
    const data = JSON.parse(dataLocalStorage);
    console.log(data);

    displayNama.innerText = data.namaInput;
    displayRole.innerText = data.roleInput;
    displayAvailability.innerText = data.availabilityInput;
    displayUsia.innerText = data.usiaInput;
    displayLokasi.innerText = data.lokasiInput;
    displayExperience.innerText = data.experienceInput;
    displayEmail.innerText = data.emailInput;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", (_) => {
  handleReadProfile();
});

btnSumbit.addEventListener("click", () => {
  let namaInput = nama.value;
  let roleInput = role.value;
  let availabilityInput = availability.value;
  let usiaInput = usia.value;
  let lokasiInput = lokasi.value;
  let experienceInput = experience.value;
  let emailInput = email.value;

  if (
    !namaInput ||
    !roleInput ||
    !availabilityInput ||
    !usiaInput ||
    !lokasiInput ||
    !experienceInput ||
    !emailInput
  ) {
    alert("Inputan tidak boleh kosong");
    return;
  }

  let data = {
    namaInput,
    roleInput,
    availabilityInput,
    usiaInput,
    lokasiInput,
    experienceInput,
    emailInput,
  };

  window.location.reload();

  localStorage.setItem("data", JSON.stringify(data));
});

const handleEdit = () => {
  try {
    const dataLocalStorage = localStorage.getItem("data");
    const data = JSON.parse(dataLocalStorage);
    console.log(data);

    nama.value = data.namaInput;
    role.value = data.roleInput;
    availability.value = data.availabilityInput;
    usia.value = data.usiaInput;
    lokasi.value = data.lokasiInput;
    experience.value = data.experienceInput;
    email.value = data.emailInput;
  } catch (error) {
    console.log(error);
  }
};

btnEdit.addEventListener("click", () => {
  modal.classList.remove("hidden");
  handleEdit();
});

btnClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});
