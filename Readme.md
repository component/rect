
# rect

  Rect prototype (abstract, use it for dom, canvas, etc)

## Installation

    $ component install component/rect

## API

  - [Rect()](#rect)
  - [Rect.moveTo()](#rectmovetoleftnumbertopnumber)
  - [Rect.size()](#rectsizewidthnumberheightnumber)
  - [Rect.to()](#recttorightnumberbottomnumber)
  - [Rect.intersects()](#rectintersectsotherobject)

### Rect()

  Initialize a new Rect with the given
  position and dimensions, or an object
  with the same properties.

### Rect.moveTo(left:Number, top:Number)

  Move to (left, top).

### Rect.size(width:Number, height:Number)

  Resize to `width` / `height`

### Rect.to(right:Number, bottom:Number)

  Move the second point to (right, bottom).

### Rect.intersects(other:Object)

  Returns true if two rects overlap.

## License

  MIT
