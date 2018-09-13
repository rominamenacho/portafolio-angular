
/*
con ctrl + shif+p se habre la paleta de comandos,
donde se hara click en json to ts para q cree la interfaz a partir
del json que tenemos en el clipboard
El signo de interrogacion significa q ese campo es opcional,
si no lo ponemos, va a arrojar errores al levantar ya q al pprio
no tiene ningun valor */
export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tublr?: string;
  equipo_trabajo?: any[];
}

