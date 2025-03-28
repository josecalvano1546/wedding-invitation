# Invitación de Boda Digital - Graciela & Carlos

Una elegante invitación de boda digital desarrollada con Next.js y TypeScript, que incluye RSVP, cuenta regresiva y detalles del evento.

## 🚀 Características

- Diseño moderno y responsivo
- Cuenta regresiva hasta el día de la boda
- Formulario RSVP con validación y formateo automático de teléfono argentino
- Sección de detalles de la ceremonia
- Código de vestimenta
- Sección de regalos
- Animaciones suaves al scroll
- Envío de confirmaciones por email usando Resend

## 🛠️ Tecnologías

- Next.js 15.1.0
- TypeScript
- Tailwind CSS
- Resend (para emails)
- React Server Components
- Server Actions

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Instala las dependencias:
```bash
yarn install
```

3. Configura las variables de entorno:
Crea un archivo `.env` con:
```
RESEND_API_KEY=tu_api_key_de_resend
```

4. Inicia el servidor de desarrollo:
```bash
yarn dev
```

## 🌐 Estructura del Proyecto

```
/
├── app/
│   ├── api/           # API routes
│   ├── actions.ts     # Server actions
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Página principal
├── components/        # Componentes React
│   ├── ceremony.tsx
│   ├── countdown-timer.tsx
│   ├── download-card.tsx
│   ├── dresscode.tsx
│   ├── footer.tsx
│   ├── gifts.tsx
│   ├── hero.tsx
│   └── rsvp-form.tsx
└── public/           # Archivos estáticos
```

## 📱 Características del Formulario RSVP

- Validación de campos requeridos
- Formateo automático de números de teléfono argentinos (+54 XXX XXXXXXX)
- Mensajes personalizados según la confirmación de asistencia
- Envío de confirmaciones por email

## 📧 Configuración de Emails

El proyecto usa Resend para el envío de emails. Para configurarlo:

1. Regístrate en [Resend](https://resend.com)
2. Obtén tu API key
3. Configura el dominio para producción
4. Durante el desarrollo, usa el dominio de pruebas (onboarding@resend.dev)

## 🎨 Personalización

El diseño usa una paleta de colores elegante con dorado como acento principal. Los estilos están implementados con Tailwind CSS y pueden ser personalizados en:

- `tailwind.config.js` para la configuración global
- Clases específicas en cada componente

## 📅 Fecha y Hora

La boda está programada para:
- Fecha: 17 de Mayo de 2025
- Hora: 18:30 hs
- Lugar: Sede Club de Regatas Corrientes - Salón de usos múltiples/terraza

## 🤝 Contribución

Si encuentras algún bug o tienes sugerencias, por favor abre un issue o envía un pull request.

## 📄 Licencia

Este proyecto esta libre de derechos de autor.
