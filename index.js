
/**
 * Expose `Rect`.
 */

module.exports = Rect;

/**
 * Initialize a new Rect with the given
 * position and dimensions, or an object
 * with the same properties.
 *
 * @param {Number|Object} [left]
 * @param {Number} [top]
 * @param {Number} [width]
 * @param {Number} [height]
 * @api public
 */

function Rect(left, top, width, height) {
  if ('object' == typeof left) {
    var o = left;
    left = o.left;
    top = o.top;
    width = o.width;
    height = o.height;
  }

  this.moveTo(left || 0, top || 0);
  this.size(width || 0, height || 0);
}

/**
 * Move to (left, top).
 *
 * @param {Number} left
 * @param {Number} top
 * @api public
 */

Rect.prototype.moveTo = function(left, top){
  this.left = this.ox = left;
  this.top = this.oy = top;
  this.to(left + this.width, top + this.height);
  return this;
};

/**
 * Resize to `width` / `height`
 *
 * @param {Number} width
 * @param {Number} height
 * @api public
 */

Rect.prototype.size = function(width, height){
  this.width = width;
  this.height = height;
  this.right = this.left + width;
  this.bottom = this.top + height;
  return this;
};

/**
 * Move the second point to (right, bottom).
 *
 * @param {Number} right
 * @param {Number} bottom
 * @api public
 */

Rect.prototype.to = function(right, bottom){
  if (right < this.ox) {
    this.left = right;
    right = this.ox;
  }

  if (bottom < this.oy) {
    this.top = bottom;
    bottom = this.oy;
  }

  this.size(right - this.left, bottom - this.top);

  return this;
};

/**
 * Returns true if two rects overlap.
 *
 * @param {Object} other
 * @return {Boolean}
 * @api public
 */

Rect.prototype.intersects = function(other){
  return !(other.left > this.right
    || other.right < this.left
    || other.top > this.bottom
    || other.bottom < this.top);
}
