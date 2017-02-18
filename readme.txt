=== Gallery Search Filter ===
Contributors: dkjensen
Tested up to: 4.7.2
Stable tag: 1.0.0
License: GPLv2 or later

Adds the ability for users to search native WordPress gallery images on the front end

== Description ==
Gallery Search Filter is a lightweight plugin that hooks into the `post_gallery` filter to add a search bar above your galleries, allowing users to filter the gallery images in real-time against a search query.

New parameters have been added to the `[gallery]` shortcode, making it simple to specify which galleries should have the searching capability, and which attachment data should be queried to filter the images.

**Parameters**

 - **search** - Set to `true` to enable the search bar. Defaults to `false`
 - **search_placeholder** - Define a placeholder that appears inside the search bar. Defaults to `''`
 - **search_fields** - Comma delimited list of attachment data to search. Possible values are `alt` and `caption`. Defaults to `alt`

**Example Usage**

    [gallery ids="5207,4855,5208,4876,4835,4829,4875,4881" link="file" columns="4"  search="true" search_placeholder="Flowers, Landscape, etc." search_fields="alt,caption"]

== Installation ==

1. Upload `gallery-search-filter` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= Can I modify the output of the search bar? =

Yes, you can use the `gallery_filters_search_html` filter to do so:

	apply_filters( 'gallery_filters_search_html', $searchbox, $atts, $instance, $post );

== Changelog ==

= 1.0.0 =
* Initial plugin release