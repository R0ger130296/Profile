# Conversión de PDFs a Imágenes

## Opción 1: Usar el script automatizado (requiere dependencias)

El script `convert-pdfs-to-images.js` está listo para convertir automáticamente los PDFs a imágenes JPG.

**Nota:** En Windows, `canvas` requiere dependencias nativas. Si el script no funciona, usa una de las opciones siguientes.

## Opción 2: Conversión manual online (Recomendado)

1. Visita [ILovePDF](https://www.ilovepdf.com/pdf-to-jpg) o [SmallPDF](https://smallpdf.com/pdf-to-jpg)
2. Sube los PDFs de la carpeta `static/certificados/`
3. Convierte cada PDF a JPG
4. Guarda las imágenes con el mismo nombre pero extensión `.jpg` en `static/certificados/`

## Opción 3: Usar herramientas de línea de comandos

### Con ImageMagick (si está instalado):
```bash
for file in static/certificados/*.pdf; do
  convert "$file[0]" "${file%.pdf}.jpg"
done
```

### Con poppler-utils (si está instalado):
```bash
for file in static/certificados/*.pdf; do
  pdftoppm -jpeg -singlefile "$file" "${file%.pdf}"
done
```

## Archivos a convertir

Los siguientes PDFs necesitan ser convertidos a JPG:
- UC-db9f4742-c670-4e62-8135-94901041190f.pdf
- UC-d346666b-bb9e-40bb-bf34-df671435afe3.pdf
- UC-ade4fb41-0853-4b4d-834d-a5f13a0a86b9.pdf
- UC-c1db414c-1499-45b7-9926-b901a190c9b6.pdf
- UC-cd24730c-e4b8-41cf-9536-eaee93a85591.pdf
- UC-6407e9f7-06f3-40c2-bbde-1f6e97762f21.pdf
- UC-7bdc1624-c759-49de-a831-6776dd9b5c05.pdf
- UC-1d588080-981a-4bd6-9491-850f1b85b37c.pdf
- UC-279f4df5-faa2-405a-819a-64632d64a40e.pdf
- UC-402c1606-b34c-4e46-9624-a431e038bd00.pdf
- 1744649962733.pdf

**Importante:** Mantén el mismo nombre del archivo, solo cambia la extensión de `.pdf` a `.jpg`

