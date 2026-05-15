# 🎬 MoviePop (AppMovie-V2)

![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Una aplicación web Full Stack diseñada para descubrir series y programas de televisión, explorar por categorías y guardar tus favoritos. Construida con las últimas tecnologías del ecosistema de React para garantizar una experiencia de usuario rápida, responsiva y moderna.

🚀 **[Ver Demo en Vivo](https://app-movie-v2.vercel.app)**

---

## ✨ Características Principales

*   **Autenticación Segura:** Inicio de sesión optimizado mediante Google OAuth utilizando NextAuth.js.
*   **Catálogo Extenso:** Integración en tiempo real con la API pública de TVMaze.
*   **Exploración por Géneros:** Grilla de navegación con 30 categorías distintas (desde Acción hasta Reality Shows).
*   **Gestión de Favoritos:** Base de datos propia en MongoDB Atlas para guardar y administrar los programas favoritos de cada usuario de forma persistente.
*   **Experiencia de Usuario (UX):** Implementación de Skeletons de carga interactivos para transiciones fluidas entre pantallas.
*   **Diseño Responsivo:** Interfaz adaptada a dispositivos móviles, tablets y monitores de alta resolución utilizando Tailwind CSS (`grid-cols`).

---

## 🛠️ Tecnologías Utilizadas

*   **Frontend:** Next.js (App Router), React, Tailwind CSS, React Icons.
*   **Backend:** Next.js (Server Actions / API Routes), NextAuth.
*   **Base de Datos:** MongoDB Atlas.
*   **Despliegue:** Vercel.

---

## ⚙️ Instalación y Configuración Local

Si querés clonar este proyecto y correrlo en tu máquina local, seguí estos pasos:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/TU_USUARIO/AppMovie-V2.git](https://github.com/TU_USUARIO/AppMovie-V2.git)
cd movie-pop-next
```
### 2. Instalar las dependencias
```bash
npm install
```
### 3. Configurar las Variables de Entorno
```.env
# URL de conexión a tu cluster de MongoDB Atlas
DATABASE_URL="mongodb+srv://<usuario>:<password>@cluster.mongodb.net/midatabase"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="un_secreto_generado_aleatoriamente"

# Credenciales de Google Cloud Console (OAuth 2.0)
GOOGLE_CLIENT_ID="tu_google_client_id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="tu_google_client_secret"
```
### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
```
Abrí http://localhost:3000 en tu navegador para ver la aplicación.

📁 Estructura del Proyecto
/src/app: Rutas principales de la aplicación (Home, Búsqueda, Categorías).

/src/components: Componentes reutilizables de la interfaz de usuario (Tarjetas, Skeletons, Navbar).

/src/api: Endpoints de backend y configuración de autenticación.

👨‍💻 Autor
Rodrigo Mendoza

Desarrollador Full Stack | Ingeniero de Procesos
