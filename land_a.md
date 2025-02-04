---
layout: unbranded
title: Landing page test A
---

<!-- [SPA CONTENT HERE] -->




<div class="govuk-width-container">

  <h1 class="govuk-heading-xl">Workshop prices</h1>



<table class="govuk-table">
  <caption class="govuk-table__caption  govuk-table__caption--m">Pricing Table</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Service</th>
      <th scope="col" class="govuk-table__header">Features</th>
      <th scope="col" class="govuk-table__header">Price</th>
      <th scope="col" class="govuk-table__header">Booking Link</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><strong>Basic Coaching</strong></td>
      <td class="govuk-table__cell">
        1-Hour Coaching, Personalized Guidance, Actionable Insights
      </td>
      <td class="govuk-table__cell">$79.99 per session</td>
      <td class="govuk-table__cell">
        <a class="govuk-link" href="#">Start Coaching</a>
      </td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><strong>Premium Workshop</strong></td>
      <td class="govuk-table__cell">
        Interactive Sessions, Comprehensive Strategy Development, Networking Opportunities
      </td>
      <td class="govuk-table__cell">$249.99 per workshop</td>
      <td class="govuk-table__cell">
        <a class="govuk-link" href="#">Book Workshop</a>
      </td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><strong>Exclusive Retreat</strong></td>
      <td class="govuk-table__cell">
        Design Thinking Activities, Co-Designed Plans, Island Exploration
      </td>
      <td class="govuk-table__cell">$1999.99 per retreat</td>
      <td class="govuk-table__cell">
        <a class="govuk-link" href="#">Join Retreat</a>
      </td>
    </tr>
  </tbody>
</table>





<!-- Details -->
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>



  <a href="#" class="govuk-back-link">Back</a>
  
  <h3 class="govuk-heading-m">Image path test</h3>
  <img src="../assets/govuk/assets/images/govuk-icon-180.png">

  <h3 class="govuk-heading-m">Font path test</h3>

<p class="govuk-body">Download font files using two path types:</p>
<ul class="govuk-list govuk-list--bullet">
  <li><a href="../assets/govuk/assets/fonts/bold-affa96571d-v2.woff">download woff2 (../)</a></li>
  <li><a href="{{ site.baseurl }}/assets/govuk/assets/fonts/bold-affa96571d-v2.woff">download woff2 (baseurl)</a></li>
</ul>


<!-- radio group -->

<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Where do you live?
      </h1>
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
          England
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
          Scotland
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
          Wales
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
          Northern Ireland
        </label>
      </div>
    </div>
  </fieldset>
</div>



<!-- service navigation -->

<section aria-label="Service information" class="govuk-service-navigation"
  data-module="govuk-service-navigation">
  <div class="govuk-width-container">
    <div class="govuk-service-navigation__container">
      <span class="govuk-service-navigation__service-name">
        <a href="#" class="govuk-service-navigation__link">
          Service name
        </a>
      </span>
      <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
        <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden>
          Menu
        </button>
        <ul class="govuk-service-navigation__list" id="navigation">
          <li class="govuk-service-navigation__item">
            <a class="govuk-service-navigation__link" href="#">
              Navigation item 1
            </a>
          </li>
          <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
            <a class="govuk-service-navigation__link" href="#" aria-current="true">
              <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>
            </a>
          </li>
          <li class="govuk-service-navigation__item">
            <a class="govuk-service-navigation__link" href="#">
              Navigation item 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>



  <main class="govuk-main-wrapper">

<a href="#" class="govuk-button">Start now</a>


    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h1 class="govuk-heading-xl">Two-thirds column</h1>
        <p class="govuk-body-l">This is a paragraph inside a two-thirds wide column. This &gt;p&lt; is set to "-p" style class suffix. Inside a two-thirds wide column. </p>
      </div>
      <div class="govuk-grid-column-one-third">
        <h2 class="govuk-heading-m">One-third column</h2>
        <p class="govuk-body">This is a paragraph inside a one-third wide column</p>
      </div>
    </div>

<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <button type="button" class="govuk-accordion__section-button" id="accordion-default-heading-1">
          Section 1
        </button>
      </h2>
    </div>
    <div id="accordion-default-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">Content for section 1.</p>
    </div>
  </div>
</div>

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-full">
        <h2 class="govuk-heading-s">Full width column</h2>
        <p class="govuk-body">Not -l copy here: This is a paragraph inside a full-width column</p>
      </div>
      <div class="govuk-grid-column-one-third">
        <h2 class="govuk-heading-m">1/3</h2>
      </div>
    </div>

  </main>

</div>

