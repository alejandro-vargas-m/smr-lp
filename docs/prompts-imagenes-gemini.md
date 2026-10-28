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
Photorealistic documentary photograph, full-frame DSLR, natural daylight, sharp focus, realistic textures, credible perspective and real-world scale. Setting: Monterrey, Nuevo León, Mexico — dry, sunny climate, rugged Sierra Madre mountains visible in the distance when outdoors. Color mood: warm and industrial, with natural orange accents (safety vests, equipment) that harmonize with an orange #F26522 and charcoal gray brand palette. No text, no letters, no logos, no brand names, no watermarks. No heavy filters, no HDR look, no illustration or 3D render style.
```

---

## Hero — `hero.jpg` · 16:9 (1920×1080) · En obra

```
Wide establishing shot of an active residential construction site in the south of Monterrey, Mexico, late afternoon golden light. A two-story concrete block house under construction with exposed rebar columns, stacks of gray concrete blocks on pallets, a pile of sand and gravel, and a white flatbed truck parked at the curb. A couple of workers in orange safety vests and hard hats in the mid-ground, seen from a distance (no close-up faces). The Sierra Madre mountains rise in the background. Composition leaves calm, slightly darker space in the center for overlaid headline text. 16:9.
[bloque de estilo]
```

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
Stack of 50 kg gray paper cement bags on a wooden pallet in a construction materials warehouse, plain unbranded bags with no printing, a light dusting of cement powder. Three-quarter view showing volume and the paper texture. Warm daylight from the side. Square 1:1.
[bloque de estilo]
```

## Arena y grava — `arena.jpg` · 1:1 · Materiales en bruto

```
Two large piles of construction aggregates side by side in an outdoor materials yard: fine beige sand and gray crushed gravel, with a yellow front loader bucket partially visible at the edge of the frame. Strong sunlight showing grain texture. Mountains in the hazy background. Square 1:1.
[bloque de estilo]
```

## Impermeabilizantes — `imper.jpg` · 1:1 · En obra

```
A worker in an orange safety vest, seen from behind, applying red terracotta elastomeric acrylic waterproofing coating with a long-handled roller on a flat concrete rooftop of a house in Monterrey, Mexico. A 19-liter white plastic bucket with no label next to him. Half of the roof already coated red, half still gray concrete, clearly showing progress. Blue sky and mountains in the background. Square 1:1.
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
