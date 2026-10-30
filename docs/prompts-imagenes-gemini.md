# Prompts para generar imágenes en Gemini

Imágenes provisionales para la LP de SMR mientras no haya fotografía real.
Criterios tomados de `Guia_Linea_Grafica_SMR_Actualizada.pdf` (secciones 03 y 05):

- Tres tipos de imagen: **materiales en bruto**, **maquinaria en acción** y **en obra / on site**.
- Mostrar textura, volumen y apariencia real; nítidas, perspectiva creíble y escala realista.
- Sin exceso de efectos ni fondos que distraigan. Las fotos son protagonistas.

## Cómo usarlos

1. Copia el **bloque de estilo** al final de cada prompt (ya va incluido abajo).
2. Pide la proporción indicada. Si Gemini no la respeta, genera más grande y recorta.
3. Descarta resultados con texto, logotipos, letras deformes, manos raras o varillas/blocks con geometría imposible.
4. Guarda con el nombre indicado en `public/img/temp/` (reemplaza la foto actual) y avísame para optimizarlas.

### Bloque de estilo (común a todos)

```
Photorealistic documentary photograph, full-frame DSLR, sharp focus, realistic textures, credible perspective and real-world scale. Setting: Monterrey, Nuevo León, Mexico — sunny climate, rugged Sierra Madre mountains visible in the distance when outdoors, with crisp rocky peaks and green vegetation on the lower slopes. Color: vibrant but natural — deep blue sky with a few white clouds, clean clear air (no haze, no dust in the air, no fog, no washed-out or faded tones), rich contrast, warm sunlight. Natural orange accents (safety vests, equipment) that harmonize with an orange #F26522 and charcoal gray brand palette. No text, no letters, no logos, no brand names, no signs, no billboards, no watermarks. No HDR look, no illustration or 3D render style.
```

> **Color (actualizado 2026-10-29):** el cliente pidió fotos con más color; las primeras salieron opacas (cielo pálido, sierra con bruma, todo beige). Si un resultado sale lavado, pídele a Gemini en la misma conversación: *"Make the colors more vivid: deeper blue sky, clearer mountains with no haze, more contrast."*

---

## Hero — `hero.jpg` · 16:9 (1920×1080) · En obra

Basado en la imagen de referencia que compartió el cliente: residencia contemporánea de la zona (concreto aparente, grandes ventanales, volúmenes en voladizo), no casa de block básica. Sin el espectacular con render y logo que trae la referencia.

```
Wide establishing shot at golden hour of a modern contemporary two-story residence under construction in the south of Monterrey, Mexico, in the style of upscale homes in the area: exposed board-formed concrete structure, flat roofs, cantilevered volumes, large openings for floor-to-ceiling windows. The concrete frame is finished but walls are still open, with formwork, steel shoring props and scaffolding; rebar sticking up from the rooftop columns. Workers in orange safety vests and white hard hats on the roof and the ground, seen from a distance (no close-up faces). In the foreground: an orange mini excavator, stacks of cement bags on pallets, bundles of rebar and a pile of gravel. Behind, the dramatic Sierra Madre mountains with natural gray limestone rocky peaks, only softly touched by warm late-afternoon light, and green forested lower slopes, under a blue sky with soft golden clouds. Composition: building centered in the lower half, calm sky and mountains in the upper half for overlaid headline text. 16:9.
[bloque de estilo]
```

También genera la versión vertical para móvil (`hero-sm.jpg`, 4:5) con el mismo prompt cambiando `16:9` por `4:5, vertical`, o recorta la horizontal dejando la casa al centro.

## Tablaroca — `tablaroca.jpg` · 16:9 · Materiales en bruto

```
Stack of white gypsum drywall boards (tablaroca) on a wooden pallet inside a construction materials warehouse, next to bundles of galvanized steel studs and tracks, a few buckets of joint compound and rolls of paper tape. Three-quarter view showing the board thickness, edges and volume. Soft daylight from a large open warehouse door. 16:9.
[bloque de estilo]
```

