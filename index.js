
/**
 * Expose `Rect`.
 */

module.exports = Rect;

/**
 * Initialize a new Rect.
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} [w]
 * @param {Number} [h]
 * @api public
 */

function Rect(x, y, w, h) {
  this.moveTo(x, y);
  this.size(w, h);
}

/**
 * Move to (x, y).
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

Rect.prototype.moveTo = function(x, y){
  this.x = x;
  this.y = y;
};

/**
 * Resize to w x h
 *
 * @param {Number} w
 * @param {Number} h
 * @api public
 */

Rect.prototype.size = function(w, h){
  this.w = w;
  this.h = h;
};

/**
 * Move the second point to (x, y).
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

Rect.prototype.to = function(x, y){
  var t;

  if (x < this.x) {
    t = this.x;
    this.x = x;
    x = t;
  }

  if (y < this.y) {
    t = this.y;
    this.y = y;
    y = t;
  }

  this.w = x - this.x;
  this.h = y - this.y;
};

/**
 * Return bounds.
 *
 * @return {Object}
 * @api public
 */

Rect.prototype.bounds = function(){
  return {
    x: this.x,
    y: this.y,
    x2: this.x + this.w,
    y2: this.y + this.h,
    w: this.w,
    h: this.h
  };
};
