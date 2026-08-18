---
layout: unbranded-landing
title: "Reflections on creating and using the method"
---

<main id="bl-main" class="bl-main">

<section class="bl-hero bl-hero--banner" style="background-image: url('/assets/i/concept-wall.jpg');">
  <div class="bl-hero__content">
    <h1 class="bl-hero__title">We're thinking about <em>stuff</em>.</h1>
  </div>
</section>

<section class="bl-section">
  <div class="bl-section__inner bl-prose">
    <p class="bl-lede">The Clarity Lab Method&reg; uses design thinking techniques from the world of commercial agencies and consultancies to help customers explore their problem spaces, uncover their opportunities, and deliver the change they need. <strong>We're freeing those tools from the confines of specialist consultancies so everyone can benefit.</strong></p>

    <ul class="bl-list">
      <li><strong>What it is.</strong> <span>A blend of design thinking and real-world facilitation.</span></li>
      <li><strong>Who it&rsquo;s for.</strong> <span>Individuals and teams feeling stuck or uncertain.</span></li>
      <li><strong>Why it works.</strong> <span>Rapid problem definition + future vision = actionable next steps.</span></li>
    </ul>
  </div>
</section>

<section class="bl-section bl-section--panel">
  <div class="bl-section__inner">
    <h2>Why are we <em>doing</em> this?</h2>
    <p class="bl-prose">This is a work in progress &mdash; here are some of the ideas and issues we're working through as we continue to refine the method and invite individuals to join us.</p>

    <div class="bl-entry-list">
      {% for post in site.posts %}
        <article class="bl-entry">
          <p class="bl-entry__date">{{ post.date | date: "%-d %B %Y" }}</p>
          <h3 class="bl-entry__title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
          <p class="bl-entry__excerpt">{{ post.content | strip_html | truncatewords: 30 }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

</main>
