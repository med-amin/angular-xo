<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'angular-xo' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1:33066' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';+y)Mw9!k4ydN{b@D_V7L~V8DpvZV1yl|N1!5]&;=M0 rzR%}t&+&EQ])#5Ib v_' );
define( 'SECURE_AUTH_KEY',  'lh{:0oSm82KvFGVBqe~bZc}>UyGOISwI+x/(]q| ro(Z?(b 6pu0VY 4,uiH#!vj' );
define( 'LOGGED_IN_KEY',    'p*2r`>h*j/IYL/z|J.o9/oG#$N|_W&{%hfqpf}OC:W^]5l09Q]lZbC]b)+Ny>(^P' );
define( 'NONCE_KEY',        'Xq:2T[niqPp=h7hRanZB+#LSmwD~5~?}o:mdvAhhyf7ctwbg9M^%m]^vjg#+8e4%' );
define( 'AUTH_SALT',        'LIv*-[)Y-7j=?4z6`p%`+Z2{<RM|k#KH|j{B6|kw<f E}`FxR2YzoQ|7xq)JVaIp' );
define( 'SECURE_AUTH_SALT', ';Z>Zs#%9xq6mbocFNINv[kk8Cq#W0:(,l5&n$+^-QPHf9jPV#lhrj<mZl9Y,]3W,' );
define( 'LOGGED_IN_SALT',   'Zf x:y>?[mQ[&U;CJ~pfE^b9>z$Dtpn}q8C87sD^ds=h[{.[h O(~ e.uK:9=Kww' );
define( 'NONCE_SALT',       'j/W-=}9W0P2*9[n_f(fwyC5:9  sH,Y]`iw/RnsoqJ1*Xu;]6QQ+5xZ(mB@kS@_m' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
