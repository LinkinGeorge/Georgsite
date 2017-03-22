<?php
/**
 * Template file for a Gallery
 * Template Name: Gallery
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
Timber::render( 'gallery.twig', $context );