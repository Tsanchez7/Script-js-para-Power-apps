function OcultarVisualizarFolder(executionContex) {
    const formContext = executionContex.getFormContext();
 
    const seccion = formContext.ui.tabs.get("DETAILS_TAB").section.get("PERSONAL INFORMATION");
 
    seccion.setVisible(false);
   
    const tipoDocumento = formContext.getAttribute("crazy_tipodocumento").getText();
 
    console.log("Tipo de Docmento: " = tipoDocumento);
}