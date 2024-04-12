import { easterEgg } from '../easterEgg';

import { node } from '../../utility/node';

import './index.css';

export const Logo = function() {

  this.element = {
    logo: node('div|class:logo'),
    svg: '<svg class="logo-shapes" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M507.885 271.42C513.372 261.948 513.372 250.263 507.885 240.79L395.206 46.2423C389.742 36.8083 379.665 31 368.763 31H143.237C132.335 31 122.258 36.8083 116.794 46.2423L4.11494 240.79C-1.37164 250.263 -1.37165 261.948 4.11494 271.42L116.794 465.968C122.258 475.402 132.335 481.21 143.237 481.21H368.763C379.665 481.21 389.742 475.402 395.206 465.968L507.885 271.42Z" class="logo-hexagon" />' +
      '<path d="M374 224H138C132.477 224 128 228.477 128 234V278C128 283.523 132.477 288 138 288H374C379.523 288 384 283.523 384 278V234C384 228.477 379.523 224 374 224Z" class="logo-cross-x"/>' +
      '<path d="M278 128H234C228.477 128 224 132.477 224 138V374C224 379.523 228.477 384 234 384H278C283.523 384 288 379.523 288 374V138C288 132.477 283.523 128 278 128Z" class="logo-cross-y"/>' +
      '</svg>'
  };

  this.assemble = () => {

    this.element.logo.innerHTML = this.element.svg;

  };

  this.bind = () => {

    this.element.logo.addEventListener('dblclick', () => { easterEgg.toaster.bind.add(); });

  };

  this.logo = () => {
    return this.element.logo;
  };

  this.assemble();

  this.bind();

};
