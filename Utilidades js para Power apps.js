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
    const atributo = formContext.getAttribute(nombreCampo);
    if (atributo) atributo.setValue(valor);
}

// 🔄 Limpiar valor de un campo
function limpiarCampo(executionContext, nombreCampo) {
    establecerValor(executionContext, nombreCampo, null);
}

// 📬 Mostrar notificación en formulario
function mostrarNotificacion(executionContext, mensaje, tipo = "INFO", id = "notif1", duracion = 5000) {
    const formContext = getFormContext(executionContext);
    formContext.ui.setFormNotification(mensaje, tipo, id);
    setTimeout(() => formContext.ui.clearFormNotification(id), duracion);
}

// 🚨 Validar campo antes de guardar
function validarAntesDeGuardar(executionContext) {
    const formContext = getFormContext(executionContext);
    const evento = executionContext.getEventArgs();

    const valor = formContext.getAttribute("new_email")?.getValue();
    if (!valor || !valor.includes("@")) {
        formContext.ui.setFormNotification("⚠️ El correo no es válido", "ERROR", "email_error");
        evento.preventDefault(); // Cancela el guardado
    } else {
        formContext.ui.clearFormNotification("email_error");
    }
}

// 🧮 Calcular total automático
function calcularTotal(executionContext) {
    const formContext = getFormContext(executionContext);
    const cantidad = formContext.getAttribute("new_cantidad")?.getValue() || 0;
    const precio = formContext.getAttribute("new_precio")?.getValue() || 0;

    const total = cantidad * precio;
    formContext.getAttribute("new_total")?.setValue(total);
}

// 🕓 Ejecutar solo al crear registro
function soloAlCrear(executionContext) {
    const formContext = getFormContext(executionContext);
    if (formContext.ui.getFormType() === 1) { // 1 = Create
        mostrarNotificacion(executionContext, "🆕 Estás creando un nuevo registro", "INFO", "newrecord");
    }
}

// 🔗 Obtener ID del registro
function obtenerIdRegistro(executionContext) {
    const formContext = getFormContext(executionContext);
    const id = formContext.data.entity.getId();
    console.log("🧾 ID del registro actual:", id);
    return id;
}

// 🌐 Llamar a API Web (ejemplo con entidad 'account')
function llamarApiWeb() {
    Xrm.WebApi.retrieveRecord("account", "00000000-0000-0000-0000-000000000000", "?$select=name,revenue").then(
        function success(result) {
            console.log("✅ Nombre:", result.name);
            console.log("💰 Ingresos:", result.revenue);
        },
        function (error) {
            console.error("❌ Error en API:", error.message);
        }
    );
}

// 👁️ Ocultar o mostrar sección dentro de una pestaña
function ocultarVisualizarSeccion(executionContext, nombrePestaña, nombreSeccion, visible) {
    const formContext = getFormContext(executionContext);
    const tab = formContext.ui.tabs.get(nombrePestaña);
    if (tab) {
        const seccion = tab.sections.get(nombreSeccion);
        if (seccion) seccion.setVisible(visible);
    }
}


