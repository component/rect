
/**
 * Expose `Rect`.
 */

module.exports = Rect;

/**
 * Initialize a new Rect.
 *
 * @param {Number} left
 * @param {Number} top
 * @param {Number} [width]
 * @param {Number} [height]
 * @api public
 */

function Rect(left, top, width, height) {
  this.moveTo(left, top);
  this.size(width, height);
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
  return this;
};

/**
 * Resize to w x h
 *
 * @param {Number} w
 * @param {Number} h
 * @api public
 */

Rect.prototype.size = function(width, height){
  this.width = width;
  this.height = height;

  this.right = this.left + this.width;
  this.bottom = this.top + this.height;

  return this;
};

/**
 * Move the second point to (left, top).
 *
 * @param {Number} left
 * @param {Number} top
 * @api public
 */

Rect.prototype.to = function(left, top){
  var t;

  if (left < this.ox) {
    t = this.ox;
    this.left = left;
    left = t;
  }

  if (top < this.oy) {
    t = this.oy;
    this.top = top;
    top = t;
  }

  this.size(left - this.left, top - this.top);

  return this;
};

/**
 * Returns true if two rects overlap.
 * 
 * @param {Object} a
 * @return {Boolean}
 * @api public
 */

Rect.prototype.intersects = function(a){
  return !(a.left > (this.right)
    || (a.right) < this.left
    || a.top > (this.bottom)
    || (a.bottom) < this.top); 
}