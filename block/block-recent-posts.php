<?php
/**
 * Block Name: Recent Posts
 *
 * This is the template that displays the recent posts block.
 */
?>

<?php if( get_field('recent_posts_category') ) { ?>

<div class="news-card">

  <?php if( get_field('recent_posts_image') ) { ?>

    <div class="news-card__image" style="background-image: url(<?php $image = get_field('recent_posts_image'); echo($image['sizes']['large']); ?>) !important;"></div>

  <?php } ?>

  <div class="news-card__main">

    <?php if( get_field('recent_posts_headline') ) { ?>

      <h2 class="news-card__headline"><?php the_field('recent_posts_headline');?></h2>

    <?php } ?>

    <?php $cat = get_field('recent_posts_category'); ?>

    <?php $loop = new WP_Query( array( 'post_type' => 'post', 'cat' => $cat, 'posts_per_page' => 3 ) ); ?>

    <ul class="news-card-list">
        
      <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

        <li class="news-card-list__item">

          <h4><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h4>

          <?php the_excerpt(); ?>

        </li>

      <?php endwhile; ?>

    </ul>

    <?php wp_reset_query(); ?>

  </div>

</div>

<?php } else { ?>

  <p>Select a post category...</p>

<?php } ?>