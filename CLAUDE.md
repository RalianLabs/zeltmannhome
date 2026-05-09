# CLAUDE.md - ZeltmannHome Nerja (Next.js)

## Proyecto

Frontend premium para 2 propiedades de alquiler vacacional en Nerja (España): **Casa Florence** y **Casa Isolde**. Reserva directa via Smoobu sin comisiones de Airbnb.

**URL live**: https://zeltmannhome-nerja.vercel.app
**GitHub**: https://github.com/RalianLabs/zeltmannhome (auto-deploy en push a main)
**Vercel scope**: ralianlabs-projects

> **Nota**: este es el proyecto activo. La carpeta `/root/zeltmannhome-nerja/` es el prototipo HTML antiguo (deprecated, contiene notas Obsidian).

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind v3**
- **Leaflet** para mapa
- **Vercel AI SDK v6** + `@ai-sdk/anthropic` (Claude Haiku via `/api/chat`)
- `.npmrc` con `legacy-peer-deps=true` para fix build Vercel (AI SDK v6 + React 19)

## Páginas

- `/` (home)
- `/florence`, `/isolde` (propiedades)
- `/nerja` (contenido enriquecido sobre la zona)
- `/guia` (guía huésped, 6 secciones acordeón)
- `/legal/terminos` (LAU + Decreto 28/2016)
- `/legal/privacidad` (RGPD + LOPDGDD)
- `/reserva-confirmada` (post-booking Smoobu, noindex)
- `/api/chat` (chatbot AI)

## Datos clave

| Campo | Florence | Isolde |
|-------|----------|--------|
| Smoobu ID | 2897896 | 2897901 |
| Capacity | - | 4 |
| Bedrooms | - | 2 |
| Beds | - | 3 |
| Bathrooms | - | 1 |
| Host | - | Mike |

Smoobu Account: 1387461. Usar **BookingToolIframe.js widget**, no iframe estático.

## Componentes destacados

- **PhotoGallery**: 6 fotos por propiedad + Lightbox + badge "Ver X fotos"
- **ReviewCarousel**: scroll-snap CSS, autoplay 5s, badges plataforma
- **Chatbot AI**: Claude Haiku, system prompt rico. `ANTHROPIC_API_KEY` en Vercel

## AI SDK v6 quirks (importantes)

- Usar `maxOutputTokens` (no `maxTokens`)
- `UIMessage` solo tiene `parts` (no `content`)
- `useChat` retorna `sendMessage`/`status`
- Necesita `DefaultChatTransport`

## Convenciones

- **No em dashes** en textos visibles. Adrian dice que "gritan AI". Usar guion normal o coma
- **Plan Mode** para cambios estructurales antes de implementar
- **Tracking**: todos los WhatsApp llevan `[web]`
- Idioma del sitio: **español**
- Idioma de chat con Adrian: **español**

## Fotos

Originales en Google Drive cuenta zeltmann (12 apartamentos: 6 Florence + 6 Isolde + 8 Nerja). OAuth tokens fuera del repo.

## Pendientes

- Reemplazar reseñas placeholder con reales de Airbnb/Booking
- Configurar gap 1 día en Smoobu, añadir bookingUrl
- Configurar Smoobu dashboard (CSS custom, URLs legales, política cancelación, URL éxito)
- Open Graph image + dominio propio
