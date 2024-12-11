const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
};

const modelViewerVariants = document.querySelector("model-viewer");
const select = document.querySelector("#variant");

modelViewerVariants.addEventListener("load", () => {
  const names = modelViewerVariants.availableVariants;
  for (const name of names) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  }
});

select.addEventListener("input", (event) => {
  modelViewerVariants.variantName =
    event.target.value === "default" ? null : event.target.value;
});

document.querySelector("model-viewer").addEventListener("progress", onProgress);
