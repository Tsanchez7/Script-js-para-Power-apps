/********************************************************************
 * 📘 UTILIDADES JS PARA POWER APPS / DYNAMICS 365
 * Autor: Tamara
 * Descripción: Funciones reutilizables para personalizar formularios
 * Última actualización: 2025-11-05
 ********************************************************************/
Cómo usarlo en Power Apps (Dataverse)

En tu app model-driven, ve a Configuración → Personalizaciones → Personalizar el sistema.

Crea una Biblioteca Web y sube este archivo .js.

Abre la entidad o formulario donde quieras aplicarlo.

En la pestaña Eventos del formulario, agrega:

Biblioteca: tu nuevo archivo .js

Función: por ejemplo PowerAppsUtils.onFormLoad (en evento OnLoad)

O PowerAppsUtils.onFieldChange (en evento OnChange de un campo, como telephone1)

Marca “Pasar contexto de ejecución como primer parámetro”.
