
var Rect = require('..');
var assert = require('better-assert');

describe('Rect(x, y, w, h)', function(){
  it('should populate the properties', function(){
    var r = new Rect(5, 10, 20, 40);
    assert(r.x == 5)
    assert(r.y == 10)
    assert(r.w == 20)
    assert(r.h == 40)
  })
})

describe('Rect#to(x, y)', function(){
  it('should adjust size', function(){
    var r = new Rect(10, 10);
    r.to(30, 50);
    assert(r.w == 20);
    assert(r.h == 40);
  })

  it('should normalize', function(){
    var r = new Rect(50, 100);
    r.to(20, 60);

    var b = r.bounds();
    assert(b.x == 20);
    assert(b.x2 == 50);
    assert(b.y == 60);
    assert(b.y2 == 100);
  })
})

describe('Rect#bounds()', function(){
  it('should return .x2 .y2', function(){
    var r = new Rect(5, 10, 20, 40);
    var d = r.bounds();
    assert(d.x2 == 25)
    assert(d.y2 == 50)
  })

  it('should return the others', function(){
    var r = new Rect(5, 10, 20, 40);
    var d = r.bounds();
    assert(d.x == 5)
    assert(d.y == 10)
    assert(d.w == 20)
    assert(d.h == 40)
  })
})
