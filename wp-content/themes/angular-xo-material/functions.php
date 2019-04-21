<?php

$xo_material_path = dirname(__FILE__);

require_once $xo_material_path . '/inc/theme.inc.php';
require_once $xo_material_path . '/inc/blog.inc.php';

require_once $xo_material_path . '/inc/options/theme.inc.php';
require_once $xo_material_path . '/inc/options/footer.inc.php';
require_once $xo_material_path . '/inc/options/content.inc.php';
require_once $xo_material_path . '/inc/options/sitemap.inc.php';
require_once $xo_material_path . '/inc/options/header.inc.php';
require_once $xo_material_path . '/inc/options/scripts.inc.php';
require_once $xo_material_path . '/inc/controller.php';


add_action('init', function () {
    global $Xo;
    $Xo->Api->Router->AddController('myEndpoint', 'MySampleApiController');
}, 10, 0);