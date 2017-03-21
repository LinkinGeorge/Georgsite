<?php
/**
 * Template file for Locations
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
Timber::render( 'locations.twig', $context );