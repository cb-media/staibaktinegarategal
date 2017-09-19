---
layout: category
slug: campusholic
name: Campusholic
class-name: mr-1 badge badge-success
permalink: /categories/:title/
---

{% for post in site.posts %}

{% if post.categories contains page.slug %}

<div class="card bg-light mb-3">
<div class="card-body">
	<h5 class="mb-0 card-title">
		<i class="fa fa-link"></i> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	</h5>
	<small class="card-subtitle mb-2 text-muted">
		<i class="fa fa-calendar"></i> {{ post.date | date: "%B %-d, %Y" }}
		<i class="fa fa-thumb-tack"></i> {{ post.categories }}
	</small>
	<p class="card-text">{{ post.meta }}</p>
</div>
</div>

{% endif %}

{% endfor %}