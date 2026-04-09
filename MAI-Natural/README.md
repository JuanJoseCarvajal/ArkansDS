# MAI Natural (Repositorio independiente)

Este directorio contiene una copia completa del proyecto en Astro para que viva en su **propio repositorio** llamado `MAI-Natural`.

## Estructura
- `src/pages/` con rutas:
  - `/`
  - `/capilar`
  - `/facial`
  - `/corporal`
  - `/tienda`
  - `/agenda-tu-cita`
  - `/quienes-somos`

## Ejecutar localmente
```bash
npm install
npm run dev
```

## Publicarlo como repositorio separado
Desde la carpeta `MAI-Natural`:

```bash
git init
git add .
git commit -m "feat: inicializar sitio MAI Natural en Astro"
git branch -M main
git remote add origin <URL-DEL-REPO-MAI-NATURAL>
git push -u origin main
```

Si ya existía un remoto configurado, usa:
```bash
git remote remove origin
git remote add origin <URL-DEL-REPO-NUEVO>
git push -u origin <branch>
```