## Block — `block.jpg` · 16:9 · Materiales en bruto

```
Close, low-angle view of neatly stacked gray hollow concrete blocks (15 x 20 x 40 cm, two cells each) on wooden pallets in an outdoor materials yard, showing the rough concrete texture and the hollow cores. Rows of more pallets of block fading into the background, soft focus. Strong sunlight with defined shadows. 16:9.
[bloque de estilo]
```

## Varilla y acero — `varilla.jpg` · 1:1 · Materiales en bruto

```
Bundles of corrugated steel rebar (3/8 inch), tied with wire, stacked on wooden sleepers in an outdoor steel yard, shot from the end so the round cut ends and the ribbed texture are visible, with the long bars receding in perspective. Next to them, a coil of annealed tie wire. Natural sunlight, slight rust tones on the steel. Square 1:1.
[bloque de estilo]
```

## Cemento — `cemento.jpg` · 1:1 · Materiales en bruto

```
Stack of 50 kg cement bags on a wooden pallet in a construction materials warehouse, like real Mexican cement bags: multi-wall valve-type paper sacks in light gray-white paper (not brown kraft paper, not plastic), flat rectangular brick-like shape with squared folded ends and a visible valve corner, stacked in an interlocking cross pattern, slightly creased paper with a light dusting of gray cement powder. Plain unbranded bags with no printing. All bags in the scene, including the background stacks, are the same gray-white paper. Three-quarter view showing volume and the paper texture. Warm daylight from the side. Square 1:1.
[bloque de estilo]
```

## Arena y grava — `arena.jpg` · 1:1 · Materiales en bruto

```
Two large piles of construction aggregates side by side in an outdoor materials yard: fine beige sand and gray crushed gravel, with a yellow front loader bucket partially visible at the edge of the frame. Strong sunlight showing grain texture. Mountains in the hazy background. Square 1:1.
[bloque de estilo]
```

## Impermeabilizantes — `imper.jpg` · 1:1 · Materiales en bruto (producto)

```
Product-focused photo: several 19-liter white plastic buckets of roof waterproofing coating with plain unlabeled lids, stacked on a wooden pallet in a construction materials warehouse. One bucket in the foreground has its lid off, showing thick red terracotta elastomeric acrylic coating with a glossy, creamy texture. The buckets are the clear protagonist, sharp and centered; no people, no rooftop, no application in progress. Soft daylight from an open warehouse door, background softly out of focus with shelves of materials. Square 1:1.
[bloque de estilo]
```

## Camiones en reparto — `camion.jpg` · 4:3 · Maquinaria en acción

```
A white medium-duty flatbed stake truck with no logos, loaded with pallets of gray concrete blocks and bundles of rebar, driving on a suburban road in the south of Monterrey, Mexico, with the Sierra Madre mountains behind. Three-quarter front view, motion conveying delivery in progress. 4:3.
[bloque de estilo]
```

## Entrega en obra — `entrega.jpg` · 4:3 · Maquinaria en acción / en obra

```
A white flatbed truck with a knuckle-boom crane unloading a pallet of gray concrete blocks at a residential construction site in Monterrey, Mexico. The pallet is suspended in the air; a worker in an orange safety vest and hard hat guides it, seen from the side (no close-up face). Unfinished block walls and rebar columns in the background. 4:3.
[bloque de estilo]
```

## Almacén y patio — `almacen.jpg` · 4:3 · Materiales en bruto

```
Elevated wide view of an organized construction materials yard in Monterrey, Mexico: rows of palletized gray concrete blocks, racks of rebar, stacks of drywall under a metal-roof shed, piles of sand and gravel, and a forklift moving a pallet. The Cerro de la Silla mountain visible in the background. Clear sunny day. 4:3.
[bloque de estilo]
```
