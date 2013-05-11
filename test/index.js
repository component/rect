
var Rect = require('..');
var assert = require('better-assert');

describe('Rect()', function(){
  it('should default to 0', function(){
    var r = new Rect;
    assert(r.left == 0);
    assert(r.top == 0);
    assert(r.width == 0);
    assert(r.height == 0);
    assert(r.right == 0);
    assert(r.bottom == 0);
  })
})

describe('Rect(left, top)', function(){
  it('should default width and height to 0', function(){
    var r = new Rect(5, 10);
    assert(r.left == 5);
    assert(r.top == 10);
    assert(r.width == 0);
    assert(r.height == 0);
    assert(r.right == 5);
    assert(r.bottom == 10);
  })
})

describe('Rect(left, top, width, height)', function(){
  it('should populate the properties', function(){
    var r = new Rect(5, 10, 20, 40);
    assert(r.left == 5);
    assert(r.top == 10);
    assert(r.width == 20);
    assert(r.height == 40);
    assert(r.right == 25);
    assert(r.bottom == 50);
  })
})

describe('Rect#to(right, bottom)', function(){
  it('should adjust size', function(){
    var r = new Rect(10, 10);
    r.to(30, 50);
    assert(r.width == 20);
    assert(r.height == 40);
    assert(r.right == 30);
    assert(r.bottom == 50);
  })

  it('should normalize', function(){
    var r = new Rect(50, 100);
    r.to(20, 60);

    assert(r.left == 20);
    assert(r.width == 30);
    assert(r.top == 60);
    assert(r.height == 40);
    assert(r.right == 50);
    assert(r.bottom == 100);
  })
})

describe('Rect#moveTo(left, top)', function(){
  it('should normalize', function(){
    var r = new Rect(5, 10, 20, 40);
    r.moveTo(0, 0);
    assert(r.left == 0);
    assert(r.top == 0);
    assert(r.width == 20);
    assert(r.height == 40);
    assert(r.right == 20);
    assert(r.bottom == 40);
  })
})

describe('Rect#intersects()', function(){
  it('should intersect', function(){
    var r1 = new Rect(5, 10, 20, 40);
    var r2 = new Rect(10, 20, 20, 40);
    assert(r1.intersects(r2) === true);
    assert(r2.intersects(r1) === true);
  });

  it('should not intersect', function(){
    var r1 = new Rect(5, 10, 20, 40);
    var r2 = new Rect(55, 40, 30, 30);
    assert(r1.intersects(r2) === false);
    assert(r2.intersects(r1) === false);
  });
})
