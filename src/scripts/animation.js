let isTransitioning = false;

export async function toggleDialog(dialogID, event) {
  if (isTransitioning) return;
  isTransitioning = true;

  const transitionName = `vt-${crypto.randomUUID()}`;
  const dialog = dialogID
    ? document.getElementById(dialogID)
    : document.querySelector("dialog[open]");
  const originElement =
    event?.currentTarget || document.querySelector("[origin-element]");

  if (!dialog || !originElement) {
    isTransitioning = false;
    return;
  }

  const isClosing = !dialogID;

  // Ocultar temporalmente uno de los dos antes del cambio
  if (isClosing) {
    originElement.style.visibility = "hidden";
  } else {
    dialog.style.visibility = "hidden";
  }

  // Establecer nombre único en ambos
  dialog.style.viewTransitionName = transitionName;
  originElement.style.viewTransitionName = transitionName;

  const transition = document.startViewTransition(() => {
    // Mostrar y ocultar en el DOM durante el cambio
    if (isClosing) {
      dialog.close();
      originElement.removeAttribute("origin-element");
    } else {
      originElement.setAttribute("origin-element", "");
      dialog.showModal();
    }
  });

  await transition.finished;

  // Limpiar todo
  dialog.style.viewTransitionName = "";
  originElement.style.viewTransitionName = "";
  dialog.style.visibility = "";
  originElement.style.visibility = "";

  isTransitioning = false;
}

window.toggleDialog = toggleDialog;
