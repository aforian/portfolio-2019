import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Vec2 from "src/helpers/Vec2.js"
import "./index.sass"

class Enemy {
  constructor(args) {
    let defaults = {
      timer: null,
      p: new Vec2(0, 0),
      v: new Vec2(0, 0),
      r: 0,
      rMax: 40,
      color: "#ffffff",
      alpha: 1,
      outOfBound: false,
      getHit: false,
    }
    Object.assign(defaults, args)
    Object.assign(this, defaults)
  }
  draw() {
    let fillStyle = hexToRgb(this.color);
    let i = 0;

    ctx.save()
      ctx.fillStyle = `rgba(${fillStyle.r},${fillStyle.g},${fillStyle.b},${this.alpha})`;
      ctx.translate(this.p.x, this.p.y)
      // ctx.translate(-this.r/2, -this.r/2)
      ctx.beginPath()
      // ctx.circle({x:0,y:0},this.r)
      ctx.rect(0,0,this.rMax, this.rMax)
      ctx.fill()
    ctx.restore()
  }
  update() {
    if (this.alpha == 0 && this.timer == null) {

      this.timer = window.setTimeout(() => {
        this.rMax = 40
        this.r = 0
        this.color = '#ffffff'
        this.alpha = 1
        this.getHit = false

        clearTimeout(this.timer)
      }, 5000)
    }
    if (!this.getHit){
      // if (this.r >= this.rMax) {
        this.p = this.p.add(this.v)
        this.r < this.rMax ? this.r += 2 : this.r = this.rMax;
      // }
    } else {
      this.color = '#ff2244'
      this.alpha > 0 ? this.alpha -= 0.1 : this.alpha = 0;
      this.rMax < 70 ? this.rMax += 1 : this.rMax = 70;
    }


    if (this.p.x < 0){
      // console.log("hit left")
      this.v.x = Math.abs(this.v.x)
    }
    if (this.p.x + this.r > ww) {
      // console.log("hit right")
      this.v.x = -Math.abs(this.v.x)
    }
    if (this.p.y < 0){
      // console.log("hit left")
      this.v.y = Math.abs(this.v.y)
    }
    if (this.p.y + this.r > wh) {
      // console.log("hit right")
      this.v.y = -Math.abs(this.v.y)
    }
    // return -1;
  }
  // checkHit(mouse, index, hited = -1) {
  //   if (hited >= 0) return hited;
  //   //    if (mouse.x >= this.p.x -this.r && mouse.x <= this.p.x+this.r && mouse.y >= this.p.y-this.r && mouse.y <= this.p.y+this.r ) {
  //   //      if (!this.getHit) {
  //   //        this.getHit = true;
  //   //        game.score += 10;

  //   //        return index;
  //   //      }
  //   //    }
  //   if (mouse.x >= this.p.x && mouse.x <= this.p.x+this.r && mouse.y >= this.p.y && mouse.y <= this.p.y+this.r ) {
  //     if (!this.getHit) {
  //       this.getHit = true;
  //       game.score += 10;

  //       return index;
  //     }
  //   }
  //   return hited;
  // }
}

var updateFPS = 30;
var time = 0;
var bgColor = "black";
var enemies = [];

var canvas;
var ctx;
var ww;
var wh;

// const HomeHero = () => {

//   return (
//     <canvas id="hero-canvas"/>
//   )
// }

function initCanvas() {
  ww = canvas.width = window.innerWidth
  wh = canvas.height = window.innerHeight
}
function updateCanvas() {
  time++;

  enemies.forEach((enemy,eid) => {
    enemy.update(eid);
  });
}

function drawCanvas() {
  ctx.fillStyle = bgColor
  ctx.fillRect(0,0,ww,wh)

  enemies.forEach(enemy => enemy.draw())
  requestAnimationFrame(drawCanvas)
}

class HomeHero extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    canvas = document.getElementById("hero-canvas")
    ctx = canvas.getContext("2d")

    // init()
    initCanvas()

    for(let i=0; i<5; i++) {
      enemies.push(new Enemy({
        p: new Vec2(ranNum(ww-40,40),ranNum(wh-40,40)),
        v: new Vec2(ranNum(3,-3),ranNum(3,-3)),
      }))
    }

    requestAnimationFrame(drawCanvas)
    setInterval(updateCanvas, 1000/updateFPS)
  }

  render() {
    return (
      <canvas
        id="hero-canvas"
      />
    )
  }
}



// HomeHero.propTypes = {
//   siteTitle: PropTypes.string,
// }

// HomeHero.defaultProps = {
//   siteTitle: ``,
// }

function ranNum (max = 100, min = 0) {
  return Math.round(Math.random()*(max-min)) + min;
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export default HomeHero