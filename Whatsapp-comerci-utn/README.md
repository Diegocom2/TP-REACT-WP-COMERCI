Una de las principales complicaciones técnicas que tuve fue hacer que Vite funcione correctamente en mi sistema operativo (macOS Mojave). Al principio me daba errores porque tenía instalada una versión de Node que no es compatible con Mojave (la 22), así que tuve que configurar manualmente el uso de la versión 18, que es la que funciona bien en este sistema. Para eso usé el siguiente comando:
nvm alias default 18.20.8
Una vez solucionado eso, pude correr el proyecto sin problemas usando npm run dev.

Después me enfoqué en la estructura general del proyecto y en lograr un diseño que fuera responsive. Una de las cosas que me costó bastante fue lograr que en pantallas chicas (modo mobile) se oculte la ventana del chat y se vea únicamente la lista de contactos, y que al tocar un contacto se abra el chat correspondiente. Eso lo resolví con una combinación de media queries en el CSS y renderizado condicional dentro de los componentes.

La estructura de componentes que armé incluye ContactList, ChatWindow, MessageBubble y MessageInput, y organicé los estilos en una carpeta aparte para mantener todo más limpio. Usé también un archivo mockData.js con datos simulados tanto de los contactos como de los mensajes, para poder trabajar la lógica sin necesidad de una base de datos real.

Otro desafío fue el manejo del estado: cuando cambiaba de un contacto a otro, los mensajes que había escrito se perdían. Para resolver eso, implementé una lógica que guarda los mensajes por ID usando un objeto central (chatsById), y que recupera el historial correspondiente cada vez que se entra a un nuevo chat.

Durante el desarrollo también tuve que ajustar la navegación con rutas con parámetros (/chat/:id), configurar bien el layout general, trabajar con eventos, controlar formularios y asegurarme de que todo se vea bien 
