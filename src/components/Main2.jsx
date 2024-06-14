import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

export default function Main2() {

  return (
    <>
<input id="scene-1" type="radio" name="scene" value="1" checked />
<input id="scene-2" type="radio" name="scene" value="2" />
<input id="scene-3" type="radio" name="scene" value="3" />
<input id="scene-4" type="radio" name="scene" value="4" />

<main class="site">
	<div class="landscape">
		<div class="landscape-text">
			DREAM
		</div>
	</div>
	<div class="left-side">
		<div class="page-numbers" data-total='04'>
			<div class="page-number page-number--tens">0</div>
			<div class="page-number page-number--ones">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
			</div>
		</div>
	</div>
	<div class="hero">
		<div class="layer" data-scene="1">
			<h1 class="heading">
				Introduction
			</h1>
		</div>
		<div class="layer" data-scene="2">
			<h1 class="heading">
				Navigation
			</h1>
		</div>
		<div class="layer" data-scene="3">
			<h1 class="heading">
				Masked Text
			</h1>
		</div>
		<div class="layer" data-scene="4">
			<h1 class="heading">
				Modern CSS Techniques
			</h1>
		</div>
		<nav class="slide-nav">
			<div class="button-container">
				<button class="nav-button">Previous</button>
				<button class="nav-button">Next</button>
			</div>
			<div class="nav-button-container">
				<label class="nav-button" for="scene-1" data-scene="1">1</label>
				<label class="nav-button" for="scene-2" data-scene="2">2</label>
				<label class="nav-button" for="scene-3" data-scene="3">3</label>
				<label class="nav-button" for="scene-4" data-scene="4">4</label>
			</div>
		</nav>
	</div>
	<div class="right-content">
		<div class="layer" data-scene="1">
			<h2 class="heading">A digest of the tutorial</h2>
			<p class="paragraph">
				This is my take on <a href="https://www.youtube.com/watch?v=kd_zuEYCDck">@keyframers' Ocean Overlays</a> codepen exercise. It uses CSS only to acheive masked text, navigation, and animation. It also uses CSS variables in a neat way to acheive some cool effects. Click next to get a summary of how to replicate these techniques.
			</p>
		</div>
		<div class="layer" data-scene="2">
			<h2 class="heading">Hidden radio buttons</h2>
			<p class="paragraph">
				There are 4 hidden radio inputs on this page that keep track of the current "scene". The radios inputs are associated with labels that are also hidden. These labels overlay the "next" and "previous" buttons and are toggled based on the CSS selectors.
			</p>
		</div>
		<div class="layer" data-scene="3">
			<h2 class="heading">background-clip,<br />background-position, and transform</h2>
			<p class="paragraph">
				The masked text can be acheived by setting a background image to the tag containing the text, then by setting background-clip: text. This attribute requires -webkit- prefixing, so don't forget to add that attribute. We use transform to move the text across the page, and background-position to slightly shift the background against the transform direction to get a parallax effect.
			</p>
		</div>
		<div class="layer" data-scene="4">
			<h2 class="heading">CSS Grid and CSS Variables</h2>
			<p class="paragraph">
				The primary layout technique used here is CSS grid. The parent defines grid-template-* and the children uses grid-row and grid-column to determine where the element will span on the grid.
			</p>
			<p class="paragraph">
				The other neat technique used here is CSS variables, which helps to store the current scene value within the CSS stylesheet. Based on the CSS selectors, the --scene variable will be set and used to calculate the percent offset used in the animation. 
			</p>
		</div>
	</div>
</main>

    </>
  )
}
