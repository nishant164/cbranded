<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cbranded' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'lYN3G?g.$:(Jl};-bt2aHs8IWD}D4_4sR%=Gl3S|z]4u Y^w!qb|wgw&cOGJs@qA' );
define( 'SECURE_AUTH_KEY',  'T)l:F(]IM$GK|=e#>~/Y}`>:?.,jF,tyI<.,D0q7z*Zy+j}P2r?l@rIzgmrF@<uG' );
define( 'LOGGED_IN_KEY',    '*ED%Z8yWAwFrfH)b-@j;G-Y=#SfK:Y4!SmuNqLYeqWni6oR*Nml-7#=F^2UJ V[P' );
define( 'NONCE_KEY',        '5a,kn,3&XQaF?Xxoa,6ZrzDXk&B[Cw:8f?+B;!iMrMwg[S)/wr&y)9![I=85O]=K' );
define( 'AUTH_SALT',        '4>uHEucX:zLW`>%p/FkbUEN5~M/vTJZ&j]i!_i2c<8||1!PCI1Af5sc6wTl2P<oO' );
define( 'SECURE_AUTH_SALT', 'F 6eDDm%z@jQ:P6#bncgYKJmU|Nd=ItYCWYnA0gUt/2^OoUYE@rlZ7>$L)iMF?a`' );
define( 'LOGGED_IN_SALT',   'fp.Q/1#h>)`Zv_x<(zM~7O8kOzN++-Jj=1pjPSV* vXj?PbmQuT>x9?.mZ(qo$@A' );
define( 'NONCE_SALT',       '|e=Y+^Ba?;j2|zAIXs$ vO4SVEUW=f@r:sJj4=aLYIEvg#3?K8r%x?NZO!~sXzd-' );

/**#@-*/

/**
 * WordPress database table prefix.
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
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
