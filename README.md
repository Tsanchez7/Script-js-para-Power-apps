/********************************************************************
 * 📘 UTILIDADES JS PARA POWER APPS / DYNAMICS 365
 * Autor: Tamara
 * Descripción: Funciones reutilizables para personalizar formularios
 * Última actualización: 2025-11-05
 ********************************************************************/

// ✅ Obtener contexto del formulario
function getFormContext(executionContext) {
    return executionContext.getFormContext();
}

// 🎛️ Mostrar u ocultar campo
function mostrarOcultarCampo(executionContext, nombreCampo, visible) {
    const formContext = getFormContext(executionContext);
    const campo = formContext.getControl(nombreCampo);
    if (campo) campo.setVisible(visible);
}

// 🔒 Bloquear o desbloquear campo
function bloquearCampo(executionContext, nombreCampo, bloquear = true) {
    const formContext = getFormContext(executionContext);
    const control = formContext.getControl(nombreCampo);
    if (control) control.setDisabled(bloquear);
}

// 🧠 Mostrar u ocultar pestaña
function mostrarOcultarPestaña(executionContext, nombrePestaña, visible) {
    const formContext = getFormContext(executionContext);
    const tab = formContext.ui.tabs.get(nombrePestaña);
    if (tab) tab.setVisible(visible);
}

// 📄 Establecer valor de un campo
function establecerValor(executionContext, nombreCampo, valor) {
    const formContext = getFormContext(executionContext);
    const atributo = formCon
