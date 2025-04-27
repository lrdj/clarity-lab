---
layout: unbranded
title: "Reflections on creating and using the method"
hero-image: "/assets/i/concept-wall.jpg"
hero-h1a: "We're thinking about stuff:-)"
hero-h1b: ""
hero-mark: "#85BFE6"
hero-accent: "#FFCC4E"
---

{%- include blog-css.html -%}
  
<p class="govuk-body-l">
	{% include TCLM-mark.html %} uses design thinking techniques from the world of commercial agencies and consultancies to help customers explore their problem spaces, uncover their opportunities, and deliver the change they need. <strong>We're freeing those tools from the confines of specialist consultancies so everyone can benefit.</strong></p>

<ul class="govuk-list cl-check">
	<li><strong>What it is:</strong> A blend of design thinking and real-world facilitation.</li>
	<li><strong>Who it’s for:</strong> Individuals and teams feeling stuck or uncertain.</li>
	<li><strong>Why it works:</strong> Rapid problem definition + future vision = actionable next steps.</li>
</ul>

<h2 class="govuk-heading-l">Why are we doing this?</h2>

<p class="govuk-body">
This is a work in progress, here are some of the ideas and issues we're working through as we continue to refine the method and invite individuals to join us.</p>

<div class="posts">
  {% for post in site.posts %}
    <div class="post-card">
      <h3 class="govuk-heading-m"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="govuk-body"><small>{{ post.date | date: "%-d %B %Y" }}</small></p>
      <p class="govuk-body">{{ post.content | strip_html | truncatewords: 25 }}</p>
    </div>
  {% endfor %}
</div>

