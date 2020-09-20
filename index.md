---
layout: default
---

# Hello dudu

<ul>
{%- for teaser in collections.teasers -%}
  <li>
    {{ teaser.data.label }}
    {{ teaser.templateContent }}
  </li>
{%- endfor -%}
</ul>
